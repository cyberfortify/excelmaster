import { Navigate, Outlet, useParams } from "react-router-dom";

import LessonSidebar from "./LessonSidebar";

import useCurrentLesson from "../../hooks/useCurrentLesson";
import useLessonProgress from "../../hooks/useLessonProgress";

import {
  LessonProgressProvider,
} from "../../context/LessonProgressContext";


export default function LessonLayout() {

  const { slug } = useParams();

  const {
    lesson,
    currentCategory,
    moduleLessons,
  } = useCurrentLesson({ slug });

  if (!lesson || !currentCategory) {
    return <Navigate to="/404" replace />;
  }

  const lessonProgress = useLessonProgress({
    moduleSlug: currentCategory.id,
    lessonSlug: lesson.slug,
    totalLessons: moduleLessons.length,
  });

  return (

    <LessonProgressProvider value={lessonProgress}>

      <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-950">

        <LessonSidebar currentSlug={slug} />

        <main className="flex-1 min-w-0 px-5 py-8 lg:px-8 lg:py-10">

          <Outlet />

        </main>

      </div>

    </LessonProgressProvider>

  );

}