import { useEffect, useState } from "react";

import {
  completeLesson,
  getModuleLessonProgress,
  getCompletedLessons,
} from "../api/progress";

import type {
  LessonProgressResponse,
  LessonStatus,
} from "../api/progress";

interface UseLessonProgressProps {
  moduleSlug: string;
  lessonSlug: string;
  totalLessons: number;
}

export default function useLessonProgress({
  moduleSlug,
  lessonSlug,
  totalLessons,
}: UseLessonProgressProps) {

  const [loading, setLoading] = useState(false);

  const [progress, setProgress] =
    useState<LessonProgressResponse | null>(null);

  const [completedLessons, setCompletedLessons] =
    useState<string[]>([]);

  const loadProgress = async () => {

    try {

      const moduleProgress =
        await getModuleLessonProgress(
          moduleSlug,
          totalLessons
        );

      setProgress(moduleProgress);

      const lessonStatus: LessonStatus[] =
        await getCompletedLessons(moduleSlug);

      setCompletedLessons(

        lessonStatus
          .filter(item => item.completed)
          .map(item => item.lesson_slug)

      );

    } catch (error) {

      console.error(error);

    }

  };

  useEffect(() => {

    loadProgress();

  }, [moduleSlug, totalLessons]);

  const markComplete = async () => {

    try {

      setLoading(true);

      const response =
        await completeLesson({

          module_slug: moduleSlug,
          lesson_slug: lessonSlug,
          total_lessons: totalLessons,

        });

      setProgress(response);

      await loadProgress();

      return response;

    } finally {

      setLoading(false);

    }

  };

  return {

    loading,

    progress,

    completedLessons,

    markComplete,

    refreshProgress: loadProgress,

  };

}