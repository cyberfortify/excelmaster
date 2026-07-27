import { Lightbulb } from "lucide-react";

interface TipBoxProps {
  children: React.ReactNode;
}

export default function TipBox({ children }: TipBoxProps) {
  return (
    <div className="my-6 flex gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:my-8 sm:gap-4 sm:rounded-2xl sm:p-5 dark:border-amber-900/40 dark:bg-amber-900/10">
      <Lightbulb className="mt-0.5 shrink-0 text-amber-600 sm:mt-1" size={18} />

      <div className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}