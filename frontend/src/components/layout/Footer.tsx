import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Learn", path: "/learn" },
  { label: "Home", path: "/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-[#0b0f0d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:gap-10 sm:px-6 sm:py-12 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="max-w-sm">
          <h2 className="text-xl font-black text-[#1e8449] sm:text-2xl">
            ExcelMaster
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7 dark:text-gray-400">
            Learn Microsoft Excel from beginner to advanced through
            structured lessons, practical examples, and real-world
            workflows - completely free.
          </p>
        </div>

        {/* Quick Links + Course side by side even on mobile */}
        <div className="grid grid-cols-2 gap-8 md:flex md:gap-16">
          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 sm:mb-4 sm:text-base dark:text-white">
              Quick Links
            </h3>

            <ul className="space-y-2.5 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-600 transition hover:text-[#1e8449] sm:text-base dark:text-gray-400 dark:hover:text-emerald-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Course */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-900 sm:mb-4 sm:text-base dark:text-white">
              Course
            </h3>

            <ul className="space-y-2.5 text-sm text-gray-600 sm:space-y-3 sm:text-base dark:text-gray-400">
              <li>Beginner Excel</li>
              <li>Functions</li>
              <li>Charts</li>
              <li>Pivot Tables</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-center text-xs text-gray-500 sm:gap-4 sm:px-6 sm:py-6 sm:text-sm md:flex-row dark:text-gray-400">
          <p>© {new Date().getFullYear()} ExcelMaster. All rights reserved.</p>
          <p>Built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}