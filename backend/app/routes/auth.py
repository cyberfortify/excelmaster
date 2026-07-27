from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.database import get_db

from app.schemas.auth import SignupRequest
from app.schemas.auth import AuthResponse
from app.schemas.auth import LoginRequest

from app.services.auth_service import create_user
from app.services.auth_service import get_user_by_email
from app.services.auth_service import authenticate_user

from app.utils.jwt import create_access_token

from app.schemas.auth import UserResponse
from app.utils.dependencies import get_current_user
from app.models.user import User

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"]
)


@router.post(
    "/signup",
    response_model=AuthResponse
)
def signup(
    data: SignupRequest,
    db: Session = Depends(get_db)
):

    existing_user = get_user_by_email(
        db,
        data.email
    )

    if existing_user:

        raise HTTPException(
            status_code=400,
            detail="Email already registered."
        )

    user = create_user(
        db,
        data
    )

    token = create_access_token(
        {
            "sub": str(user.id)
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }


@router.post(
    "/login",
    response_model=AuthResponse
)
def login(
    data: LoginRequest,
    db: Session = Depends(get_db)
):

    user = authenticate_user(
        db,
        data.email,
        data.password
    )

    if not user:

        raise HTTPException(
            status_code=401,
            detail="Invalid email or password."
        )

    token = create_access_token(
        {
            "sub": str(user.id)
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user
    }


@router.get(
    "/me",
    response_model=UserResponse
)
def get_me(
    current_user: User = Depends(get_current_user)
):
    return current_user