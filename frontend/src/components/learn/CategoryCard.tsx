import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    ArrowRight,
    BookOpen,
    Clock,
} from "lucide-react";

import { startModule } from "../../api/progress";
import CongratulationsModal from "./CongratulationsModal";



export default function CategoryCard({
    category,
    progress,
}) {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const lessons = category.sections
        ? category.sections.flatMap(section => section.lessons)
        : category.lessons;

    const handleStartLearning = async () => {

        // Module already started or completed
        if (progress) {
            navigate(`/lesson/${lessons[0].slug}`);
            return;
        }

        try {

            setLoading(true);

            await startModule(
                category.id,
                category.title
            );

            setShowModal(true);

        } catch (err) {

            console.error(err);

            alert("Unable to start module.");

        } finally {

            setLoading(false);

        }

    };

    return (

        <>
            <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">

                {/* Header */}

                <div className="flex items-start justify-between">

                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                        Level {category.level}
                    </span>

                    <BookOpen
                        size={22}
                        className="text-emerald-600"
                    />

                </div>

                {/* Title */}

                <h2 className="mt-5 text-xl font-bold text-slate-900 dark:text-white line-clamp-2">
                    {category.title}
                </h2>

                {/* Description */}

                <p className="mt-2 h-12 overflow-hidden text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {category.description}
                </p>

                {/* Meta */}

                <div className="mt-6 flex items-center justify-between">

                    <div className="flex items-center gap-2 text-sm text-slate-500">

                        <BookOpen size={16} />

                        <span>
                            {lessons.length} Lessons
                        </span>

                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">

                        <Clock size={16} />

                        <span>
                            {category.duration}
                        </span>

                    </div>

                </div>

                {/* Difficulty */}

                <div className="mt-4">

                    <span className={`
                    inline-flex rounded-full px-3 py-1 text-xs font-semibold
                    ${category.difficulty === "Beginner"
                            ? "bg-green-100 text-green-700"
                            : category.difficulty === "Intermediate"
                                ? "bg-amber-100 text-amber-700"
                                : "bg-red-100 text-red-700"
                        }
                `}>
                        {category.difficulty}
                    </span>

                </div>
                <div className="mt-4 h-6">
                    {progress ? (
                        <p className="text-sm font-medium text-emerald-600">
                            {progress.progress}% Completed
                        </p>
                    ) : (
                        <p className="text-sm text-transparent">
                            Placeholder
                        </p>
                    )}
                </div>

                {/* Button */}

                <button
                    onClick={handleStartLearning}
                    disabled={loading}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
                >

                    {loading
                        ? "Starting..."
                        : progress
                            ? progress.status === "completed"
                                ? "Review Module"
                                : "Continue Learning"
                            : "Start Learning"}

                    <ArrowRight size={16} />

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