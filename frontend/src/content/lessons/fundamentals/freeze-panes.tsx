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
    question: "What is the main purpose of Freeze Panes in Excel?",
    options: [
      "To delete unwanted rows",
      "To keep certain rows or columns visible while scrolling through the rest of the sheet",
      "To lock a workbook with a password",
      "To print the worksheet",
    ],
    answer: 1,
    explanation:
      "Freeze Panes keeps chosen rows or columns fixed on screen, so you don't lose sight of them while scrolling through large data.",
  },
  {
    question: "Which Ribbon tab contains the Freeze Panes option?",
    options: ["Home", "Insert", "View", "Formulas"],
    answer: 2,
    explanation:
      "Freeze Panes is found under the View tab, in the Window group.",
  },
  {
    question: "If you want to keep only the top row visible while scrolling down a long list, which option should you choose?",
    options: ["Freeze First Column", "Freeze Top Row", "Freeze Panes (based on selected cell)", "Unfreeze Panes"],
    answer: 1,
    explanation:
      "'Freeze Top Row' is a built-in shortcut option that locks just the very first row, no matter where your cursor is.",
  },
  {
    question: "A teacher has student names in column A and wants that column to stay visible while scrolling right through many subject columns. Which option helps?",
    options: ["Freeze Top Row", "Freeze First Column", "Save As", "Ctrl + End"],
    answer: 1,
    explanation:
      "'Freeze First Column' locks column A in place, so names remain visible even while scrolling horizontally through other columns.",
  },
  {
    question: "You click on cell C2 and then choose 'Freeze Panes.' What gets frozen?",
    options: [
      "Only column C",
      "Only row 2",
      "Everything above row 2 and to the left of column C",
      "Nothing, this doesn't work",
    ],
    answer: 2,
    explanation:
      "When you select a specific cell and choose Freeze Panes, Excel locks everything above and to the left of that cell — so from C2, rows 1 and column A/B stay frozen.",
  },
  {
    question: "How do you remove Freeze Panes once it's applied?",
    options: [
      "Delete the worksheet",
      "Go to View → Freeze Panes → Unfreeze Panes",
      "Press Ctrl + Z only",
      "Close and reopen the workbook",
    ],
    answer: 1,
    explanation:
      "Selecting 'Unfreeze Panes' from the same View → Freeze Panes menu removes the freeze, letting the whole sheet scroll normally again.",
  },
];

export default function FreezePanes() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Understand what Freeze Panes does and why it's useful.</li>
          <li>Learn the difference between freezing the top row, first column, or a custom selection.</li>
          <li>Know exactly where to click a cell before freezing panes.</li>
          <li>Learn how to unfreeze panes when you no longer need it.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="The Problem Freeze Panes Solves">

        <p>
          Imagine scrolling down a sheet with 1,000 rows of student marks.
          By row 200, you've completely forgotten which column was "Math"
          and which was "Science" — because the header row scrolled away
          with everything else. <strong>Freeze Panes</strong> solves this
          exact problem.
        </p>

        <InfoBox>
          <p>
            Freeze Panes doesn't change your data at all — it only changes
            what stays visible while you scroll. It's purely a viewing
            convenience.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Freeze Panes in Action">

        <ImageCard
          src="/images/lessons/fundamentals/excel-freeze-panes.png"
          alt="Excel worksheet with the top row frozen while scrolling down"
          caption="With Freeze Panes on, the header row stays visible no matter how far down you scroll."
        />

      </LessonSection>

      {/* Where to find it */}

      <LessonSection title="Where to Find Freeze Panes">

        <p>
          Freeze Panes lives under the <strong>View</strong> tab on the
          Ribbon (which we covered in an earlier lesson), inside the Window
          group. Clicking it shows three options:
        </p>

        <LessonTable
          headers={["Option", "What It Freezes"]}
          rows={[
            ["Freeze Panes", "Freezes rows/columns based on the cell you currently have selected"],
            ["Freeze Top Row", "Locks only the very first row, regardless of your selection"],
            ["Freeze First Column", "Locks only the very first column, regardless of your selection"],
          ]}
        />

      </LessonSection>

      {/* Freeze top row */}

      <LessonSection title="1. Freeze Top Row — The Most Common Use">

        <p>
          This is the option beginners use most. It keeps row 1 (usually
          your headers, like "Name" and "Marks") visible at all times, even
          as you scroll down hundreds of rows.
        </p>

        <ExampleBox title="Real-Life Example">
          <p>
            A shopkeeper has a sheet with headers "Date," "Product," and
            "Amount" in row 1, followed by 500 rows of daily sales. With
            Freeze Top Row turned on, they can scroll all the way to row
            500 and still clearly see which column is which.
          </p>
        </ExampleBox>

      </LessonSection>

      {/* Freeze first column */}

      <LessonSection title="2. Freeze First Column">

        <p>
          Useful when your sheet has many columns going far to the right,
          and you need to keep track of names or IDs in column A while
          scrolling sideways.
        </p>

        <TipBox>
          <p>
            A school marks sheet with columns for Name, Math, Science,
            English, History, and Geography is a perfect case for Freeze
            First Column — student names stay visible while comparing all
            subjects.
          </p>
        </TipBox>

      </LessonSection>

      {/* Custom freeze */}

      <LessonSection title="3. Freeze Panes (Custom) — Freezing Both Rows and Columns">

        <p>
          Sometimes you want to lock <em>both</em> a header row and a first
          column at the same time. To do this, click on the cell{" "}
          <strong>just below and to the right</strong> of what you want
          frozen, then choose Freeze Panes.
        </p>

        <ExampleBox title="Example">
          <p>
            To freeze row 1 <em>and</em> column A together, click on cell{" "}
            <strong>B2</strong> first, then go to View → Freeze Panes →
            Freeze Panes. Everything above row 2 and left of column B will
            now stay fixed while you scroll.
          </p>
        </ExampleBox>

      </LessonSection>

      {/* Unfreezing */}

      <LessonSection title="Removing Freeze Panes">

        <p>
          Once you're done, you can easily undo it: go to{" "}
          <strong>View → Freeze Panes → Unfreeze Panes</strong>. The sheet
          returns to scrolling normally, with nothing locked in place.
        </p>
      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "Freeze Panes keeps chosen rows or columns visible while you scroll through large data.",
          "It's found under View → Freeze Panes on the Ribbon.",
          "'Freeze Top Row' locks just row 1 — great for keeping headers visible.",
          "'Freeze First Column' locks just column A — useful for names or IDs.",
          "For a custom freeze of both a row and column, click the cell just below and right of what you want frozen.",
          "'Unfreeze Panes' removes the freeze and restores normal scrolling.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}