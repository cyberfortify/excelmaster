from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import ForeignKey
from sqlalchemy import DateTime
from sqlalchemy import Float

from datetime import datetime

from sqlalchemy.orm import relationship

from app.database import Base


class LearningProgress(Base):

    __tablename__ = "learning_progress"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        nullable=False
    )

    module_slug = Column(
        String(100),
        nullable=False
    )

    module_name = Column(
        String(255),
        nullable=False
    )

    status = Column(
        String(50),
        default="started"
    )

    progress = Column(
        Float,
        default=0
    )

    started_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    completed_at = Column(
        DateTime,
        nullable=True
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )

    updated_at = Column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow
    )

    user = relationship(
        "User",
        back_populates="learning_progress"
    )