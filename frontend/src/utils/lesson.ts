  import { lessonCategories } from "../data/lessons";
  import type { Lesson } from "../data/lessonTypes";

  export const lessons = lessonCategories.flatMap((category) => {
    if ("sections" in category) {
      return category.sections.flatMap((section) => section.lessons);
    }

    return category.lessons;
  });

  export function getLessonBySlug(slug: string): Lesson | undefined {
    return lessons.find((lesson) => lesson.slug === slug);
  }