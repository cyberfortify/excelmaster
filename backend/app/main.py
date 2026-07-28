from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.routes.auth import router as auth_router
from app.routes.progress import router as progress_router
from app.routes.lesson_progress import router as lesson_progress_router

import app.models

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Excel Master API",
    version="1.0.0"
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://excelmaster-seven.vercel.app",
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(progress_router)
app.include_router(lesson_progress_router)

@app.get("/")
def home():
    return {
        "message": "Excel Master Backend Running 🚀"
    }