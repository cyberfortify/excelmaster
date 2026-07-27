import { useState } from "react";
import {
  useLessonProgressContext,
} from "../../context/LessonProgressContext";
import { ArrowLeft, ArrowRight, PartyPopper } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ModuleCompleteModal from "./ModuleCompleteModal";

interface LessonLink {
  title: string;
  slug: string;
}

interface NextModule {
  title: string;
  firstLessonSlug: string;
}

interface LessonNavigationProps {
  currentLessonSlug: string;
  previous?: LessonLink;
  next?: LessonLink;
  nextModule?: NextModule;

  currentModuleTitle: string;
  currentModuleLessons: number;
}

export default function LessonNavigation({
  currentLessonSlug,
  previous,
  next,
  nextModule,

  currentModuleTitle,
  currentModuleLessons,
}: LessonNavigationProps) {
  const navigate = useNavigate();
  const [showModuleComplete, setShowModuleComplete] =
    useState(false);

  const [nextTarget, setNextTarget] =
    useState("");

  const { readingProgress, completedLessons, markComplete } =
    useLessonProgressContext();

  const handleNext = async (targetSlug: string) => {
    const alreadyCompleted = completedLessons.includes(currentLessonSlug);

    if (!alreadyCompleted && readingProgress < 95) {
      toast.error("Please complete this lesson before continuing.");
      return;
    }

    if (!alreadyCompleted) {
      await markComplete();

      if (nextModule) {
        setNextTarget(targetSlug);
        setShowModuleComplete(true);
        return;
      }

      toast.success("Lesson completed! 🎉");

      setTimeout(() => {
        navigate(`/lesson/${targetSlug}`);
      }, 800);

      return;
    }

    navigate(`/lesson/${targetSlug}`);
  };

  return (
    <>
      <div className="mt-12 border-t border-slate-200 pt-6 dark:border-white/10 sm:mt-16 sm:pt-8">
        <div className="flex gap-2.5 sm:gap-3">
          {/* Previous */}
          {previous ? (
            <Link
              to={`/lesson/${previous.slug}`}
              className="group flex min-w-0 flex-1 basis-0 items-center gap-2 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-[#1e8449] hover:bg-emerald-50 sm:gap-3 sm:p-4 dark:border-white/10 dark:bg-[#111613] dark:hover:bg-white/5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-emerald-100 sm:h-10 sm:w-10 dark:bg-white/10 dark:group-hover:bg-emerald-900/30">
                <ArrowLeft size={16} className="sm:hidden" />
                <ArrowLeft size={20} className="hidden sm:block" />
              </div>

              <div className="min-w-0 text-left">
                <p className="hidden text-xs text-slate-500 sm:block sm:text-sm dark:text-slate-400">
                  Previous Lesson
                </p>
                <p className="truncate text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                  {previous.title}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1 basis-0" />
          )}

          {/* Next Lesson */}
          {next ? (
            <button
              type="button"
              onClick={() => handleNext(next.slug)}
              className="group flex min-w-0 flex-1 basis-0 items-center justify-between gap-2 rounded-xl bg-[#1e8449] p-3 text-white shadow-sm shadow-emerald-900/20 transition hover:bg-[#166638] sm:gap-3 sm:p-4"
            >
              <div className="min-w-0 text-left">
                <p className="hidden text-xs text-emerald-100 sm:block sm:text-sm">
                  Next Lesson
                </p>
                <p className="truncate text-sm font-semibold sm:text-base">
                  {next.title}
                </p>
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white/30 sm:h-10 sm:w-10">
                <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={20} className="hidden sm:block" />
              </div>
            </button>
          ) : nextModule ? (
            /* Last Lesson → Next Module */
            <button
              type="button"
              onClick={() => handleNext(nextModule.firstLessonSlug)}
              className="group flex min-w-0 flex-1 basis-0 items-center justify-between gap-2 rounded-xl bg-[#1e8449] p-3 text-white shadow-sm shadow-emerald-900/20 transition hover:bg-[#166638] sm:gap-3 sm:p-4"
            >
              <div className="min-w-0 text-left">
                <p className="hidden text-xs text-emerald-100 sm:block sm:text-sm">
                  Continue to Module
                </p>
                <p className="truncate text-sm font-semibold sm:text-base">
                  {nextModule.title}
                </p>
              </div>

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white/30 sm:h-10 sm:w-10">
                <ArrowRight size={16} className="sm:hidden" />
                <ArrowRight size={20} className="hidden sm:block" />
              </div>
            </button>
          ) : (
            /* Last Module */
            <div className="flex w-full flex-col items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center sm:p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">
              <p className="flex items-center gap-1.5 text-sm font-medium text-[#1e8449] dark:text-emerald-400">
                <PartyPopper size={16} />
                Congratulations
              </p>
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
                You have completed the Excel Course!
              </h3>
            </div>
          )}
        </div>
      </div>

      <ModuleCompleteModal
        open={showModuleComplete}
        completedModule={currentModuleTitle}
        nextModule={nextModule?.title ?? ""}
        lessonsCompleted={currentModuleLessons}
        onContinue={() => {
          setShowModuleComplete(false);
          navigate(`/lesson/${nextTarget}`);
        }}
      />

    </>


  );
}