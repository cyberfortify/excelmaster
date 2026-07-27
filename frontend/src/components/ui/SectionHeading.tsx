import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  description?: ReactNode;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-6 max-w-3xl sm:mb-10">
      <h2 className="text-2xl font-black text-gray-900 sm:text-4xl dark:text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-2.5 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-lg sm:leading-8 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}