import ModuleCard from "./ModuleCard";
import { modules } from "../../data/modules";

export default function LearningModules() {
  return (
    <section>
      <div className="mb-12">
        <span className="text-sm font-semibold uppercase tracking-wider text-[#1e8449]">
          Course Structure
        </span>

        <h2 className="mt-3 text-4xl font-black text-gray-900 dark:text-white">
          Learning Modules
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
          The Excel course is divided into focused modules. Complete them in
          order to build a strong foundation before moving on to advanced
          concepts.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            module={module}
          />
        ))}
      </div>
    </section>
  );
}