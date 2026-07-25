import { Outlet, useParams } from "react-router-dom";
import LessonSidebar from "./LessonSidebar";

export default function LessonLayout() {

  const { slug } = useParams();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-50 dark:bg-slate-950">

      <LessonSidebar currentSlug={slug} />

      <main className="flex-1 min-w-0 px-5 py-8 lg:px-8 lg:py-10">
        <Outlet />
      </main>

    </div>
  );
}