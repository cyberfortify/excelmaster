from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    DateTime,
    ForeignKey,
)

from sqlalchemy.orm import relationship

from datetime import datetime

from app.database import Base


class LessonProgress(Base):

    __tablename__ = "lesson_progress"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False,
    )

    module_slug = Column(
        String,
        nullable=False,
    )

    lesson_slug = Column(
        String,
        nullable=False,
    )

    completed = Column(
        Boolean,
        default=False,
    )

    completed_at = Column(DateTime)

    created_at = Column(
        DateTime,
        default=datetime.utcnow,
    )

    user = relationship(
        "User",
    )