import { Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import type { Lesson } from "../../data/lessonTypes";

interface LessonHeaderProps {
  lesson: Lesson;
  currentLessonNumber: number;
  totalLessons: number;
}

export default function LessonHeader({
  lesson,
  currentLessonNumber,
  totalLessons,
}: LessonHeaderProps) {
  return (
    <header className="mb-10 border-b border-slate-200 pb-8 dark:border-slate-800">

      {/* Top Row */}
      <div className="flex items-center justify-between gap-4">

        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
          {lesson.difficulty}
        </span>

        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
        >
          <ArrowLeft size={16} />
          Back to Learn
        </Link>

      </div>

      {/* Lesson Title */}
      <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white">
        {lesson.title}
      </h1>

      <div className="mt-6 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">

        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>{lesson.duration}</span>
        </div>

        <div className="lg:hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400">
          {currentLessonNumber} / {totalLessons}
        </div>

      </div>

    </header>
  );
}