import LessonSection from "../../../components/lesson/content/LessonSection";
import InfoBox from "../../../components/lesson/content/InfoBox";
import TipBox from "../../../components/lesson/content/TipBox";
import ExampleBox from "../../../components/lesson/content/ExampleBox";
import LessonTable from "../../../components/lesson/content/LessonTable";
import SummaryBox from "../../../components/lesson/content/SummaryBox";
import ImageCard from "../../../components/lesson/content/ImageCard";
import PracticeCard from "../../../components/lesson/content/PracticeCard";


const questions = [
  {
    question: "What is a Workbook in Excel?",
    options: [
      "A single page of rows and columns",
      "The complete Excel file that can hold many worksheets",
      "A type of chart",
      "A formula used for calculations",
    ],
    answer: 1,
    explanation:
      "A Workbook is the entire Excel file (like Sales_2026.xlsx) — it can contain one or many worksheets inside it.",
  },
  {
    question: "What is a Worksheet?",
    options: [
      "The entire saved Excel file",
      "A single sheet/page inside a workbook, made of rows and columns",
      "A print settings menu",
      "A type of formula",
    ],
    answer: 1,
    explanation:
      "A Worksheet is one individual page inside a workbook — the grid where you actually enter and organize your data.",
  },
  {
    question: "By default, how many worksheets does a new Excel workbook usually open with?",
    options: ["Zero", "One (Sheet1)", "Ten", "Unlimited automatically visible"],
    answer: 1,
    explanation:
      "A new workbook typically opens with a single worksheet named 'Sheet1,' though you can add more anytime.",
  },
  {
    question: "Where would you click to add a new worksheet to your workbook?",
    options: [
      "The Formula Bar",
      "The '+' button next to the sheet tabs at the bottom",
      "The Name Box",
      "The Status Bar",
    ],
    answer: 1,
    explanation:
      "The small '+' icon next to your existing sheet tabs, at the bottom-left of the screen, adds a new worksheet.",
  },
  {
    question: "A school uses one Excel file to store separate sheets for each subject's marks. What does this file represent?",
    options: ["Multiple workbooks", "One workbook with multiple worksheets", "One worksheet only", "A single cell"],
    answer: 1,
    explanation:
      "This is a classic example of one workbook (the file) containing multiple worksheets (one per subject) inside it.",
  },
  {
    question: "Which of these is TRUE about workbooks and worksheets?",
    options: [
      "A worksheet can exist without a workbook",
      "A workbook can exist without any worksheet inside it",
      "A workbook can contain many worksheets, but a worksheet always belongs to one workbook",
      "They are exactly the same thing",
    ],
    answer: 2,
    explanation:
      "A worksheet is always part of some workbook — it cannot exist independently, while a workbook can hold multiple worksheets.",
  },
];

export default function WorkbookVsWorksheet() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Clearly understand the difference between a Workbook and a Worksheet.</li>
          <li>See real-life examples of how each is used.</li>
          <li>Learn how to add, rename, and switch between worksheets.</li>
          <li>Avoid the most common beginner confusion around these two terms.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="Why This Confuses Beginners">

        <p>
          "Workbook" and "Worksheet" sound almost the same — and that's
          exactly why so many beginners mix them up. But once you see them
          as a <strong>notebook and its pages</strong>, the confusion
          disappears completely.
        </p>

        <InfoBox>
          <p>
            Quick rule to remember: <strong>Workbook = the whole file.
            Worksheet = one page inside that file.</strong>
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Workbook and Worksheet, Visually">

        <ImageCard
          src="/images/lessons/fundamentals/excel-workbook-worksheet.png"
          alt="Diagram showing an Excel workbook containing multiple worksheet tabs"
          caption="One Workbook file can contain many Worksheets, shown as tabs at the bottom."
        />

      </LessonSection>

      {/* Detailed Comparison */}

      <LessonSection title="Workbook vs Worksheet: Side by Side">

        <ExampleBox title="Think of a Notebook">
          <p>
            A <strong>Workbook</strong> is like an entire notebook you carry
            to school. A <strong>Worksheet</strong> is like one page inside
            that notebook — say, the page where you write your Math
            homework, separate from the page for Science.
          </p>
        </ExampleBox>

        <LessonTable
          headers={["Workbook", "Worksheet"]}
          rows={[
            ["The entire Excel file (e.g., Sales_2026.xlsx)", "One single page inside the file (e.g., 'January')"],
            ["Can contain many worksheets", "Made up of rows, columns, and cells"],
            ["Saved once, as a whole, in .xlsx format", "Cannot be saved separately — it's part of the workbook"],
            ["Opened using File → Open", "Selected by clicking its tab at the bottom"],
          ]}
        />

      </LessonSection>

      {/* Real world examples */}

      <LessonSection title="Real-Life Examples">

        <p>
          Here's how this concept shows up in everyday situations:
        </p>

        <LessonTable
          headers={["Person", "Workbook (the file)", "Worksheets (the pages) inside it"]}
          rows={[
            [
              "A shopkeeper",
              "Sales_2026.xlsx",
              "January, February, March (one sheet per month)",
            ],
            [
              "A school",
              "StudentMarks.xlsx",
              "Math, Science, English (one sheet per subject)",
            ],
            [
              "An HR manager",
              "EmployeeData.xlsx",
              "Attendance, Salary, Leaves (one sheet per record type)",
            ],
          ]}
        />

      </LessonSection>

      {/* Working with worksheets */}

      <LessonSection title="Adding, Renaming, and Switching Worksheets">

        <p>
          Since a workbook usually needs more than one worksheet, Excel
          makes it simple to manage them from the sheet tabs at the bottom
          of the screen:
        </p>

        <LessonTable
          headers={["Action", "How to Do It"]}
          rows={[
            ["Add a new worksheet", "Click the '+' icon next to the existing sheet tabs"],
            ["Rename a worksheet", "Double-click the sheet tab and type a new name"],
            ["Switch between worksheets", "Click the tab of the worksheet you want to view"],
            ["Delete a worksheet", "Right-click the tab and choose 'Delete'"],
          ]}
        />

        <TipBox>
          <p>
            Give your worksheets clear names like "January" or "Math" instead
            of leaving them as "Sheet1," "Sheet2" — it makes navigating a
            workbook with many sheets much easier.
          </p>
        </TipBox>

      </LessonSection>

      {/* Common mistake */}

      <LessonSection title="Common Beginner Mistake">

        <p>
          A common mix-up: saying "I have 5 workbooks open" when you actually
          mean "I have 5 worksheets inside one workbook." Remember — unless
          you've opened 5 separate <em>.xlsx files</em>, you only have{" "}
          <strong>one workbook</strong>, just with multiple sheets inside it.
        </p>
      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "A Workbook is the complete Excel file, saved with a .xlsx extension.",
          "A Worksheet is one single page inside that workbook, made of rows and columns.",
          "A workbook can contain many worksheets, but each worksheet belongs to only one workbook.",
          "Sheet tabs at the bottom let you add, rename, switch, and delete worksheets.",
          "Naming worksheets clearly (e.g., 'January' instead of 'Sheet1') makes files easier to navigate.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}