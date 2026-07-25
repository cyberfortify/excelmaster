import { Lightbulb } from "lucide-react";

interface TipBoxProps {
  children: React.ReactNode;
}

export default function TipBox({
  children,
}: TipBoxProps) {
  return (
    <div className="my-8 flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/40 dark:bg-amber-900/10">

      <Lightbulb className="mt-1 text-amber-600" size={22} />

      <div>{children}</div>

    </div>
  );
}