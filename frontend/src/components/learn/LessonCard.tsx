import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import type { Lesson } from "../../data/lessonTypes";

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const difficultyColors: Record<string, string> = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-amber-100 text-amber-700",
    Advanced: "bg-red-100 text-red-700",
    "Beginner → Intermediate": "bg-blue-100 text-blue-700",
    "Intermediate → Advanced": "bg-purple-100 text-purple-700",
  };

  return (
    <Link
      to={`/lesson/${lesson.slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1e8449] hover:shadow-lg"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-bold text-gray-900">
          {lesson.title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${difficultyColors[lesson.difficulty]
            }`}
        >
          {lesson.difficulty}
        </span>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={16} />
          {lesson.duration}
        </div>

        <div className="flex items-center gap-2 font-medium text-[#1e8449]">
          Start Lesson
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}