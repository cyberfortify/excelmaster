interface LessonSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function LessonSection({
  title,
  children,
}: LessonSectionProps) {
  return (
    <section className="mb-14">

      <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      <div className="space-y-5 leading-8 text-slate-700 dark:text-slate-300">
        {children}
      </div>

    </section>
  );
}