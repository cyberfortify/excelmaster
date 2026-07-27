import { getLessonBySlug } from "../utils/lesson";
import { lessonCategories } from "../data/lessons";

interface UseCurrentLessonProps {
  slug?: string;
}

export default function useCurrentLesson({
  slug,
}: UseCurrentLessonProps) {

  const lesson = getLessonBySlug(slug ?? "");

  if (!lesson) {
    return {
      lesson: null,
      currentCategory: null,
      moduleLessons: [],
      previousLesson: undefined,
      nextLesson: undefined,
      nextModule: undefined,
    };
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
    return {
      lesson,
      currentCategory: null,
      moduleLessons: [],
      previousLesson: undefined,
      nextLesson: undefined,
      nextModule: undefined,
    };
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

  return {
    lesson,
    currentCategory,
    moduleLessons,
    previousLesson,
    nextLesson,
    nextModule,
  };
}