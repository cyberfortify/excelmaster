interface LessonTableProps {
  headers: string[];
  rows: string[][];
}

export default function LessonTable({
  headers,
  rows,
}: LessonTableProps) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700">

      <table className="w-full border-collapse">

        <thead className="bg-slate-100 dark:bg-slate-800">

          <tr>

            {headers.map((header) => (

              <th
                key={header}
                className="border border-slate-200 px-4 py-3 text-left font-semibold dark:border-slate-700"
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
              className="hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >

              {row.map((cell, j) => (

                <td
                  key={j}
                  className="border border-slate-200 px-4 py-3 dark:border-slate-700"
                >
                  {cell}
                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}