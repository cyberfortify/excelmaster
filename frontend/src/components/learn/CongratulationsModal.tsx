import { motion, AnimatePresence } from "framer-motion";
import { Award, BookOpen, Clock, Rocket, Sparkles } from "lucide-react";

export default function CongratulationsModal({ open, module, onStart }) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm sm:p-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[#111613] p-6 shadow-2xl shadow-black/40 sm:max-w-md sm:rounded-3xl sm:p-8"
          >
            {/* Glow accent */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="relative rounded-full bg-emerald-500/15 p-4 sm:p-5">
                  <Award className="text-emerald-400" size={32} />
                  <Sparkles
                    size={16}
                    className="absolute -right-0.5 -top-0.5 text-emerald-300"
                  />
                </div>
              </div>

              {/* Heading */}
              <h2 className="mt-5 text-center text-xl font-bold text-white sm:mt-6 sm:text-3xl">
                Congratulations! 🎉
              </h2>

              <p className="mt-2 text-center text-sm text-slate-400 sm:mt-3 sm:text-base">
                Welcome to
              </p>

              <h3 className="mt-1 text-center text-lg font-bold text-emerald-400 sm:text-xl">
                {module.title}
              </h3>

              {/* Meta */}
              <div className="mt-5 flex flex-col gap-2 rounded-xl bg-white/5 p-3 sm:mt-6 sm:gap-3 sm:p-4">
                <div className="flex items-center gap-2.5 text-sm text-slate-300 sm:gap-3 sm:text-base">
                  <BookOpen size={16} className="shrink-0 text-emerald-400 sm:hidden" />
                  <BookOpen size={18} className="hidden shrink-0 text-emerald-400 sm:block" />
                  <span>{module.lessons.length} Lessons</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-slate-300 sm:gap-3 sm:text-base">
                  <Clock size={16} className="shrink-0 text-emerald-400 sm:hidden" />
                  <Clock size={18} className="hidden shrink-0 text-emerald-400 sm:block" />
                  <span>{module.duration}</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-slate-300 sm:gap-3 sm:text-base">
                  <Rocket size={16} className="shrink-0 text-emerald-400 sm:hidden" />
                  <Rocket size={18} className="hidden shrink-0 text-emerald-400 sm:block" />
                  <span>{module.difficulty}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={onStart}
                className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-700 sm:mt-8 sm:text-base"
              >
                Start First Lesson
                <Rocket
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}