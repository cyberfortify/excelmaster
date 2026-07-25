import { BookOpen, GraduationCap, Layers } from "lucide-react";

const stats = [
  {
    value: "300+",
    label: "Lessons",
    icon: BookOpen,
  },
  {
    value: "8",
    label: "Learning Modules",
    icon: Layers,
  },
  {
    value: "100%",
    label: "Free Forever",
    icon: GraduationCap,
  },
];

export default function LearnHero() {
  return (
    <section className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 lg:p-12 dark:border-white/10 dark:from-[#102417] dark:via-[#0b0f0d] dark:to-[#0f1f18]">
      <div className="max-w-3xl">
        <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-[#1e8449] dark:bg-emerald-900/30 dark:text-emerald-400">
          Beginner Friendly
        </span>

        <h1 className="mt-6 text-4xl font-black text-gray-900 lg:text-6xl dark:text-white">
          Learn Microsoft Excel
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          Follow a structured learning path designed for complete beginners.
          Every lesson builds on the previous one so you can confidently master
          Excel from the ground up.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {stats.map(({ value, label, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl border border-white/70 bg-white/70 p-6 backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <Icon className="mb-4 text-[#1e8449]" size={28} />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              {value}
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}