import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`
        w-full
        rounded-xl
        border
        border-gray-300
        bg-white
        px-4
        py-3
        outline-none
        transition
        focus:border-[#1e8449]
        focus:ring-2
        focus:ring-[#1e8449]/20
        ${className}
      `}
    />
  );
}