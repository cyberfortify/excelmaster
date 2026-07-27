from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.database import get_db

from app.utils.dependencies import get_current_user
from app.models.user import User

from app.models.learning_progress import LearningProgress

from app.schemas.progress import StartModuleRequest
from pydantic import BaseModel

router = APIRouter(
    prefix="/api/progress",
    tags=["Progress"]
)

class UpdateProgressRequest(BaseModel):
    module_slug: str
    progress: float

@router.post("/start")
def start_module(
    request: StartModuleRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    existing = (
        db.query(LearningProgress)
        .filter(
            LearningProgress.user_id == current_user.id,
            LearningProgress.module_slug == request.module_slug,
        )
        .first()
    )

    if existing:
        raise HTTPException(
            status_code=400,
            detail="Module already started."
        )

    progress = LearningProgress(
        user_id=current_user.id,
        module_slug=request.module_slug,
        module_name=request.module_name,
        status="started",
        progress=0,
    )

    db.add(progress)
    db.commit()
    db.refresh(progress)

    return {
        "message": "Learning journey started 🚀",
        "progress": progress,
    }



@router.put("/update")
def update_progress(
    request: UpdateProgressRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    progress = (
        db.query(LearningProgress)
        .filter(
            LearningProgress.user_id == current_user.id,
            LearningProgress.module_slug == request.module_slug,
        )
        .first()
    )

    if not progress:
        raise HTTPException(
            status_code=404,
            detail="Progress not found."
        )

    progress.progress = request.progress

    if request.progress >= 100:
        progress.status = "completed"

    db.commit()
    db.refresh(progress)

    return progress



@router.get("/")
def get_progress(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    progress = (
        db.query(LearningProgress)
        .filter(
            LearningProgress.user_id == current_user.id
        )
        .all()
    )

    return progress


@router.get("/dashboard")
def dashboard_summary(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    records = (
        db.query(LearningProgress)
        .filter(
            LearningProgress.user_id == current_user.id
        )
        .all()
    )

    started = len(records)

    completed = len([
        item for item in records
        if item.status == "completed"
    ])

    in_progress = len([
        item for item in records
        if item.status != "completed"
    ])

    return {
        "courses_started": started,
        "courses_completed": completed,
        "courses_in_progress": in_progress,
        "progress": records,
    }