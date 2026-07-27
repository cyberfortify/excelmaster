import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#1e8449] focus-within:ring-2 focus-within:ring-[#1e8449]/20 sm:rounded-2xl sm:px-5 sm:py-4 dark:border-white/10 dark:bg-white/5">
      <Search size={18} className="shrink-0 text-gray-400 sm:hidden" />
      <Search size={20} className="hidden shrink-0 text-gray-400 sm:block" />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search lessons..."
        className="ml-2.5 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 sm:ml-3 sm:text-base dark:text-white"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="shrink-0 rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-white/10"
        >
          <X size={16} className="sm:hidden" />
          <X size={18} className="hidden sm:block" />
        </button>
      )}
    </div>
  );
}