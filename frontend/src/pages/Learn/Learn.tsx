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
                ? category.sections.flatMap(section => section.lessons)
                : category.lessons;

            return (
                category.title.toLowerCase().includes(query) ||
                category.description.toLowerCase().includes(query) ||
                lessons.some(lesson =>
                    lesson.title.toLowerCase().includes(query)
                )
            );
        });
    }, [search]);

    const totalLessons = lessonCategories.reduce((count, category) => {
        const lessons = category.sections
            ? category.sections.flatMap(section => section.lessons)
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

            <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-25">

                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/20" />
                    <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-900/10" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />
                </div>

                {/* Hero */}
                <section className="text-center">

                    <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl text-gray-900 dark:text-white">
                        Learn Microsoft Excel
                        <span className="block text-emerald-600">
                            Beginner to Advanced
                        </span>
                    </h1>

                    <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        Learn Excel step by step with practical lessons,
                        formulas, charts, dashboards, Power Query,
                        automation and more.
                    </p>

                </section>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">

                    <div className="flex items-center gap-2 rounded-xl border px-4 py-2 border-gray-300 dark:border-white/10">
                        <BookOpen size={18} className="text-emerald-600 " />
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            {totalLessons}+ Lessons
                        </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border px-4 py-2 border-gray-300 dark:border-white/10">
                        <Clock size={18} className="text-emerald-600" />
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            12+ Hours
                        </span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border px-4 py-2 border-gray-300 dark:border-white/10">
                        <Target size={18} className="text-emerald-600" />
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                            100% Free
                        </span>
                    </div>

                </div>

                {/* Search */}
                <div className="mt-10">
                    <SearchBar
                        value={search}
                        onChange={setSearch}
                    />
                </div>

                {/* Categories */}
                <section className="mt-14">

                    <SectionHeading
                        title="Learning Path"
                        description="Choose any topic and start learning Excel from beginner to advanced."
                    />

                    <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                        {filteredCategories.map(category => (

                            <CategoryCard
                                key={category.id}
                                category={category}
                                progress={
                                    progressList.find(
                                        (item) => item.module_slug === category.id
                                    )
                                }
                            />

                        ))}

                    </div>

                </section>

            </div>

        </main>
    );
}