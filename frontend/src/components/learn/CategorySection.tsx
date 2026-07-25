import LessonCard from "./LessonCard";
import type { Lesson } from "../../data/lessonTypes";

interface CategorySectionProps {
  title: string;
  lessons: Lesson[];
}

export default function CategorySection({
  title,
  lessons,
}: CategorySectionProps) {
  return (
    <section>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {title}
          </h2>

          <p className="mt-1 text-gray-500">
            {lessons.length} lesson{lessons.length > 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.slug}
            lesson={lesson}
          />
        ))}
      </div>
    </section>
  );
}