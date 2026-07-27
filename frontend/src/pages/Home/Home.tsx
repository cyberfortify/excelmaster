import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cellData = [
  ["Region", "Q1 Sales", "Q2 Sales", "Growth"],
  ["North", "84,200", "91,500", "+8.6%"],
  ["South", "62,100", "70,300", "+13.2%"],
  ["East", "51,900", "49,800", "-4.0%"],
  ["West", "77,400", "88,900", "+14.9%"],
];

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0b0f0d]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        {/* Background mesh */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/20 sm:h-96 sm:w-96 lg:h-[28rem] lg:w-[28rem]" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl dark:bg-teal-900/10 sm:h-96 sm:w-96" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="relative mx-auto flex min-h-[auto] max-w-7xl flex-col items-center gap-10 px-5 py-14 sm:gap-16 sm:px-6 sm:py-20 lg:min-h-[88vh] lg:flex-row">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h1 className="text-3xl font-black leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-7xl lg:leading-[1.05] dark:text-white">
              Master Excel
              <span className="block bg-gradient-to-r from-[#1e8449] to-emerald-400 bg-clip-text text-transparent">
                Like a Professional
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8 dark:text-gray-400">
              Structured lessons, real business datasets, interview
              questions and hands-on practice — the way top companies
              actually use Excel. 100% free.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                to="/learn"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#1e8449] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-[#166638] sm:px-7 sm:py-4 sm:text-base"
              >
                Start Learning Free
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 sm:hidden"
                />
                <ArrowRight
                  size={20}
                  className="hidden transition-transform group-hover:translate-x-1 sm:block"
                />
              </Link>

              <Link
                to="/learn"
                className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-center text-sm font-semibold text-gray-800 transition hover:border-[#1e8449] hover:text-[#1e8449] sm:px-7 sm:py-4 sm:text-base dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                Browse Topics
              </Link>
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500 sm:mt-8 sm:gap-x-6 sm:text-sm dark:text-gray-400">
              {["No signup required", "300+ lessons", "Real datasets"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <Check size={14} className="shrink-0 text-[#1e8449] sm:hidden" />
                    <Check size={16} className="hidden shrink-0 text-[#1e8449] sm:block" />
                    {item}
                  </span>
                )
              )}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-gray-100 pt-6 sm:mt-16 sm:gap-8 sm:pt-8 dark:border-white/10">
              {[
                ["300+", "Excel Topics"],
                ["100+", "Industry Examples"],
                ["50+", "Real Projects"],
              ].map(([num, label]) => (
                <div key={label}>
                  <h2 className="text-xl font-bold text-[#1e8449] sm:text-3xl lg:text-4xl">
                    {num}
                  </h2>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — spreadsheet mockup, hidden on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden flex-1 items-center justify-center lg:flex"
          >
            <div className="w-full max-w-xl rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-gray-300/40 dark:border-white/10 dark:bg-[#111613] dark:shadow-black/40">
              {/* Title bar */}
              <div className="flex items-center justify-between rounded-t-2xl border-b border-gray-200 bg-gray-50 px-5 py-3 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="text-xs font-medium text-gray-400">
                  Sales_Report.xlsx
                </span>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-[#1e8449] dark:bg-emerald-900/30 dark:text-emerald-400">
                  Live
                </span>
              </div>

              {/* Grid */}
              <div className="overflow-hidden rounded-b-2xl">
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {cellData.map((row, ri) => (
                      <motion.tr
                        key={ri}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + ri * 0.08 }}
                        className={ri === 0 ? "bg-gray-50 dark:bg-white/5" : ""}
                      >
                        {row.map((cell, ci) => (
                          <td
                            key={ci}
                            className={`border border-gray-100 px-4 py-3 dark:border-white/5 ${
                              ri === 0
                                ? "font-semibold text-gray-500 dark:text-gray-400"
                                : ci === 3
                                ? cell.startsWith("-")
                                  ? "font-medium text-red-500"
                                  : "font-medium text-[#1e8449]"
                                : "text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
                <div className="flex items-center gap-2 border-t border-gray-100 bg-gray-50/60 px-4 py-2 text-xs text-gray-400 dark:border-white/5 dark:bg-white/5">
                  <span className="rounded bg-white px-2 py-0.5 font-mono shadow-sm dark:bg-white/10">
                    fx
                  </span>
                  <span>=SUMIF(A2:A5,"North",B2:B5)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}