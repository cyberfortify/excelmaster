import { useEffect, useMemo, useState } from "react";
import { getProgress } from "../../api/progress";
import { BookOpen, Clock, Target } from "lucide-react";

import SearchBar from "../../components/learn/SearchBar";
import CategoryCard from "../../components/learn/CategoryCard";
import SectionHeading from "../../components/ui/SectionHeading";

import { lessonCategories } from "../../data/lessons";

export default function Learn() {
  const [search, setSearch] = useState("");
  const [progressList, setProgressList] = useState([]);

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return lessonCategories;

    const query = search.toLowerCase();

    return lessonCategories.filter((category) => {
      const lessons = category.sections
        ? category.sections.flatMap((section) => section.lessons)
        : category.lessons;

      return (
        category.title.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query) ||
        lessons.some((lesson) => lesson.title.toLowerCase().includes(query))
      );
    });
  }, [search]);

  const totalLessons = lessonCategories.reduce((count, category) => {
    const lessons = category.sections
      ? category.sections.flatMap((section) => section.lessons)
      : category.lessons;

    return count + lessons.length;
  }, 0);

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const data = await getProgress();
        setProgressList(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadProgress();
  }, []);

  return (
    <main className="bg-white dark:bg-[#0b0f0d]">
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/20 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-900/10 sm:h-96 sm:w-96" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        {/* Hero */}
        <section className="relative text-center">
          <h1 className="mt-2 text-2xl font-black leading-tight tracking-tight text-gray-900 sm:mt-4 sm:text-4xl md:text-5xl dark:text-white">
            Learn Microsoft Excel
            <span className="block text-emerald-600">
              Beginner to Advanced
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8 dark:text-slate-400">
            Learn Excel step by step with practical lessons, formulas,
            charts, dashboards, Power Query, automation and more.
          </p>
        </section>

        {/* Stats */}
        <div className="relative mt-6 flex flex-wrap justify-center gap-2.5 sm:mt-10 sm:gap-4">
          <div className="flex items-center gap-1.5 rounded-xl border border-gray-300 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2 dark:border-white/10">
            <BookOpen size={16} className="shrink-0 text-emerald-600 sm:hidden" />
            <BookOpen size={18} className="hidden shrink-0 text-emerald-600 sm:block" />
            <span className="text-xs font-medium text-gray-700 sm:text-base dark:text-gray-300">
              {totalLessons}+ Lessons
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-gray-300 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2 dark:border-white/10">
            <Clock size={16} className="shrink-0 text-emerald-600 sm:hidden" />
            <Clock size={18} className="hidden shrink-0 text-emerald-600 sm:block" />
            <span className="text-xs font-medium text-gray-700 sm:text-base dark:text-gray-300">
              12+ Hours
            </span>
          </div>

          <div className="flex items-center gap-1.5 rounded-xl border border-gray-300 px-3 py-1.5 sm:gap-2 sm:px-4 sm:py-2 dark:border-white/10">
            <Target size={16} className="shrink-0 text-emerald-600 sm:hidden" />
            <Target size={18} className="hidden shrink-0 text-emerald-600 sm:block" />
            <span className="text-xs font-medium text-gray-700 sm:text-base dark:text-gray-300">
              100% Free
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="relative mt-6 sm:mt-10">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Categories */}
        <section className="relative mt-10 sm:mt-14">
          <SectionHeading
            title="Learning Path"
            description="Choose any topic and start learning Excel from beginner to advanced."
          />

          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCategories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                progress={progressList.find(
                  (item) => item.module_slug === category.id
                )}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}