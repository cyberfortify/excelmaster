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
    question: "Which shortcut instantly takes you to cell A1 from anywhere in the worksheet?",
    options: ["Ctrl + Home", "Ctrl + End", "Ctrl + A1", "Home"],
    answer: 0,
    explanation:
      "Ctrl + Home always jumps straight back to cell A1, no matter where you currently are in the worksheet.",
  },
  {
    question: "Which shortcut takes you to the last used cell in the worksheet (the bottom-right corner of your data)?",
    options: ["Ctrl + Home", "Ctrl + End", "Ctrl + Z", "End"],
    answer: 1,
    explanation:
      "Ctrl + End jumps to the last cell that contains data, marking the bottom-right boundary of your used area.",
  },
  {
    question: "You're at the top of a long column of data. Which shortcut jumps straight to the bottom of that continuous data block?",
    options: ["Ctrl + Down Arrow", "Ctrl + S", "Tab", "Ctrl + Home"],
    answer: 0,
    explanation:
      "Ctrl + Arrow keys jump to the edge of a continuous block of data — Ctrl + Down Arrow takes you to the last filled cell in that column.",
  },
  {
    question: "Which shortcut lets you quickly jump to a specific cell, like Z100, by typing its address directly?",
    options: ["Using the Name Box", "Pressing Ctrl + P", "Using the Status Bar", "Double-clicking the Ribbon"],
    answer: 0,
    explanation:
      "Typing a cell address (like Z100) directly into the Name Box and pressing Enter instantly jumps you to that cell.",
  },
  {
    question: "Which keyboard shortcut switches you to the next worksheet tab (e.g., from 'January' to 'February')?",
    options: ["Ctrl + Page Down", "Ctrl + Home", "Ctrl + S", "Tab"],
    answer: 0,
    explanation:
      "Ctrl + Page Down moves to the next worksheet tab, while Ctrl + Page Up moves to the previous one.",
  },
  {
    question: "A shopkeeper has 5,000 rows of sales data and wants to instantly jump to the very last row without scrolling. What's the fastest shortcut?",
    options: ["Ctrl + Home", "Ctrl + Down Arrow (from within the data)", "Save (Ctrl + S)", "Delete key"],
    answer: 1,
    explanation:
      "Clicking any cell inside the data column and pressing Ctrl + Down Arrow jumps straight to the last filled row, instead of scrolling manually.",
  },
];

export default function NavigationShortcuts() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Learn keyboard shortcuts to move around a worksheet quickly.</li>
          <li>Understand how to jump instantly to the start or end of your data.</li>
          <li>Learn how to move between worksheets without using the mouse.</li>
          <li>See why navigation shortcuts save huge time on large datasets.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="Why Learn Navigation Shortcuts?">

        <p>
          Imagine scrolling through 5,000 rows of sales data using just your
          mouse wheel — it could take minutes. With a few keyboard
          shortcuts, the same jump takes less than a second. Navigation
          shortcuts are one of the biggest time-savers once your worksheets
          start growing large.
        </p>

        <InfoBox>
          <p>
            These shortcuts work the same way in almost every worksheet, so
            once you learn them, they'll speed you up for life — not just
            in one file.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Moving Around a Worksheet">

        <ImageCard
          src="/images/lessons/fundamentals/excel-navigation-shortcuts.png"
          alt="Excel worksheet showing keyboard navigation shortcuts"
          caption="Keyboard shortcuts help you jump instantly across large worksheets."
        />

      </LessonSection>

      {/* Basic movement */}

      <LessonSection title="Basic Cell Movement">

        <p>
          Before jumping long distances, it helps to know the simplest,
          everyday movement keys:
        </p>

        <LessonTable
          headers={["Key", "What It Does"]}
          rows={[
            ["Arrow keys", "Move one cell up, down, left, or right"],
            ["Tab", "Moves one cell to the right"],
            ["Shift + Tab", "Moves one cell to the left"],
            ["Enter", "Moves one cell down"],
            ["Shift + Enter", "Moves one cell up"],
          ]}
        />

      </LessonSection>

      {/* Jumping shortcuts */}

      <LessonSection title="Jumping Instantly Across the Worksheet">

        <p>
          These are the real time-savers — instead of moving one cell at a
          time, these shortcuts jump across large distances instantly.
        </p>

        <ExampleBox title="Think of It Like Fast-Forward">
          <p>
            Just like pressing fast-forward on a video instead of watching
            every second, these shortcuts skip you straight to where you
            need to be in a worksheet.
          </p>
        </ExampleBox>

        <LessonTable
          headers={["Shortcut", "What It Does", "Example Use"]}
          rows={[
            ["Ctrl + Home", "Jumps to cell A1", "Quickly return to the top after scrolling far down"],
            ["Ctrl + End", "Jumps to the last used cell", "Check how far your data extends, like Z250"],
            ["Ctrl + Arrow Key", "Jumps to the edge of a continuous data block", "Move from row 1 to row 5000 in a single press"],
            ["Page Up / Page Down", "Scrolls one full screen up or down", "Browsing through data faster than arrow keys"],
          ]}
        />

        <TipBox>
          <p>
            Try this: click any cell inside a column full of data, then
            press <strong>Ctrl + Down Arrow</strong>. You'll land exactly on
            the last row of that data — no scrolling needed.
          </p>
        </TipBox>

      </LessonSection>

      {/* Name box navigation */}

      <LessonSection title="Jumping to a Specific Cell Using the Name Box">

        <p>
          Remember the <strong>Name Box</strong> from an earlier lesson? You
          can type any cell address into it — like Z100 — and press Enter
          to jump there instantly, even if it's far outside your current
          view.
        </p>

      </LessonSection>

      {/* Sheet navigation */}

      <LessonSection title="Moving Between Worksheets">

        <p>
          If your workbook has multiple worksheets (like January, February,
          March), you don't need to click each tab manually:
        </p>

        <LessonTable
          headers={["Shortcut", "What It Does"]}
          rows={[
            ["Ctrl + Page Down", "Moves to the next worksheet tab (e.g., January → February)"],
            ["Ctrl + Page Up", "Moves to the previous worksheet tab (e.g., February → January)"],
          ]}
        />

      </LessonSection>

      {/* Practical scenario */}

      <LessonSection title="Quick Scenario: Navigating a Big Sales Sheet">

        <p>
          Our shopkeeper now has a full year of daily sales — thousands of
          rows. Here's how shortcuts help them work faster:
        </p>

        <LessonTable
          headers={["Task", "Shortcut to Use"]}
          rows={[
            ["Go back to the top of the sheet", "Ctrl + Home"],
            ["Check the very last row of data entered", "Ctrl + End"],
            ["Jump from row 1 to the last filled row in a column", "Ctrl + Down Arrow"],
            ["Switch from 'January' sheet to 'February' sheet", "Ctrl + Page Down"],
          ]}
        />

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "Arrow keys, Tab, and Enter move one cell at a time in different directions.",
          "Ctrl + Home jumps to cell A1; Ctrl + End jumps to the last used cell.",
          "Ctrl + Arrow Key jumps to the edge of a continuous block of data instantly.",
          "The Name Box lets you jump directly to any cell by typing its address.",
          "Ctrl + Page Down / Page Up switches between worksheet tabs quickly.",
          "These shortcuts save significant time when working with large worksheets.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}