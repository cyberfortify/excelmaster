import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variants = {
  primary:
    "bg-[#1e8449] text-white hover:bg-[#166638] shadow-lg shadow-emerald-900/20",

  secondary:
    "bg-gray-900 text-white hover:bg-black",

  outline:
    "border border-gray-300 bg-white text-gray-700 hover:border-[#1e8449] hover:text-[#1e8449]",

  ghost:
    "bg-transparent text-gray-700 hover:bg-gray-100",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  to,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2
    rounded-xl
    px-5
    py-3
    font-semibold
    transition-all
    duration-300
    ${variants[variant]}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}