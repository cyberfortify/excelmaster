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

export default function PracticeCard({
  questions,
}: PracticeCardProps) {
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
      <section className="mt-12 rounded-2xl border bg-white p-8 dark:bg-slate-900">

        <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-slate-100">
          Quiz Completed
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300">
          Your Score
        </p>

        <p className="mt-2 text-5xl font-bold text-blue-600">
          {score} / {questions.length}
        </p>

        <button
          onClick={restartQuiz}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          <RotateCcw size={18} />
          Retry Quiz
        </button>

      </section>
    );
  }

  return (
    <section className="mt-12 rounded-2xl border bg-white p-8 shadow-sm dark:bg-slate-900">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
          Practice Quiz
        </h2>

        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-slate-800 dark:bg-blue-900/30 dark:text-blue-100">
          Question {current + 1} / {questions.length}
        </span>

      </div>

      <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-slate-100">
        {question.question}
      </h3>

      <div className="space-y-4">

        {question.options.map((option, index) => (

          <label
            key={index}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition text-slate-900 dark:text-slate-100 border-slate-200 dark:border-slate-700

            ${
              selected === index
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20 "
                : "hover:border-blue-300"
            }`}
          >

            <input
              type="radio"
              checked={selected === index}
              onChange={() => setSelected(index)}
              
            />

            {option}

          </label>

        ))}

      </div>

      {!checked ? (

        <button
          onClick={checkAnswer}
          disabled={selected === null}
          className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white disabled:opacity-50"
        >
          Check Answer
        </button>

      ) : (

        <div className="mt-8">

          {selected === question.answer ? (

            <div className="rounded-xl bg-green-50 p-5">

              <div className="flex items-center gap-2 font-semibold text-green-700">

                <CheckCircle2 size={20} />

                Correct!

              </div>

            </div>

          ) : (

            <div className="rounded-xl bg-red-50 p-5">

              <div className="flex items-center gap-2 font-semibold text-red-700">

                <XCircle size={20} />

                Incorrect

              </div>

            </div>

          )}

          <p className="mt-5 text-slate-600 dark:text-slate-300">
            {question.explanation}
          </p>

          <button
            onClick={nextQuestion}
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            {current === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>

        </div>

      )}

    </section>
  );
}