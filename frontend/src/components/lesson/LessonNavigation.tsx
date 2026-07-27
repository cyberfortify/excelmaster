import {
  useLessonProgressContext,
} from "../../context/LessonProgressContext";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

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
}

export default function LessonNavigation({
  currentLessonSlug,
  previous,
  next,
  nextModule,
}: LessonNavigationProps) {

  const navigate = useNavigate();

  const {
    readingProgress,
    completedLessons,
    markComplete,
  } = useLessonProgressContext();

  const handleNext = async (targetSlug: string) => {

    const alreadyCompleted =
      completedLessons.includes(currentLessonSlug);

    if (!alreadyCompleted && readingProgress < 95) {

      toast.error(
        "Please complete this lesson before continuing."
      );

      return;
    }

    if (!alreadyCompleted) {
      await markComplete();
    }

    navigate(`/lesson/${targetSlug}`);
  };


  return (
    <div className="mt-16 border-t border-slate-200 pt-8 dark:border-slate-700">

      <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:justify-between">

        {/* Previous */}
        {previous ? (
          <Link
            to={`/lesson/${previous.slug}`}
            className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-blue-500 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 md:max-w-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-blue-100 dark:bg-slate-800">
              <ArrowLeft size={20} />
            </div>

            <div className="min-w-0">
              <p className="text-sm text-slate-500">
                Previous Lesson
              </p>

              <p className="truncate font-semibold text-slate-900 dark:text-white">
                {previous.title}
              </p>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {/* Next Lesson */}
        {next ? (
          <button
            type="button"
            onClick={() => handleNext(next.slug)}
            className="group flex w-full items-center justify-between rounded-2xl bg-blue-600 p-5 text-white transition-all hover:bg-blue-700 md:ml-auto md:max-w-sm"
          >
            <div className="min-w-0">
              <p className="text-sm text-blue-100">
                Next Lesson
              </p>

              <p className="truncate font-semibold">
                {next.title}
              </p>
            </div>

            <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white/30">
              <ArrowRight size={20} />
            </div>
          </button>
        ) : nextModule ? (

          /* Last Lesson → Next Module */

          <button
            type="button"
            onClick={() =>
              handleNext(nextModule.firstLessonSlug)
            }
            className="group flex w-full items-center justify-between rounded-2xl bg-emerald-600 p-5 text-white transition-all hover:bg-emerald-700 md:ml-auto md:max-w-sm"
          >
            <div className="min-w-0">

              <p className="text-sm text-emerald-100">
                Continue to Module
              </p>

              <p className="truncate font-semibold">
                {nextModule.title}
              </p>

            </div>

            <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition group-hover:bg-white/30">
              <ArrowRight size={20} />
            </div>
          </button>

        ) : (

          /* Last Module */

          <div className="w-full rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center dark:border-emerald-800 dark:bg-emerald-950/20 md:ml-auto md:max-w-sm">

            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              🎉 Congratulations
            </p>

            <h3 className="mt-1 font-semibold text-slate-900 dark:text-white">
              You have completed the Excel Course!
            </h3>

          </div>

        )}

      </div>

    </div>
  );
}