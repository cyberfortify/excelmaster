export type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "Beginner → Intermediate"
  | "Intermediate → Advanced";

export interface Lesson {
  id: number;
  title: string;
  slug: string;
  duration: string;
  difficulty: Difficulty;
  completed?: boolean;
}

export interface LessonSection {
  title: string;
  lessons: Lesson[];
}

/* Categories without sections */
export interface LessonCategoryWithLessons {
  id: string;
  level: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  duration: string;
  color: string;
  icon: string;
  lessons: Lesson[];
}

/* Categories with sections */
export interface LessonCategoryWithSections {
  id: string;
  level: number;
  title: string;
  description: string;
  difficulty: Difficulty;
  duration: string;
  color: string;
  icon: string;
  sections: LessonSection[];
}

/* Final type */
export type LessonCategory =
  | LessonCategoryWithLessons
  | LessonCategoryWithSections;


export function getLessons(category: LessonCategory): Lesson[] {
  if ("sections" in category) {
    return category.sections.flatMap(section => section.lessons);
  }

  return category.lessons;
}


export function getSections(category: LessonCategory): LessonSection[] {
  if ("sections" in category) {
    return category.sections;
  }

  return [
    {
      title: "",
      lessons: category.lessons,
    },
  ];
}