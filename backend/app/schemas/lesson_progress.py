from pydantic import BaseModel


class CompleteLessonRequest(BaseModel):
    module_slug: str
    lesson_slug: str
    total_lessons: int


class LessonProgressResponse(BaseModel):
    message: str
    progress: float
    completed_lessons: int
    total_lessons: int
    module_completed: bool

class ModuleLessonProgressResponse(BaseModel):
    progress: float
    completed_lessons: int
    total_lessons: int
    module_completed: bool