import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  description?: ReactNode;
}

export default function SectionHeading({
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 className="text-4xl font-black text-gray-900">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}