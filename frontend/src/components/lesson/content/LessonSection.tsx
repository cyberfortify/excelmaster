// content title

interface LessonSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function LessonSection({ title, children }: LessonSectionProps) {
  return (
    <section className="mb-10 sm:mb-14">
      <h2 className="mb-3 text-xl font-bold leading-snug text-slate-900 sm:mb-5 sm:text-3xl dark:text-white">
        {title}
      </h2>

      <div className="space-y-4 text-sm leading-7 text-slate-700 sm:space-y-5 sm:text-base sm:leading-8 dark:text-slate-300">
        {children}
      </div>
    </section>
  );
}