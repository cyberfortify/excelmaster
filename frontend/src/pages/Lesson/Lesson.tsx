import { Navigate, useParams } from "react-router-dom";

import useCurrentLesson from "../../hooks/useCurrentLesson";

import {
  useLessonProgressContext,
} from "../../context/LessonProgressContext";

import LessonHeader from "../../components/lesson/LessonHeader";
import LessonContent from "../../components/lesson/LessonContent";
import MobileLessonSidebar from "../../components/lesson/MobileLessonSidebar";
import LessonNavigation from "../../components/lesson/LessonNavigation";

export default function Lesson() {

  const { slug } = useParams();

  const {
    lesson,
    currentCategory,
    moduleLessons,
    previousLesson,
    nextLesson,
    nextModule,
  } = useCurrentLesson({ slug });

  if (!lesson) {
    return <Navigate to="/404" replace />;
  }

  if (!currentCategory) {
    return <Navigate to="/404" replace />;
  }

  // Shared lesson progress from context
  const {
    loading,
    progress,
    completedLessons,
    markComplete,
    refreshProgress,
  } = useLessonProgressContext();

  return (
    <div className="mx-auto max-w-4xl">

      <MobileLessonSidebar
        currentSlug={lesson.slug}
      />

      <LessonHeader
        lesson={lesson}
      />

      <LessonContent
        slug={lesson.slug}
      />

      <LessonNavigation
        previous={previousLesson}
        next={nextLesson}
        nextModule={nextModule}
      />

    </div>
  );

}