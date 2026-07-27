import { Info } from "lucide-react";

interface InfoBoxProps {
  children: React.ReactNode;
}

export default function InfoBox({ children }: InfoBoxProps) {
  return (
    <div className="my-6 flex gap-2.5 rounded-xl border border-blue-200 bg-blue-50 p-4 sm:my-8 sm:gap-4 sm:rounded-2xl sm:p-5 dark:border-blue-900/40 dark:bg-blue-900/10">
      <Info className="mt-0.5 shrink-0 text-blue-600 sm:mt-1" size={18} />

      <div className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}