import { ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { roadmapSteps } from "../../data/roadmap";

export default function LearningRoadmap() {
  return (
    <section>
      <div className="mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#1e8449]">
          Start Here
        </span>

        <h2 className="mt-3 text-4xl font-black text-gray-900 dark:text-white">
          Your Excel Learning Roadmap
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          Follow these lessons in order. Each topic builds on the previous one,
          giving you a structured path from complete beginner to confident Excel
          user.
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-emerald-200 dark:bg-emerald-900" />

        <div className="space-y-8">
          {roadmapSteps.map((step) => (
            <div key={step.id} className="relative flex gap-6">
              {/* Step Number */}
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e8449] font-bold text-white shadow-lg">
                {step.id}
              </div>

              {/* Card */}
              <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-[#111613]">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                      <Clock size={16} />
                      {step.duration}
                    </div>
                  </div>

                  <Link
                    to={`/lesson/${step.slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1e8449] px-5 py-3 font-semibold text-white transition hover:bg-[#166638]"
                  >
                    Start Lesson
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}