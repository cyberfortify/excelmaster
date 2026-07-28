import { Navigate, useParams } from "react-router-dom";

import useCurrentLesson from "../../hooks/useCurrentLesson";

import LessonHeader from "../../components/lesson/LessonHeader";
import LessonContent from "../../components/lesson/LessonContent";
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


  const currentLessonNumber =
    moduleLessons.findIndex(
      item => item.slug === lesson.slug
    ) + 1;


  return (
    <div className="mx-auto max-w-4xl">

      <LessonHeader
        lesson={lesson}
        currentLessonNumber={currentLessonNumber}
        totalLessons={moduleLessons.length}
      />

      <LessonContent
        slug={lesson.slug}
      />

      <LessonNavigation
        currentLessonSlug={lesson.slug}
        previous={previousLesson}
        next={nextLesson}
        nextModule={nextModule}

        currentModuleTitle={currentCategory.title}
        currentModuleLessons={moduleLessons.length}
      />

    </div>
  );

}