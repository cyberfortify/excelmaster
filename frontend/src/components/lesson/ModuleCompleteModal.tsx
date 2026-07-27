import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface Props {
  open: boolean;
  completedModule: string;
  nextModule: string;
  lessonsCompleted: number;
  onContinue: () => void;
}

export default function ModuleCompleteModal({
  open,
  completedModule,
  nextModule,
  lessonsCompleted,
  onContinue,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <div className="max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-2xl border border-white/10 bg-[#111613] shadow-2xl shadow-black/40 sm:max-h-none sm:max-w-md sm:overflow-visible sm:rounded-3xl">
              {/* Top */}
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500 via-emerald-600 to-green-700 px-5 py-7 text-center sm:px-8 sm:py-10">
                <div className="absolute right-3 top-3 opacity-20 sm:right-5 sm:top-5">
                  <Sparkles size={60} className="sm:hidden" />
                  <Sparkles size={90} className="hidden sm:block" />
                </div>
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 14 }}
                  className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur sm:h-20 sm:w-20"
                >
                  <Trophy size={28} className="text-yellow-300 sm:hidden" />
                  <Trophy size={42} className="hidden text-yellow-300 sm:block" />
                </motion.div>

                <h2 className="relative mt-4 text-xl font-black text-white sm:mt-5 sm:text-3xl">
                  Module Complete!
                </h2>

                <p className="relative mt-1.5 text-sm text-emerald-100 sm:mt-2 sm:text-base">
                  Great job! 🎉
                </p>
              </div>

              {/* Body */}
              <div className="space-y-4 p-5 sm:space-y-6 sm:p-8">
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-center sm:rounded-2xl sm:p-5">
                  <BookOpen
                    className="mx-auto mb-2 text-emerald-400 sm:mb-3"
                    size={26}
                  />

                  <p className="text-base font-bold text-white sm:text-lg">
                    {completedModule}
                  </p>

                  <p className="mt-1.5 text-xs text-slate-400 sm:mt-2 sm:text-sm">
                    {lessonsCompleted} Lessons Completed
                  </p>
                </div>

                {/* Progress */}
                <div>
                  <div className="mb-1.5 flex justify-between text-xs text-slate-400 sm:mb-2 sm:text-sm">
                    <span>Course Progress</span>
                    <span>Next Module</span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800 sm:h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-green-400"
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/5 p-3.5 sm:rounded-xl sm:p-4">
                  <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:text-xs">
                    Up Next
                  </p>

                  <p className="mt-1 truncate text-sm font-semibold text-white sm:text-base">
                    {nextModule}
                  </p>
                </div>

                <button
                  onClick={onContinue}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-700 sm:py-3.5 sm:text-base"
                >
                  Continue
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1 sm:hidden"
                  />
                  <ArrowRight
                    size={18}
                    className="hidden transition-transform group-hover:translate-x-1 sm:block"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}