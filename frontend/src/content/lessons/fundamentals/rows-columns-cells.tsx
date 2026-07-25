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
    question: "How are Columns labeled in Excel?",
    options: ["Numbers (1, 2, 3...)", "Letters (A, B, C...)", "Roman numerals", "Symbols"],
    answer: 1,
    explanation:
      "Columns run vertically (up-down) and are labeled with letters — A, B, C, and so on.",
  },
  {
    question: "How are Rows labeled in Excel?",
    options: ["Letters (A, B, C...)", "Numbers (1, 2, 3...)", "Days of the week", "Colors"],
    answer: 1,
    explanation:
      "Rows run horizontally (left-right) and are labeled with numbers — 1, 2, 3, and so on.",
  },
  {
    question: "What do you call the box formed where a row and column meet?",
    options: ["A tab", "A cell", "A ribbon", "A sheet"],
    answer: 1,
    explanation:
      "A cell is the small box created at the intersection of a row and a column — it's where you actually enter data.",
  },
  {
    question: "What is the cell reference for the box in column C, row 5?",
    options: ["5C", "C5", "C-5", "5-C"],
    answer: 1,
    explanation:
      "Cell references always write the column letter first, followed by the row number — so it's C5, not 5C.",
  },
  {
    question: "In the student marks example, if 'Rahul' is in row 3 and 'Marks' is in column B, where would his marks be entered?",
    options: ["A3", "B3", "3B", "C3"],
    answer: 1,
    explanation:
      "Since 'Marks' is column B and Rahul's row is 3, his marks would go in cell B3 (column letter, then row number).",
  },
  {
    question: "What does it mean when a range is written as A1:A5?",
    options: [
      "Only cell A1 and A5",
      "All cells from A1 down to A5",
      "All cells in row 1 to row 5 across every column",
      "A formula name",
    ],
    answer: 1,
    explanation:
      "A colon (:) between two cell references means 'through' — so A1:A5 means all cells from A1 down to A5.",
  },
];



export default function RowsColumnsCells() {
  
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Understand what Rows, Columns, and Cells are.</li>
          <li>Learn how Excel labels rows and columns.</li>
          <li>Understand cell references like B4 or C5.</li>
          <li>Learn what a "range" of cells means, like A1:A5.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="The Building Blocks of Excel">

        <p>
          Every single thing you do in Excel — entering data, writing
          formulas, creating charts — happens inside a grid made of{" "}
          <strong>Rows</strong>, <strong>Columns</strong>, and{" "}
          <strong>Cells</strong>. Understanding these three is like learning
          the alphabet before you write words.
        </p>

        <InfoBox>
          <p>
            Think of a worksheet like a large graph paper — full of tiny
            boxes waiting for you to fill them with data.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Rows, Columns & Cells, Visually">

        <ImageCard
          src="/images/lessons/fundamentals/excel-rows-columns-cells.png"
          alt="Excel grid showing rows labeled with numbers and columns labeled with letters"
          caption="Columns run vertically (A, B, C...) and Rows run horizontally (1, 2, 3...)."
        />

      </LessonSection>

      {/* Definitions */}

      <LessonSection title="What Are Rows, Columns & Cells?">

        <ExampleBox title="Easy Way to Remember">
          <p>
            Imagine a school classroom. The <strong>columns</strong> are
            like vertical lines of benches going up-down, and the{" "}
            <strong>rows</strong> are like horizontal lines of benches going
            left-right. Where one bench-line crosses another, a student
            sits — that seat is your <strong>cell</strong>.
          </p>
        </ExampleBox>

        <LessonTable
          headers={["Term", "Direction", "How It's Labeled"]}
          rows={[
            ["Column", "Runs vertically (top to bottom)", "Letters — A, B, C, ... Z, AA, AB..."],
            ["Row", "Runs horizontally (left to right)", "Numbers — 1, 2, 3, 4..."],
            ["Cell", "The box where a row and column meet", "Combination — like B4, C5, A1"],
          ]}
        />

      </LessonSection>

      {/* Cell references */}

      <LessonSection title="Understanding Cell References">

        <p>
          Every cell has a unique address, called a{" "}
          <strong>cell reference</strong>. It's always written as{" "}
          <em>column letter + row number</em> — never the other way around.
        </p>

        <TipBox>
          <p>
            Easy memory trick: "Along the corridor, then up the stairs."
            First move across to the right column, then go down to the row.
            So it's always <strong>B4</strong>, never <strong>4B</strong>.
          </p>
        </TipBox>

      </LessonSection>

      {/* Real world example */}

      <LessonSection title="Real-Life Example: A Student Marks Sheet">

        <p>
          Suppose a teacher is entering marks for students. Column A has
          names, and Column B has marks:
        </p>

        <LessonTable
          headers={["", "A (Name)", "B (Marks)"]}
          rows={[
            ["Row 1", "Name", "Marks"],
            ["Row 2", "Priya", "88"],
            ["Row 3", "Rahul", "76"],
            ["Row 4", "Ayesha", "92"],
          ]}
        />

        <p>
          Here, "Rahul" sits in cell <strong>A3</strong>, and his marks
          (76) sit in cell <strong>B3</strong> — same row, different
          columns.
        </p>

      </LessonSection>

      {/* Ranges */}

      <LessonSection title="What is a Range?">

        <p>
          Often, you'll want to work with a group of cells together, not
          just one. This group is called a <strong>range</strong>, written
          using a colon (:) between the first and last cell.
        </p>

        <ExampleBox title="Range Example">
          <p>
            If you want to select all the marks from row 2 to row 4 in
            column B, you'd write it as <strong>B2:B4</strong> — meaning
            "from B2 through B4." This is exactly what you'd use inside a
            formula like <code>=SUM(B2:B4)</code>.
          </p>
        </ExampleBox>

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "Columns run vertically and are labeled with letters (A, B, C...).",
          "Rows run horizontally and are labeled with numbers (1, 2, 3...).",
          "A Cell is the box formed where a row and column meet, like B4.",
          "Cell references are always written as column letter first, then row number.",
          "A Range (like B2:B4) refers to a group of cells together.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}