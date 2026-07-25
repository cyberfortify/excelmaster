import LessonSection from "../../../components/lesson/content/LessonSection";
import InfoBox from "../../../components/lesson/content/InfoBox";
import TipBox from "../../../components/lesson/content/TipBox";
import LessonTable from "../../../components/lesson/content/LessonTable";
import SummaryBox from "../../../components/lesson/content/SummaryBox";
import PracticeCard from "../../../components/lesson/content/PracticeCard";

const questions = [
  // Excel Basics & Interface
  {
    question: "What is Microsoft Excel primarily used for?",
    options: ["Editing videos", "Organizing, calculating, and analyzing data", "Browsing the internet", "Editing photos"],
    answer: 1,
    explanation:
      "Excel is a spreadsheet application used to organize, calculate, analyze, and visualize data using rows, columns, and formulas.",
  },
  {
    question: "Which part of the Excel screen shows the content or formula of the currently selected cell?",
    options: ["Status Bar", "Ribbon", "Formula Bar", "Name Box"],
    answer: 2,
    explanation:
      "The Formula Bar displays the exact content — text, number, or formula — of whichever cell you have selected.",
  },
  {
    question: "Which Ribbon tab would you use to insert a chart?",
    options: ["Home", "Insert", "Formulas", "Review"],
    answer: 1,
    explanation:
      "The Insert tab is where you add charts, tables, pictures, and other objects into your worksheet.",
  },

  // Quick Access Toolbar
  {
    question: "Which of these is a default tool on the Quick Access Toolbar?",
    options: ["Sort Data", "Save", "Insert Chart", "Freeze Panes"],
    answer: 1,
    explanation:
      "Save, Undo, and Redo are the common default tools that appear on the Quick Access Toolbar.",
  },

  // Workbook vs Worksheet
  {
    question: "A single Excel file that can contain multiple sheets is called a:",
    options: ["Worksheet", "Workbook", "Cell", "Ribbon"],
    answer: 1,
    explanation:
      "A Workbook is the complete Excel file — like a notebook — and can hold many worksheets inside it.",
  },

  // Rows, Columns & Cells
  {
    question: "What is the cell reference for the box in column D, row 6?",
    options: ["6D", "D6", "D-6", "6-D"],
    answer: 1,
    explanation:
      "Cell references are always written with the column letter first, then the row number — so it's D6.",
  },
  {
    question: "What does the range B2:B5 represent?",
    options: ["Only cells B2 and B5", "All cells from B2 through B5", "Cell B2 multiplied by B5", "A formula name"],
    answer: 1,
    explanation:
      "A colon between two cell references means 'through' — so B2:B5 covers all cells from B2 down to B5.",
  },

  // Cell References
  {
    question: "Which type of reference automatically changes when a formula is copied to another cell?",
    options: ["Absolute Reference", "Relative Reference", "Mixed Reference", "Named Range"],
    answer: 1,
    explanation:
      "A relative reference (like A1) automatically shifts to match its new position when the formula is copied.",
  },
  {
    question: "What does the $ symbol do in a cell reference like $B$2?",
    options: ["Formats it as currency", "Locks the reference so it doesn't change when copied", "Deletes the cell", "Converts it to text"],
    answer: 1,
    explanation:
      "The $ sign creates an absolute reference, locking the column and/or row so it stays fixed when the formula is copied elsewhere.",
  },

  // Entering & Editing Data
  {
    question: "Which key confirms a cell entry and moves you down to the next cell?",
    options: ["Tab", "Enter", "Esc", "Ctrl"],
    answer: 1,
    explanation:
      "Pressing Enter confirms what you typed and automatically moves the selection down to the cell below.",
  },
  {
    question: "How do you edit an existing cell's content without erasing everything first?",
    options: ["Delete the worksheet", "Double-click the cell (or press F2)", "Press Ctrl + S", "Use the Status Bar"],
    answer: 1,
    explanation:
      "Double-clicking a cell (or selecting it and pressing F2) places your cursor inside so you can edit specific parts of its content.",
  },

  // Save, Open & Close
  {
    question: "Which shortcut saves the current workbook?",
    options: ["Ctrl + O", "Ctrl + S", "Ctrl + P", "Ctrl + N"],
    answer: 1,
    explanation:
      "Ctrl + S saves the current workbook, updating the existing file with your latest changes.",
  },
  {
    question: "What is the purpose of 'Save As'?",
    options: [
      "It deletes the current file",
      "It creates a new file or a copy with a different name, location, or format",
      "It only works for printing",
      "It closes the workbook without saving",
    ],
    answer: 1,
    explanation:
      "Save As lets you create a new file or save a copy under a different name, location, or format, without overwriting the original.",
  },

  // Navigation Shortcuts
  {
    question: "Which shortcut instantly takes you back to cell A1?",
    options: ["Ctrl + End", "Ctrl + Home", "Ctrl + A1", "Page Up"],
    answer: 1,
    explanation:
      "Ctrl + Home always jumps straight back to cell A1, no matter where you are in the worksheet.",
  },
  {
    question: "Which shortcut jumps to the last filled cell in a continuous column of data?",
    options: ["Ctrl + Down Arrow", "Ctrl + S", "Shift + Tab", "Esc"],
    answer: 0,
    explanation:
      "Ctrl + Down Arrow jumps to the edge of a continuous data block, landing on the last filled cell in that column.",
  },

  // Freeze Panes
  {
    question: "What does 'Freeze Top Row' do?",
    options: [
      "Deletes the first row",
      "Keeps the first row visible while scrolling down",
      "Locks the entire workbook with a password",
      "Prints only the first row",
    ],
    answer: 1,
    explanation:
      "Freeze Top Row locks just row 1 in place — usually your headers — so it stays visible no matter how far down you scroll.",
  },

  // Split Window
  {
    question: "How is Split Window different from Freeze Panes?",
    options: [
      "They are identical features",
      "Split creates independently scrollable sections, while Freeze locks an area so it never scrolls",
      "Split deletes data, Freeze doesn't",
      "Freeze only works on charts",
    ],
    answer: 1,
    explanation:
      "With Freeze Panes, the frozen area never scrolls. With Split, all sections can still scroll — just independently of each other.",
  },

  // Zoom & View
  {
    question: "Which view is best for seeing exactly how your worksheet will look when printed?",
    options: ["Normal View", "Page Layout View", "Split View", "Zoom 50%"],
    answer: 1,
    explanation:
      "Page Layout View shows page breaks, margins, and headers/footers exactly as they'll appear on a printed page.",
  },
  {
    question: "Does zooming in or out change the actual data or font size stored in a cell?",
    options: ["Yes, it permanently changes the font size", "No, it only changes how things look on your screen", "Yes, it deletes formatting", "It changes the file format"],
    answer: 1,
    explanation:
      "Zooming only affects how the worksheet appears on your screen — it has no effect on the actual data or stored font size.",
  },
];

export default function PracticeExercise() {
  return (
    <>
      {/* Intro */}

      <LessonSection title="Chapter Practice: Excel Basics & Interface">

        <p>
          You've now covered everything from what Excel is, to navigating
          large worksheets like a pro. This practice exercise brings
          together questions from <strong>all the lessons so far</strong> —
          the Excel interface, Ribbon, Workbook vs Worksheet, Cells, Cell
          References, Data Entry, Saving Files, Navigation Shortcuts,
          Freeze Panes, Split Window, and Zoom & View options.
        </p>

        <InfoBox>
          <p>
            Try to answer without scrolling back to the lessons first — this
            is a great way to check what you truly remember. If you get
            stuck, that's completely fine; just revisit that specific
            lesson afterward.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Recap table */}

      <LessonSection title="Quick Recap Before You Begin">

        <p>
          Here's a one-glance summary of everything this practice set
          covers:
        </p>

        <LessonTable
          headers={["Topic", "Key Idea to Remember"]}
          rows={[
            ["Excel Basics", "A spreadsheet app for organizing and calculating data"],
            ["Ribbon & Tabs", "Tools grouped into tabs like Home, Insert, Formulas"],
            ["Workbook vs Worksheet", "Workbook = whole file; Worksheet = one page inside it"],
            ["Rows, Columns & Cells", "Columns = letters, Rows = numbers, Cell = where they meet"],
            ["Cell References", "Relative (A1) shifts when copied; Absolute ($A$1) stays fixed"],
            ["Entering & Editing Data", "Enter moves down, Tab moves right, F2 edits a cell"],
            ["Save, Open & Close", "Ctrl + S saves; Save As creates a new file"],
            ["Navigation Shortcuts", "Ctrl + Home/End jump to start/end of data instantly"],
            ["Freeze Panes", "Keeps headers visible while scrolling"],
            ["Split Window", "Creates independently scrollable sections"],
            ["Zoom & View", "Changes appearance only, never the actual data"],
          ]}
        />

        <TipBox>
          <p>
            If a question feels tricky, think about the real-world examples
            from the lessons — like the shopkeeper tracking sales, or the
            teacher entering student marks. They often make the right
            answer click faster.
          </p>
        </TipBox>

      </LessonSection>

      {/* Practice */}

      <LessonSection title="Test Your Knowledge">

        <p>
          Answer all {questions.length} questions below to check your
          understanding of this chapter.
        </p>

        <PracticeCard questions={questions} />

      </LessonSection>

      {/* Summary / closing */}

      <SummaryBox
        points={[
          "This exercise covered the Excel interface, Ribbon, Workbook/Worksheet, Cells, References, Data Entry, Saving, Navigation, Freeze Panes, Split, and Zoom/View.",
          "Getting a few answers wrong is a normal part of learning — revisit those specific lessons to strengthen your understanding.",
          "You're now ready to move on to working with formulas and functions, the next big step in learning Excel.",
        ]}
      />
    </>
  );
}