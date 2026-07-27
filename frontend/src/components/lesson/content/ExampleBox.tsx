import { BookOpen } from "lucide-react";

interface ExampleBoxProps {
  title?: string;
  children: React.ReactNode;
}

export default function ExampleBox({
  title = "Example",
  children,
}: ExampleBoxProps) {
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:my-8 sm:rounded-2xl sm:p-6 dark:border-white/10 dark:bg-white/5">
      <div className="mb-3 flex items-center gap-2 sm:mb-4">
        <BookOpen size={16} className="shrink-0 sm:hidden" />
        <BookOpen size={18} className="hidden shrink-0 sm:block" />

        <h3 className="text-sm font-semibold text-slate-900 sm:text-base dark:text-white">
          {title}
        </h3>
      </div>

      <div className="text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
        {children}
      </div>
    </div>
  );
}