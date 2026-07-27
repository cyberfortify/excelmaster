import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  CheckCircle2,
} from "lucide-react";
import { lessonCategories } from "../../data/lessons";

import { useEffect, useState } from "react";

import {
  getCompletedLessons,
} from "../../api/progress";

import type {
  LessonStatus,
} from "../../api/progress";

interface MobileLessonSidebarProps {
  currentSlug?: string;
}

export default function MobileLessonSidebar({
  currentSlug,
}: MobileLessonSidebarProps) {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const currentCategory = lessonCategories.find((category) => {
    const sections = category.sections ?? [
      {
        title: "",
        lessons: category.lessons ?? [],
      },
    ];

    return sections.some((section) =>
      section.lessons.some(
        (lesson) => lesson.slug === currentSlug
      )
    );
  });


  useEffect(() => {

    if (!currentCategory) return;

    const loadCompletedLessons = async () => {

      try {

        const lessonStatus: LessonStatus[] =
          await getCompletedLessons(currentCategory.id);

        setCompletedLessons(

          lessonStatus
            .filter(item => item.completed)
            .map(item => item.lesson_slug)

        );

      } catch (error) {

        console.error(error);

      }

    };

    loadCompletedLessons();

  }, [currentCategory]);
  if (!currentCategory) return null;

  const sections = currentCategory.sections ?? [
    {
      title: "",
      lessons: currentCategory.lessons ?? [],
    },
  ];

  return (
    <>
      {/* Button */}

      <button
        onClick={() => setOpen(true)}
        className="mb-8 flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left font-semibold transition lg:hidden text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
      >
        <Menu
          size={18}
          className={`transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"
            }`}
        />

        {currentCategory.title}
      </button>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-80 overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-slate-950 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="sticky top-0 flex items-center justify-between border-b bg-white p-5 dark:bg-slate-950">

          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            {currentCategory.title}
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X
              size={22}
              className="text-slate-700 dark:text-white"
            />
          </button>

        </div>

        <div className="space-y-6 p-5">

          {sections.map((section, index) => (

            <div key={section.title || index}>

              {section.title && (

                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">

                  {section.title}

                </h3>

              )}

              <div className="space-y-1">

                {section.lessons.map((lesson) => (

                  <NavLink
                    key={lesson.slug}
                    to={`/lesson/${lesson.slug}`}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 text-sm transition ${isActive
                        ? "bg-emerald-600 text-white"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      }`
                    }
                  >
                    {({ isActive }) => (

                      <div className="flex items-center justify-between">

                        <span className="truncate">

                          {lesson.title}

                        </span>

                        {completedLessons.includes(lesson.slug) ? (

                          <CheckCircle2
                            size={18}
                            className={
                              isActive
                                ? "text-white"
                                : "text-emerald-500"
                            }
                          />

                        ) : null}

                      </div>

                    )}
                  </NavLink>

                ))}

              </div>

            </div>

          ))}

        </div>

      </aside>
    </>
  );
}