import { Info } from "lucide-react";

interface InfoBoxProps {
  children: React.ReactNode;
}

export default function InfoBox({
  children,
}: InfoBoxProps) {
  return (
    <div className="my-8 flex gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900/40 dark:bg-blue-900/10">

      <Info className="mt-1 text-blue-600" size={22} />

      <div>{children}</div>

    </div>
  );
}