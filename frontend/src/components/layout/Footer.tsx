import { Link } from "react-router-dom";

const quickLinks = [
  {
    label: "Learn",
    path: "/learn",
  },
  {
    label: "Home",
    path: "/",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-white/10 dark:bg-[#0b0f0d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-12 md:flex-row md:justify-between">
        {/* Brand */}
        <div className="max-w-sm">
          <h2 className="text-2xl font-black text-[#1e8449]">
            ExcelMaster
          </h2>

          <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
            Learn Microsoft Excel from beginner to advanced through
            structured lessons, practical examples, and real-world
            workflows—completely free.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Quick Links
          </h3>

          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-gray-600 transition hover:text-[#1e8449] dark:text-gray-400 dark:hover:text-emerald-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Course */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
            Course
          </h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>Beginner Excel</li>
            <li>Functions</li>
            <li>Charts</li>
            <li>Pivot Tables</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row dark:text-gray-400">
          <p>
            © {new Date().getFullYear()} ExcelMaster. All rights reserved.
          </p>

          <p>
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}