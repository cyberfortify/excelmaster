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
    <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">

      <div className="mb-4 flex items-center gap-2">

        <BookOpen size={18} />

        <h3 className="font-semibold">
          {title}
        </h3>

      </div>

      {children}

    </div>
  );
}