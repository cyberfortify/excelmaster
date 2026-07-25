import type { ReactNode } from "react";

type Variant =
  | "green"
  | "blue"
  | "yellow"
  | "red"
  | "gray";

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
}

const variants = {
  green:
    "bg-green-100 text-green-700",

  blue:
    "bg-blue-100 text-blue-700",

  yellow:
    "bg-yellow-100 text-yellow-700",

  red:
    "bg-red-100 text-red-700",

  gray:
    "bg-gray-100 text-gray-700",
};

export default function Badge({
  children,
  variant = "gray",
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
}