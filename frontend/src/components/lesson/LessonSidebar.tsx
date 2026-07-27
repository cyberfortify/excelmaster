import { useState } from "react";
import { NavLink } from "react-router-dom";
import { lessonCategories } from "../../data/lessons";
import { CheckCircle2, Circle, ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  useLessonProgressContext,
} from "../../context/LessonProgressContext";

interface Props {
  currentSlug?: string;
}

export default function LessonSidebar({ currentSlug }: Props) {
  const { completedLessons, readingProgress } = useLessonProgressContext();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<string[]>([]);

  const currentCategory = lessonCategories.find((category) => {
    const sections = category.sections ?? [
      { title: "", lessons: category.lessons ?? [] },
    ];
    return sections.some((section) =>
      section.lessons.some((lesson) => lesson.slug === currentSlug)
    );
  });

  if (!currentCategory) return null;

  const sections = currentCategory.sections ?? [
    { title: "", lessons: currentCategory.lessons ?? [] },
  ];

  const allLessons = sections.flatMap((s) => s.lessons);
  const completedCount = allLessons.filter((l) =>
    completedLessons.includes(l.slug)
  ).length;
  const overallPercent = allLessons.length
    ? Math.round((completedCount / allLessons.length) * 100)
    : 0;

  const toggleSection = (title: string) => {
    setCollapsedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const sidebarContent = (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="border-b border-slate-100 p-6 dark:border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#2fa866] to-[#175c37] text-white shadow-md shadow-emerald-900/20">
            <GraduationCap size={18} />
          </div>
          <div>
            <h2 className="text-base font-bold leading-tight text-gray-900 dark:text-white">
              Excel Course
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {currentCategory.title}
            </p>
          </div>
        </div>

        {/* Overall progress */}
        <div className="mt-5">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="font-medium text-slate-500 dark:text-slate-400">
              Overall progress
            </span>
            <span className="font-semibold text-[#1e8449] dark:text-emerald-400">
              {completedCount}/{allLessons.length}
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#2fa866] to-[#1e8449]"
              initial={{ width: 0 }}
              animate={{ width: `${overallPercent}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto p-4">
        {sections.map((section, index) => {
          const sectionKey = section.title || `section-${index}`;
          const isCollapsed = collapsedSections.includes(sectionKey);
          const sectionCompleted = section.lessons.filter((l) =>
            completedLessons.includes(l.slug)
          ).length;

          return (
            <div key={sectionKey} className="mb-2">
              {section.title && (
                <button
                  onClick={() => toggleSection(sectionKey)}
                  className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left transition hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {section.title}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium text-slate-400">
                      {sectionCompleted}/{section.lessons.length}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-slate-400 transition-transform ${isCollapsed ? "-rotate-90" : ""
                        }`}
                    />
                  </div>
                </button>
              )}

              <AnimatePresence initial={false}>
                {!isCollapsed && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-1 space-y-1 pb-2">
                      {section.lessons.map((lesson) => {
                        const isDone = completedLessons.includes(lesson.slug);
                        const isCurrent = lesson.slug === currentSlug;

                        return (
                          <NavLink
                            key={lesson.slug}
                            to={`/lesson/${lesson.slug}`}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                              `group relative block rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive
                                ? "bg-[#1e8449] text-white shadow-sm shadow-emerald-900/20"
                                : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/5"
                              }`
                            }
                          >
                            {({ isActive }) => (
                              <div>
                                <div className="flex items-center gap-2.5">
                                  {isDone ? (
                                    <CheckCircle2
                                      size={16}
                                      className={`shrink-0 ${isActive
                                          ? "text-white"
                                          : "text-[#1e8449] dark:text-emerald-400"
                                        }`}
                                    />
                                  ) : (
                                    <Circle
                                      size={16}
                                      className={`shrink-0 ${isActive
                                          ? "text-white/60"
                                          : "text-slate-300 dark:text-slate-600"
                                        }`}
                                    />
                                  )}
                                  <span className="truncate">
                                    {lesson.title}
                                  </span>
                                </div>

                                {isCurrent && !isDone && (
                                  <div className="mt-2 pl-[26px]">
                                    <div
                                      className={`h-1.5 overflow-hidden rounded-full ${isActive
                                          ? "bg-white/25"
                                          : "bg-slate-200 dark:bg-slate-700"
                                        }`}
                                    >
                                      <motion.div
                                        className={`h-full rounded-full ${isActive
                                            ? "bg-white"
                                            : "bg-[#1e8449] dark:bg-emerald-400"
                                          }`}
                                        initial={{ width: 0 }}
                                        animate={{ width: `${readingProgress}%` }}
                                        transition={{ duration: 0.3 }}
                                      />
                                    </div>
                                  </div>
                                )}
                              </div>
                            )}
                          </NavLink>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#1e8449] text-white shadow-lg shadow-emerald-900/30 lg:hidden"
        aria-label="Open lesson menu"
      >
        <Menu size={20} />
      </button>

      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-80 shrink-0 border-r border-slate-200 bg-white lg:block dark:border-white/10 dark:bg-[#0b0f0d]">
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden dark:bg-[#0b0f0d]"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10"
              >
                <X size={18} />
              </button>
              {sidebarContent}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}