export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

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

export interface LessonCategory {
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