import { Navigate, useParams } from "react-router-dom";

import LessonHeader from "../../components/lesson/LessonHeader";
import LessonContent from "../../components/lesson/LessonContent";
import MobileLessonSidebar from "../../components/lesson/MobileLessonSidebar";
import LessonNavigation from "../../components/lesson/LessonNavigation";

import { getLessonBySlug } from "../../utils/lesson";
import { lessonCategories } from "../../data/lessons";

export default function Lesson() {
  const { slug } = useParams();

  const lesson = getLessonBySlug(slug ?? "");

  if (!lesson) {
    return <Navigate to="/404" replace />;
  }

  // Find current module
  const currentCategory = lessonCategories.find((category) => {
    const sections = category.sections ?? [
      {
        title: "",
        lessons: category.lessons ?? [],
      },
    ];

    return sections.some((section) =>
      section.lessons.some(
        (item) => item.slug === lesson.slug
      )
    );
  });

  if (!currentCategory) {
    return <Navigate to="/404" replace />;
  }

  // Lessons only from current module
  const moduleLessons =
    currentCategory.sections?.flatMap(
      (section) => section.lessons
    ) ??
    currentCategory.lessons ??
    [];

  const currentIndex = moduleLessons.findIndex(
    (item) => item.slug === lesson.slug
  );

  const previousLesson =
    currentIndex > 0
      ? moduleLessons[currentIndex - 1]
      : undefined;

  const nextLesson =
    currentIndex < moduleLessons.length - 1
      ? moduleLessons[currentIndex + 1]
      : undefined;

  // Next module
  const currentCategoryIndex =
    lessonCategories.findIndex(
      (category) => category.id === currentCategory.id
    );

  const nextCategory =
    lessonCategories[currentCategoryIndex + 1];

  const nextModule =
    nextLesson || !nextCategory
      ? undefined
      : {
          title: nextCategory.title,
          firstLessonSlug:
            (
              nextCategory.sections?.[0]?.lessons?.[0] ??
              nextCategory.lessons?.[0]
            )?.slug,
        };

  return (
    <div className="mx-auto max-w-4xl">

      <MobileLessonSidebar currentSlug={lesson.slug} />

      <LessonHeader lesson={lesson} />

      <LessonContent slug={lesson.slug} />

      <LessonNavigation
        previous={previousLesson}
        next={nextLesson}
        nextModule={nextModule}
      />

    </div>
  );
}