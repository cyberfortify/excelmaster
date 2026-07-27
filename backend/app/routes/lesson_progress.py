from datetime import datetime

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.utils.dependencies import get_current_user

from app.models.user import User
from app.models.lesson_progress import LessonProgress
from app.models.learning_progress import LearningProgress

from app.schemas.lesson_progress import (
    CompleteLessonRequest,
    LessonProgressResponse,
    ModuleLessonProgressResponse,
)

router = APIRouter(
    prefix="/api/lesson-progress",
    tags=["Lesson Progress"],
)


@router.post(
    "/complete",
    response_model=LessonProgressResponse,
)
def complete_lesson(
    request: CompleteLessonRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    # Check if lesson is already completed
    existing_lesson = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == current_user.id,
            LessonProgress.lesson_slug == request.lesson_slug,
        )
        .first()
    )

    if existing_lesson:
        raise HTTPException(
            status_code=400,
            detail="Lesson already completed."
        )

    # Save lesson progress
    lesson_progress = LessonProgress(
        user_id=current_user.id,
        module_slug=request.module_slug,
        lesson_slug=request.lesson_slug,
        completed=True,
        completed_at=datetime.utcnow(),
    )

    db.add(lesson_progress)
    db.commit()

    # Count completed lessons
    completed_lessons = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == current_user.id,
            LessonProgress.module_slug == request.module_slug,
            LessonProgress.completed == True,
        )
        .count()
    )

    # Calculate progress percentage
    progress = round(
        (completed_lessons / request.total_lessons) * 100,
        2
    )

    # Find learning progress record
    module_progress = (
        db.query(LearningProgress)
        .filter(
            LearningProgress.user_id == current_user.id,
            LearningProgress.module_slug == request.module_slug,
        )
        .first()
    )

    if not module_progress:
        raise HTTPException(
            status_code=404,
            detail="Module not found. Please start the module first."
        )

    # Update progress
    module_progress.progress = progress

    if progress >= 100:
        module_progress.status = "completed"
        module_progress.completed_at = datetime.utcnow()
    else:
        module_progress.status = "started"

    db.commit()
    db.refresh(module_progress)

    return LessonProgressResponse(
        message="Lesson completed successfully.",
        progress=progress,
        completed_lessons=completed_lessons,
        total_lessons=request.total_lessons,
        module_completed=(progress >= 100),
    )


@router.get(
    "/module/{module_slug}",
    response_model=ModuleLessonProgressResponse,
)
def get_module_progress(
    module_slug: str,
    total_lessons: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    completed_lessons = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == current_user.id,
            LessonProgress.module_slug == module_slug,
            LessonProgress.completed == True,
        )
        .count()
    )

    progress = 0

    if total_lessons > 0:
        progress = round(
            (completed_lessons / total_lessons) * 100,
            2,
        )

    return ModuleLessonProgressResponse(
        progress=progress,
        completed_lessons=completed_lessons,
        total_lessons=total_lessons,
        module_completed=(progress >= 100),
    )


@router.get("/list/{module_slug}")
def get_completed_lessons(
    module_slug: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    lessons = (
        db.query(LessonProgress)
        .filter(
            LessonProgress.user_id == current_user.id,
            LessonProgress.module_slug == module_slug,
        )
        .all()
    )

    return [
        {
            "lesson_slug": lesson.lesson_slug,
            "completed": lesson.completed,
        }
        for lesson in lessons
    ]