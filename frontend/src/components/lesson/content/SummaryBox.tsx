// Therory

import { CheckCircle2 } from "lucide-react";

interface SummaryBoxProps {
  points: string[];
}

export default function SummaryBox({ points }: SummaryBoxProps) {
  return (
    <section className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 sm:mt-12 sm:rounded-2xl sm:p-6 dark:border-emerald-900/40 dark:bg-emerald-900/10">
      <h2 className="mb-3 text-lg font-bold text-emerald-800 sm:mb-5 sm:text-2xl dark:text-emerald-300">
        Summary
      </h2>

      <div className="space-y-2.5 sm:space-y-3">
        {points.map((point) => (
          <div key={point} className="flex items-start gap-2.5 sm:gap-3">
            <CheckCircle2
              size={16}
              className="mt-0.5 shrink-0 text-emerald-600 sm:mt-1 sm:hidden"
            />
            <CheckCircle2
              size={18}
              className="mt-1 hidden shrink-0 text-emerald-600 sm:block"
            />

            <p className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
              {point}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}