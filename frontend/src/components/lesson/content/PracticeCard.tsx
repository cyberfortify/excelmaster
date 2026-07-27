import { useState } from "react";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

export interface PracticeQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

interface PracticeCardProps {
  questions: PracticeQuestion[];
}

export default function PracticeCard({ questions }: PracticeCardProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[current];

  function checkAnswer() {
    if (selected === null) return;

    if (!checked && selected === question.answer) {
      setScore((prev) => prev + 1);
    }

    setChecked(true);
  }

  function nextQuestion() {
    setSelected(null);
    setChecked(false);
    setCurrent((prev) => prev + 1);
  }

  function restartQuiz() {
    setCurrent(0);
    setSelected(null);
    setChecked(false);
    setScore(0);
  }

  if (current >= questions.length) {
    return (
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:mt-12 sm:p-8 dark:border-white/10 dark:bg-[#111613]">
        <h2 className="mb-3 text-xl font-bold text-slate-900 sm:mb-4 sm:text-3xl dark:text-white">
          Quiz Completed
        </h2>

        <p className="text-sm text-slate-700 sm:text-lg dark:text-slate-300">
          Your Score
        </p>

        <p className="mt-2 text-3xl font-bold text-[#1e8449] sm:text-5xl dark:text-emerald-400">
          {score} / {questions.length}
        </p>

        <button
          onClick={restartQuiz}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1e8449] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#166638] sm:mt-8 sm:px-5 sm:py-3 sm:text-base"
        >
          <RotateCcw size={16} className="sm:hidden" />
          <RotateCcw size={18} className="hidden sm:block" />
          Retry Quiz
        </button>
      </section>
    );
  }

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:mt-12 sm:p-8 dark:border-white/10 dark:bg-[#111613]">
      <div className="mb-4 flex items-center justify-between gap-3 sm:mb-6">
        <h2 className="text-lg font-bold text-slate-900 sm:text-2xl dark:text-white">
          Practice Quiz
        </h2>

        <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-[#1e8449] sm:px-4 sm:text-sm dark:bg-emerald-900/20 dark:text-emerald-400">
          {current + 1} / {questions.length}
        </span>
      </div>

      <h3 className="mb-4 text-base font-semibold leading-snug text-slate-900 sm:mb-6 sm:text-xl dark:text-white">
        {question.question}
      </h3>

      <div className="space-y-2.5 sm:space-y-4">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`flex cursor-pointer items-center gap-2.5 rounded-xl border p-3 text-sm text-slate-900 transition sm:gap-3 sm:p-4 sm:text-base dark:text-white ${
              selected === index
                ? "border-[#1e8449] bg-emerald-50 dark:bg-emerald-900/20"
                : "border-slate-200 hover:border-emerald-300 dark:border-white/10"
            }`}
          >
            <input
              type="radio"
              checked={selected === index}
              onChange={() => setSelected(index)}
              className="shrink-0 accent-[#1e8449]"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

      {!checked ? (
        <button
          onClick={checkAnswer}
          disabled={selected === null}
          className="mt-6 w-full rounded-xl bg-[#1e8449] px-5 py-3 text-sm font-medium text-white disabled:opacity-50 sm:mt-8 sm:w-auto sm:text-base"
        >
          Check Answer
        </button>
      ) : (
        <div className="mt-6 sm:mt-8">
          {selected === question.answer ? (
            <div className="rounded-xl bg-emerald-50 p-4 sm:p-5 dark:bg-emerald-900/20">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1e8449] sm:text-base dark:text-emerald-400">
                <CheckCircle2 size={18} className="shrink-0 sm:hidden" />
                <CheckCircle2 size={20} className="hidden shrink-0 sm:block" />
                Correct!
              </div>
            </div>
          ) : (
            <div className="rounded-xl bg-red-50 p-4 sm:p-5 dark:bg-red-900/20">
              <div className="flex items-center gap-2 text-sm font-semibold text-red-700 sm:text-base dark:text-red-400">
                <XCircle size={18} className="shrink-0 sm:hidden" />
                <XCircle size={20} className="hidden shrink-0 sm:block" />
                Incorrect
              </div>
            </div>
          )}

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base dark:text-slate-300">
            {question.explanation}
          </p>

          <button
            onClick={nextQuestion}
            className="mt-5 w-full rounded-xl bg-[#1e8449] px-5 py-3 text-sm font-medium text-white hover:bg-[#166638] sm:mt-6 sm:w-auto sm:text-base"
          >
            {current === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </section>
  );
}