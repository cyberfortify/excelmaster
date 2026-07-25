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
    question: "Which key do you press to confirm data entry and move to the cell below?",
    options: ["Tab", "Enter", "Shift", "Ctrl"],
    answer: 1,
    explanation:
      "Pressing Enter confirms what you typed in a cell and automatically moves the selection down to the next cell.",
  },
  {
    question: "Which key moves you to the next cell on the right after entering data?",
    options: ["Enter", "Tab", "Esc", "Backspace"],
    answer: 1,
    explanation:
      "Pressing Tab confirms the entry and moves the selection one cell to the right, which is useful for entering data across a row.",
  },
  {
    question: "How do you edit the content of a cell that already has data in it?",
    options: [
      "You cannot edit a cell once data is entered",
      "Double-click the cell, or select it and press F2",
      "Delete the whole worksheet and start over",
      "Right-click and choose Print",
    ],
    answer: 1,
    explanation:
      "Double-clicking a cell (or selecting it and pressing F2) lets you edit its existing content instead of replacing it entirely.",
  },
  {
    question: "What does pressing the Esc key do while entering data in a cell?",
    options: [
      "Saves the entry",
      "Cancels the current entry, restoring the cell's previous content",
      "Deletes the entire row",
      "Opens the Formulas tab",
    ],
    answer: 1,
    explanation:
      "Esc cancels whatever you were typing, so the cell reverts back to what it contained before you started editing.",
  },
  {
    question: "You want to quickly copy the same value into several cells below. Which feature would help?",
    options: ["Fill Handle (small square at the cell's corner)", "Formula Bar", "Name Box", "Ribbon's View tab"],
    answer: 0,
    explanation:
      "Dragging the Fill Handle — the small square at the bottom-right corner of a selected cell — copies or continues data into adjacent cells.",
  },
  {
    question: "A teacher types marks into column B, but accidentally types 76 instead of 96 for a student. What's the correct way to fix just that one cell?",
    options: [
      "Delete the whole worksheet",
      "Double-click the cell, correct the number, and press Enter",
      "Create a new workbook",
      "Use the Page Layout tab",
    ],
    answer: 1,
    explanation:
      "The correct fix is to double-click (or select and press F2) the specific cell, update the number, and press Enter to confirm.",
  },
];

export default function EnteringEditingData() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Learn how to type data into cells correctly.</li>
          <li>Understand the difference between Enter, Tab, and Esc while entering data.</li>
          <li>Know how to edit or fix a cell that already has data.</li>
          <li>Discover the Fill Handle — a fast way to copy data into multiple cells.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="Getting Data Into Excel">

        <p>
          Now that you know what rows, columns, and cells are, it's time to
          actually put something inside them. Entering data in Excel is as
          simple as clicking a cell and typing — but a few small habits can
          make you much faster and help you avoid mistakes.
        </p>

        <InfoBox>
          <p>
            Excel automatically detects what you type — numbers, text, or
            dates — and formats them differently. For example, numbers
            align to the right, while text aligns to the left by default.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Typing Data Into a Cell">

        <ImageCard
          src="/images/lessons/fundamentals/excel-entering-data.png"
          alt="Typing data into an Excel cell with the Fill Handle visible"
          caption="Click a cell, type your data, and press Enter or Tab to confirm."
        />

      </LessonSection>

      {/* Basic entry steps */}

      <LessonSection title="How to Enter Data: Step by Step">

        <ExampleBox title="Simple Steps">
          <p>
            Click on a cell (say A1), type a value like "Priya," and press{" "}
            <strong>Enter</strong>. That's it — the text is now saved in
            cell A1, and Excel automatically moves you down to A2, ready
            for the next entry.
          </p>
        </ExampleBox>

        <LessonTable
          headers={["Key", "What It Does", "When to Use It"]}
          rows={[
            ["Enter", "Confirms entry, moves down one cell", "Entering data down a column, like a list of names"],
            ["Tab", "Confirms entry, moves right one cell", "Entering data across a row, like Name, Age, Marks"],
            ["Esc", "Cancels the entry, restores old content", "You typed something wrong and want to start over"],
            ["Arrow keys", "Moves to a neighboring cell", "Quickly navigating without using the mouse"],
          ]}
        />

      </LessonSection>

      {/* Editing existing data */}

      <LessonSection title="Editing Data That's Already There">

        <p>
          Mistakes happen — maybe you typed the wrong marks or misspelled a
          name. Excel makes it easy to fix just one cell without retyping
          everything.
        </p>

        <LessonTable
          headers={["Method", "How It Works"]}
          rows={[
            ["Double-click the cell", "Places your cursor right inside the cell so you can edit specific characters"],
            ["Select the cell and press F2", "Same result as double-clicking, but using the keyboard"],
            ["Select the cell and just start typing", "This replaces the entire old content with what you type"],
          ]}
        />

        <TipBox>
          <p>
            If you only want to fix one letter or number (not replace the
            whole entry), always double-click or press F2 — typing directly
            over a cell erases everything that was there before.
          </p>
        </TipBox>

      </LessonSection>

      {/* Fill Handle */}

      <LessonSection title="The Fill Handle: Entering Data Faster">

        <p>
          Notice the tiny square at the bottom-right corner of a selected
          cell? That's the <strong>Fill Handle</strong>. Dragging it lets
          you copy data — or continue a pattern — into neighboring cells
          instantly.
        </p>

        <ExampleBox title="Real-Life Example">
          <p>
            Suppose column A needs "January" in A1. Instead of typing
            February, March, and so on manually, just type "January" in A1,
            then drag the Fill Handle down — Excel automatically fills in
            February, March, April... recognizing the pattern.
          </p>
        </ExampleBox>

      </LessonSection>

      {/* Common mistake */}

      <LessonSection title="Common Beginner Mistake">

        <p>
          A common mistake is pressing the <strong>Delete</strong> key to
          "clear" a cell before retyping, then getting confused about why
          old formatting (like bold or color) still remains. Remember:
          Delete only clears the <em>content</em>, not the formatting — that
          needs to be cleared separately if required.
        </p>
      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "Click a cell and type to enter data — Excel automatically detects text, numbers, or dates.",
          "Enter moves down a column; Tab moves across a row; Esc cancels an entry.",
          "Double-click a cell (or press F2) to edit its existing content without erasing it.",
          "Typing directly over a cell replaces all of its old content.",
          "The Fill Handle (small square at a cell's corner) helps copy data or continue patterns quickly.",
          "Delete removes only content — formatting like bold or color stays unless cleared separately.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}