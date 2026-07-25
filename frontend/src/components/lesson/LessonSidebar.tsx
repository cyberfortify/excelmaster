import { NavLink } from "react-router-dom";
import { lessonCategories } from "../../data/lessons";

interface Props {
  currentSlug?: string;
}

export default function LessonSidebar({
  currentSlug,
}: Props) {

  const currentCategory = lessonCategories.find((category) => {

    const sections = category.sections ?? [
      {
        title: "",
        lessons: category.lessons ?? [],
      },
    ];

    return sections.some((section) =>
      section.lessons.some(
        (lesson) => lesson.slug === currentSlug
      )
    );

  });

  if (!currentCategory) return null;

  const sections = currentCategory.sections ?? [
    {
      title: "",
      lessons: currentCategory.lessons ?? [],
    },
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-80 overflow-y-auto border-r border-slate-200 lg:block dark:border-slate-800 bg-white dark:bg-[#0b0f0d]">

      <div className="p-6">

        <h2 className="mb-2 text-xl font-bold">
          Excel Course
        </h2>

        <p className="mb-8 text-sm text-slate-500">
          {currentCategory.title}
        </p>

        {sections.map((section, index) => (

          <div
            key={section.title || index}
            className="mb-6"
          >

            {section.title && (

              <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">

                {section.title}

              </h3>

            )}

            <div className="space-y-1">

              {section.lessons.map((lesson) => (

                <NavLink
                  key={lesson.slug}
                  to={`/lesson/${lesson.slug}`}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-emerald-600 text-white"
                        : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  {lesson.title}
                </NavLink>

              ))}

            </div>

          </div>

        ))}

      </div>

    </aside>
  );
}