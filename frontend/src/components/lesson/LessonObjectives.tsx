import { CheckCircle2 } from "lucide-react";

interface LessonObjectivesProps {
  objectives?: string[];
}

export default function LessonObjectives({
  objectives = [],
}: LessonObjectivesProps) {
  if (objectives.length === 0) {
    return null;
  }

  return (
    <section className="mb-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-900/30 dark:bg-emerald-900/10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        In this lesson you'll learn
      </h2>

      <div className="mt-6 space-y-4">
        {objectives.map((objective) => (
          <div
            key={objective}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              className="mt-1 text-[#1e8449]"
              size={20}
            />

            <p className="text-gray-700 dark:text-gray-300">
              {objective}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}