interface LessonTableProps {
  headers: string[];
  rows: string[][];
}

export default function LessonTable({ headers, rows }: LessonTableProps) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200 sm:my-8 sm:rounded-2xl dark:border-white/10">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-sm sm:text-base">
          <thead className="bg-slate-100 dark:bg-white/5">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="whitespace-nowrap border border-slate-200 px-2.5 py-2 text-left font-semibold text-slate-900 sm:px-4 sm:py-3 dark:border-white/10 dark:text-white"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="hover:bg-slate-50 dark:hover:bg-white/5"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="border border-slate-200 px-2.5 py-2 text-slate-700 sm:px-4 sm:py-3 dark:border-white/10 dark:text-slate-300"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}