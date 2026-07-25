import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mt-10 flex items-center rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition focus-within:border-[#1e8449] focus-within:ring-2 focus-within:ring-[#1e8449]/20">

      <Search
        size={20}
        className="text-gray-400"
      />

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search lessons..."
        className="ml-3 w-full bg-transparent outline-none"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="rounded-lg p-1 hover:bg-gray-100"
        >
          <X size={18} />
        </button>
      )}

    </div>
  );
}