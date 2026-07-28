import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import type { Module } from "../../types/module";

interface Props {
  module: Module;
}

export default function ModuleCard({ module }: Props) {
  const Icon = module.icon;

  return (
    <Link
      to={`/module/${module.slug}`}
      className="group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1e8449]/40 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#1e8449] dark:bg-emerald-900/20">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
        {module.title}
      </h3>

      <p className="mt-3 text-gray-600 dark:text-gray-400">
        {module.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <BookOpen size={16} />
          {module.lessons} Lessons
        </div>

        <div className="flex items-center gap-2">
          <Clock size={16} />
          {module.duration}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-[#1e8449] dark:bg-emerald-900/20 dark:text-emerald-400">
          {module.difficulty}
        </span>

        <span className="flex items-center gap-2 font-semibold text-[#1e8449]">
          Start Module
          <ArrowRight
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}