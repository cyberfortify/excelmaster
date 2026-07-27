from pydantic import BaseModel

class StartModuleRequest(BaseModel):
    module_slug: str
    module_name: str


class ProgressResponse(BaseModel):
    id: int
    module_slug: str
    module_name: str
    status: str
    progress: float

    class Config:
        from_attributes = True


class UpdateProgressRequest(BaseModel):
    module_slug: str
    progress: float


