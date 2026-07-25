import { CheckCircle2 } from "lucide-react";

interface SummaryBoxProps {
  points: string[];
}

export default function SummaryBox({
  points,
}: SummaryBoxProps) {
  return (
    <section className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/40 dark:bg-emerald-900/10">

      <h2 className="mb-5 text-2xl font-bold text-emerald-800 dark:text-emerald-300">
        Summary
      </h2>

      <div className="space-y-3">

        {points.map((point) => (

          <div
            key={point}
            className="flex items-start gap-3"
          >
            <CheckCircle2
              size={18}
              className="mt-1 text-emerald-600"
            />

            <p className="text-slate-700 dark:text-slate-300">
              {point}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}