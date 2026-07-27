import { motion, AnimatePresence } from "framer-motion";
import { Award, BookOpen, Clock, Rocket } from "lucide-react";

export default function CongratulationsModal({
    open,
    module,
    onStart,
}) {
    return (
        <AnimatePresence>

            {open && (

                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl"
                    >

                        <div className="flex justify-center">

                            <div className="rounded-full bg-emerald-500/20 p-5">

                                <Award
                                    className="text-emerald-400"
                                    size={40}
                                />

                            </div>

                        </div>

                        <h2 className="mt-6 text-center text-3xl font-bold text-white">

                            🎉 Congratulations!

                        </h2>

                        <p className="mt-3 text-center text-slate-300">

                            Welcome to

                        </p>

                        <h3 className="mt-1 text-center text-xl font-bold text-emerald-400">

                            {module.title}

                        </h3>

                        <div className="mt-6 space-y-3">

                            <div className="flex items-center gap-3 text-slate-300">

                                <BookOpen size={18} />

                                {module.lessons.length} Lessons

                            </div>

                            <div className="flex items-center gap-3 text-slate-300">

                                <Clock size={18} />

                                {module.duration}

                            </div>

                            <div className="flex items-center gap-3 text-slate-300">

                                <Rocket size={18} />

                                {module.difficulty}

                            </div>

                        </div>

                        <button
                            onClick={onStart}
                            className="mt-8 w-full rounded-xl bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
                        >

                            Start First Lesson 🚀

                        </button>

                    </motion.div>

                </div>

            )}

        </AnimatePresence>
    );
}