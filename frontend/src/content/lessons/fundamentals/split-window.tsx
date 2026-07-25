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
    question: "What does the Split Window feature do in Excel?",
    options: [
      "Deletes half of your data",
      "Divides the worksheet into separate scrollable sections, so you can view different areas at once",
      "Splits one workbook into two separate files",
      "Locks the header row permanently",
    ],
    answer: 1,
    explanation:
      "Split divides the worksheet window into multiple panes that can each be scrolled independently, letting you view two different areas of the same sheet at once.",
  },
  {
    question: "Which Ribbon tab contains the Split option?",
    options: ["Home", "Insert", "View", "Data"],
    answer: 2,
    explanation:
      "Like Freeze Panes, the Split option is found under the View tab, in the Window group.",
  },
  {
    question: "How is Split different from Freeze Panes?",
    options: [
      "They are exactly the same feature",
      "Split creates independently scrollable sections; Freeze Panes locks rows/columns so they don't scroll at all",
      "Split only works on formulas",
      "Freeze Panes deletes data, Split doesn't",
    ],
    answer: 1,
    explanation:
      "With Freeze Panes, the frozen area never scrolls. With Split, every section can still scroll — just independently of the others.",
  },
  {
    question: "You're comparing sales data from row 2 with data from row 800 in the same sheet. Which feature helps you see both at once without losing either?",
    options: ["Freeze Top Row", "Split Window", "Save As", "Undo"],
    answer: 1,
    explanation:
      "Split Window lets you scroll one section to row 2 and another section to row 800, so you can compare both simultaneously.",
  },
  {
    question: "Where does the split line appear when you click Split from the View tab?",
    options: [
      "Always exactly in the middle of the sheet",
      "Based on the cell you had selected before clicking Split",
      "At the very last row of data",
      "It doesn't show a line at all",
    ],
    answer: 1,
    explanation:
      "Excel splits the window based on your currently selected cell — the split line appears above and to the left of that cell.",
  },
  {
    question: "How do you remove a Split once it's applied?",
    options: [
      "Click Split again to toggle it off",
      "Restart your computer",
      "Delete the worksheet",
      "There is no way to remove it",
    ],
    answer: 0,
    explanation:
      "Split works as a toggle — clicking the Split button again (under View) removes the split and returns to a single scrollable view.",
  },
];

export default function SplitWindow() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Understand what Split Window does and how it's different from Freeze Panes.</li>
          <li>Learn how to split a worksheet into separate scrollable sections.</li>
          <li>See a real-world example of when Split is more useful than Freeze.</li>
          <li>Know how to remove a split once you're done.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="A Different Kind of Problem">

        <p>
          In the last lesson, Freeze Panes solved the problem of losing
          sight of your headers. But what if you need to compare two{" "}
          <strong>different parts</strong> of your data — say, row 2 and row
          800 — at the same time, and both need to scroll independently?
          That's exactly what <strong>Split Window</strong> is built for.
        </p>

        <InfoBox>
          <p>
            Think of Split as opening two (or four) "windows" into the same
            worksheet, each one scrollable on its own — unlike Freeze Panes,
            where the frozen part never moves at all.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Split Window in Action">

        <ImageCard
          src="/images/lessons/fundamentals/excel-split-window.png"
          alt="Excel worksheet divided into split sections that scroll independently"
          caption="Split divides the worksheet into sections, each scrollable on its own."
        />

      </LessonSection>

      {/* Split vs Freeze */}

      <LessonSection title="Split vs Freeze Panes: What's the Real Difference?">

        <p>
          These two features live right next to each other on the View tab
          and get confused often — here's a clear side-by-side comparison:
        </p>

        <LessonTable
          headers={["Freeze Panes", "Split Window"]}
          rows={[
            ["Frozen rows/columns never scroll", "All sections can scroll — just independently of each other"],
            ["Best for keeping headers visible", "Best for comparing two distant parts of the same sheet"],
            ["Creates a fixed, locked area", "Creates movable divider bars you can drag"],
            ["Only removed via Unfreeze Panes", "Toggled on/off with the same Split button"],
          ]}
        />

      </LessonSection>

      {/* How to use */}

      <LessonSection title="How to Split a Worksheet">

        <ExampleBox title="Step-by-Step">
          <p>
            Click on a cell where you want the split to appear — for
            example, cell A10 to split the sheet horizontally near row 10.
            Then go to <strong>View → Split</strong>. Excel instantly
            divides the window into sections, each with its own scrollbar.
          </p>
        </ExampleBox>

        <TipBox>
          <p>
            You can drag the split bar itself to adjust exactly where the
            division sits — no need to undo and redo the whole split if you
            want to move it slightly.
          </p>
        </TipBox>

      </LessonSection>

      {/* Real world example */}

      <LessonSection title="Real-Life Example: Comparing Two Months">

        <p>
          Suppose a shopkeeper has a full year of daily sales in one sheet.
          Row 2 has January's data, and row 800 has November's data. They
          want to compare both months side by side, without losing their
          place in either one.
        </p>

        <LessonTable
          headers={["Without Split", "With Split"]}
          rows={[
            ["Constant scrolling back and forth loses track of both rows", "Top section stays on row 2, bottom section scrolls to row 800"],
            ["Hard to compare numbers accurately", "Both rows visible and comparable at the same time"],
          ]}
        />

      </LessonSection>

      {/* Removing split */}

      <LessonSection title="Removing the Split">

        <p>
          Split works like an on/off switch. Simply go back to{" "}
          <strong>View → Split</strong> and click it again — the divider
          bars disappear, and your worksheet returns to a single, normal
          scrolling view.
        </p>
      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "Split Window divides the worksheet into sections that scroll independently.",
          "Unlike Freeze Panes, nothing is permanently locked — every section can still move.",
          "It's ideal for comparing two distant parts of the same sheet, like row 2 and row 800.",
          "The split appears based on your selected cell, and the divider bars can be dragged to adjust.",
          "Clicking Split again (under View) removes it and restores a single scrollable view.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}