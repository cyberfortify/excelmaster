import {
  createContext,
  useContext,
} from "react";

import type { ReactNode } from "react";

import useCurrentLesson from "../hooks/useCurrentLesson";
import useLessonProgress from "../hooks/useLessonProgress";

interface Props {
  slug?: string;
  children: ReactNode;
}

type LessonContextType = {
  lessonData: ReturnType<typeof useCurrentLesson>;
  progressData: ReturnType<typeof useLessonProgress>;
};

const LessonContext =
  createContext<LessonContextType | null>(null);

export function LessonProvider({
  slug,
  children,
}: Props) {

  const lessonData = useCurrentLesson({ slug });

  if (!lessonData.lesson || !lessonData.currentCategory) {
    return null;
  }

  const progressData = useLessonProgress({
    moduleSlug: lessonData.currentCategory.id,
    lessonSlug: lessonData.lesson.slug,
    totalLessons: lessonData.moduleLessons.length,
  });

  return (
    <LessonContext.Provider
      value={{
        lessonData,
        progressData,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
}

export function useLessonContext() {

  const context = useContext(LessonContext);

  if (!context) {
    throw new Error(
      "useLessonContext must be used inside LessonProvider"
    );
  }

  return context;
}