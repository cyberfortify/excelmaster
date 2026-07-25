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
    question: "Which keyboard shortcut is commonly used to save a workbook?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + O", "Ctrl + N"],
    answer: 1,
    explanation:
      "Ctrl + S is the standard shortcut to save your current workbook quickly, without going through the File menu.",
  },
  {
    question: "What is the difference between 'Save' and 'Save As'?",
    options: [
      "There is no difference",
      "Save updates the same file; Save As creates a new file or saves in a different location/format",
      "Save only works for new files",
      "Save As can only be used once",
    ],
    answer: 1,
    explanation:
      "'Save' updates the existing file with your latest changes, while 'Save As' lets you create a copy, rename it, or save it in a different location or format.",
  },
  {
    question: "You've been working on a workbook for the first time and haven't saved it yet. What happens when you press Ctrl + S?",
    options: [
      "Nothing happens",
      "Excel asks you to choose a file name and location, since it hasn't been saved before",
      "It automatically deletes the file",
      "It opens a new workbook",
    ],
    answer: 1,
    explanation:
      "For a brand-new, unsaved workbook, Ctrl + S opens the Save dialog box asking where to save it and what to name it.",
  },
  {
    question: "Which shortcut is used to open an existing workbook?",
    options: ["Ctrl + O", "Ctrl + N", "Ctrl + S", "Ctrl + W"],
    answer: 0,
    explanation:
      "Ctrl + O opens the 'Open' dialog box, letting you browse and select an existing workbook file to open.",
  },
  {
    question: "What happens if you close a workbook without saving your recent changes?",
    options: [
      "Excel saves automatically with no warning",
      "Excel usually shows a warning, asking if you want to save changes before closing",
      "The file gets permanently deleted",
      "Nothing — changes are always kept even without saving",
    ],
    answer: 1,
    explanation:
      "Excel typically prompts you with a warning dialog asking whether you want to save your changes before the workbook closes.",
  },
  {
    question: "A shopkeeper wants to keep this month's sales file as it is, but also create a separate copy for next month with a new name. Which option should they use?",
    options: ["Save", "Save As", "Close", "Undo"],
    answer: 1,
    explanation:
      "Save As lets them create a new file (like Sales_Feb2026.xlsx) without overwriting the original file, which is exactly what's needed here.",
  },
];

export default function SaveOpenCloseWorkbook() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Learn how to save a workbook, and the difference between Save and Save As.</li>
          <li>Understand how to open an existing workbook.</li>
          <li>Learn the safe way to close a workbook without losing data.</li>
          <li>Know the essential keyboard shortcuts for each action.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="Why This Lesson Matters">

        <p>
          You could learn every formula and chart in Excel — but if you
          don't know how to save your work properly, all of it can
          disappear in seconds. This lesson covers one of the most
          important, yet often overlooked, skills: saving, opening, and
          closing your workbook safely.
        </p>

        <InfoBox>
          <p>
            A simple habit — pressing Ctrl + S every few minutes — can save
            you from losing hours of work due to a sudden power cut or
            accidental closure.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Saving a Workbook">

        <ImageCard
          src="/images/lessons/fundamentals/excel-save-open-close.png"
          alt="Excel File menu showing Save, Save As, Open, and Close options"
          caption="The File menu gives you access to Save, Save As, Open, and Close."
        />

      </LessonSection>

      {/* Saving */}

      <LessonSection title="Saving Your Workbook">

        <p>
          Saving stores all your current data, formulas, and formatting
          into the file, so you can safely close Excel and come back to it
          later.
        </p>

        <LessonTable
          headers={["Action", "Shortcut", "What Happens"]}
          rows={[
            ["Save", "Ctrl + S", "Updates the existing file with your latest changes"],
            ["Save As", "F12 (or File → Save As)", "Creates a new file, or saves a copy with a different name, location, or format"],
          ]}
        />

        <ExampleBox title="Save vs Save As — Real Example">
          <p>
            Suppose you're editing "Sales_Jan2026.xlsx." Pressing{" "}
            <strong>Save</strong> updates this same file. But if you want to
            keep January's file untouched and start a fresh one for
            February, you'd use <strong>Save As</strong> and name it
            "Sales_Feb2026.xlsx" — creating a brand-new file instead.
          </p>
        </ExampleBox>

        <TipBox>
          <p>
            The first time you save a brand-new workbook, even regular Save
            (Ctrl + S) will ask you for a file name and location — because
            there's no existing file to update yet.
          </p>
        </TipBox>

      </LessonSection>

      {/* Opening */}

      <LessonSection title="Opening an Existing Workbook">

        <p>
          To continue work on a file you saved earlier, you need to open
          it again.
        </p>

        <LessonTable
          headers={["Method", "How It Works"]}
          rows={[
            ["Keyboard Shortcut", "Press Ctrl + O to open the Open dialog box, then browse and select your file"],
            ["Double-click the file", "Locate the .xlsx file on your computer and double-click it to open directly in Excel"],
            ["Recent Files", "In Excel's Start screen, click 'Recent' to quickly reopen files you used lately"],
          ]}
        />

      </LessonSection>

      {/* Closing */}

      <LessonSection title="Closing a Workbook Safely">

        <p>
          Closing a workbook removes it from your screen, but it's
          important to save first — otherwise, your latest changes could be
          lost.
        </p>

        <ExampleBox title="What Happens If You Forget to Save?">
          <p>
            If you try to close a workbook with unsaved changes, Excel
            shows a warning dialog asking: "Do you want to save changes
            before closing?" You can choose <strong>Save</strong> to keep
            your changes, <strong>Don't Save</strong> to discard them, or{" "}
            <strong>Cancel</strong> to go back and keep working.
          </p>
        </ExampleBox>

      </LessonSection>

      {/* Practical scenario */}

      <LessonSection title="Quick Scenario: What Would You Do?">

        <p>
          Let's revisit our shopkeeper. They finish entering March's sales
          and want to shut down their laptop for the day. Here's the safe
          sequence:
        </p>

        <LessonTable
          headers={["Step", "Action"]}
          rows={[
            ["1", "Press Ctrl + S to save the latest changes"],
            ["2", "Check the title bar to confirm the file name is correct"],
            ["3", "Close the workbook (or Excel itself) safely"],
          ]}
        />

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "Save (Ctrl + S) updates the current file with your latest changes.",
          "Save As (F12) creates a new file or saves a copy with a different name, location, or format.",
          "Open (Ctrl + O) lets you browse and reopen an existing workbook.",
          "Excel warns you before closing a workbook with unsaved changes.",
          "Saving regularly (every few minutes) protects your work from accidental loss.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}