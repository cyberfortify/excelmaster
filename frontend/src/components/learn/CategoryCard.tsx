import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";

import {
  ArrowRight,
  BookOpen,
  Clock,
} from "lucide-react";

import { startModule } from "../../api/progress";
import CongratulationsModal from "./CongratulationsModal";

export default function CategoryCard({ category, progress }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const lessons = category.sections
    ? category.sections.flatMap((section) => section.lessons)
    : category.lessons;

  const handleStartLearning = async () => {

    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    // Module already started or completed
    if (progress) {
      navigate(`/lesson/${lessons[0].slug}`);
      return;
    }

    try {
      setLoading(true);

      await startModule(category.id, category.title);

      setShowModal(true);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl sm:rounded-2xl sm:p-5 dark:border-white/10 dark:bg-[#111613]">
        {/* Header */}
        <div className="flex items-start justify-between">
          <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700 sm:px-3 sm:text-xs dark:bg-emerald-900/30 dark:text-emerald-300">
            Level {category.level}
          </span>

          <BookOpen size={18} className="shrink-0 text-emerald-600 sm:hidden" />
          <BookOpen size={22} className="hidden shrink-0 text-emerald-600 sm:block" />
        </div>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-base font-bold text-slate-900 sm:mt-5 sm:text-xl dark:text-white">
          {category.title}
        </h2>

        {/* Description */}
        <p className="mt-1.5 h-10 overflow-hidden text-xs leading-5 text-slate-500 sm:mt-2 sm:h-12 sm:text-sm sm:leading-6 dark:text-slate-400">
          {category.description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center justify-between sm:mt-6">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 sm:gap-2 sm:text-sm">
            <BookOpen size={14} className="shrink-0 sm:hidden" />
            <BookOpen size={16} className="hidden shrink-0 sm:block" />
            <span>{lessons.length} Lessons</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 sm:gap-2 sm:text-sm">
            <Clock size={14} className="shrink-0 sm:hidden" />
            <Clock size={16} className="hidden shrink-0 sm:block" />
            <span>{category.duration}</span>
          </div>
        </div>

        {/* Difficulty */}
        <div className="mt-3 sm:mt-4">
          <span
            className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold sm:px-3 sm:text-xs ${category.difficulty === "Beginner"
              ? "bg-green-100 text-green-700"
              : category.difficulty === "Intermediate"
                ? "bg-amber-100 text-amber-700"
                : "bg-red-100 text-red-700"
              }`}
          >
            {category.difficulty}
          </span>
        </div>

        <div className="mt-3 h-5 sm:mt-4 sm:h-6">
          {progress ? (
            <p className="text-xs font-medium text-emerald-600 sm:text-sm">
              {progress.progress}% Completed
            </p>
          ) : (
            <p className="text-xs text-transparent sm:text-sm">Placeholder</p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={handleStartLearning}
          disabled={loading}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60 sm:mt-5 sm:py-3 sm:text-sm"
        >
          {loading
            ? "Starting..."
            : progress
              ? progress.status === "completed"
                ? "Review Module"
                : "Continue Learning"
              : "Start Learning"}

          <ArrowRight size={14} className="shrink-0 sm:hidden" />
          <ArrowRight size={16} className="hidden shrink-0 sm:block" />
        </button>
      </div>

      <CongratulationsModal
        open={showModal}
        module={{
          title: category.title,
          lessons,
          duration: category.duration,
          difficulty: category.difficulty,
        }}
        onStart={() => {
          setShowModal(false);
          navigate(`/lesson/${lessons[0].slug}`);
        }}
      />
    </>
  );
}