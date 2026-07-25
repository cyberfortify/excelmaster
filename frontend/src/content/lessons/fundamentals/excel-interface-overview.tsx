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
    question: "Which part of Excel contains all the tabs like Home, Insert, and Formulas?",
    options: ["Formula Bar", "Status Bar", "Ribbon", "Name Box"],
    answer: 2,
    explanation:
      "The Ribbon sits at the top of Excel and organizes all tools into tabs like Home, Insert, Page Layout, and Formulas.",
  },
  {
    question: "If you click on a cell and want to see or edit the formula inside it, where should you look?",
    options: ["Status Bar", "Formula Bar", "Ribbon", "Sheet Tabs"],
    answer: 1,
    explanation:
      "The Formula Bar shows the exact content (text, number, or formula) of the cell you have selected.",
  },
  {
    question: "Where can you see quick calculations like SUM or AVERAGE without typing a formula?",
    options: ["Ribbon", "Name Box", "Status Bar", "Sheet Tabs"],
    answer: 2,
    explanation:
      "The Status Bar at the bottom of the screen shows quick stats (like Sum, Average, Count) for any cells you select.",
  },
  {
    question: "What does the Name Box show?",
    options: [
      "The name of the workbook file",
      "The address of the currently selected cell (like B4)",
      "The name of the printer",
      "The current date",
    ],
    answer: 1,
    explanation:
      "The Name Box displays the cell reference — for example, B4 — of whichever cell is currently selected.",
  },
  {
    question: "Where would you click to switch from 'Sheet1' to 'Sheet2' in the same workbook?",
    options: ["Formula Bar", "Ribbon", "Sheet Tabs at the bottom", "Name Box"],
    answer: 2,
    explanation:
      "Sheet Tabs are located at the bottom of the Excel window and let you move between different worksheets in the same workbook.",
  },
];

export default function ExcelInterfaceOverview() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Understand the main parts of the Excel screen.</li>
          <li>Learn what the Ribbon, Formula Bar, and Status Bar do.</li>
          <li>Know how to identify a cell using the Name Box.</li>
          <li>Feel comfortable navigating Excel without getting lost.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="Why Learn the Interface First?">

        <p>
          Before learning formulas or charts, it's important to know{" "}
          <strong>where things are</strong> on the screen — just like you'd
          want to know where the buttons on a TV remote are before using it.
        </p>

        <p>
          When you open Excel, it can look a little overwhelming at first —
          lots of buttons, tabs, and boxes. But once you know what each part
          does, it becomes very easy to use.
        </p>

        <InfoBox>
          <p>
            You don't need to memorize every button right away. Just knowing
            the four main areas below is enough to get started confidently.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="The Excel Screen at a Glance">

        <ImageCard
          src="/images/lessons/fundamentals/excel-interface.png"
          alt="Microsoft Excel Interface"
          caption="The Microsoft Excel workspace showing the Ribbon, Formula Bar, Worksheet, and Status Bar."
        />

      </LessonSection>

      {/* Main Parts */}

      <LessonSection title="The 4 Main Parts of Excel">

        <p>
          Think of the Excel screen like a car dashboard — every part has a
          specific job. Here are the four parts you'll use the most:
        </p>

        <LessonTable
          headers={["Part", "What It Does", "Easy Example"]}
          rows={[
            [
              "Ribbon (Top)",
              "Holds all tools, organized into tabs",
              "Like a toolbox with labeled drawers — Home, Insert, Formulas, etc.",
            ],
            [
              "Formula Bar",
              "Shows the content of the selected cell",
              "Click a cell showing '500' — the Formula Bar might show '=200+300'",
            ],
            [
              "Worksheet (Middle)",
              "The grid of rows and columns where you enter data",
              "Like a page of graph paper made of boxes (cells)",
            ],
            [
              "Status Bar (Bottom)",
              "Shows quick info like Sum/Average of selected cells",
              "Select 3 numbers — instantly see their total at the bottom",
            ],
          ]}
        />

      </LessonSection>

      {/* Ribbon Deep Dive */}

      <LessonSection title="A Closer Look: The Ribbon">

        <p>
          The Ribbon is the strip of tabs and icons at the very top of
          Excel. Each tab groups related tools together, so you don't have
          to hunt for what you need.
        </p>

        <ExampleBox title="Common Ribbon Tabs">
          <LessonTable
            headers={["Tab", "What You'll Find There"]}
            rows={[
              ["Home", "Font, colors, bold/italic, alignment"],
              ["Insert", "Charts, tables, pictures"],
              ["Page Layout", "Margins, orientation, print settings"],
              ["Formulas", "SUM, AVERAGE, and other functions"],
              ["Data", "Sorting and filtering your data"],
            ]}
          />
        </ExampleBox>

        <TipBox>
          <p>
            If you're not sure where a tool is, just look at the tab names —
            they usually describe exactly what's inside.
          </p>
        </TipBox>

      </LessonSection>

      {/* Name Box and Cell Reference */}

      <LessonSection title="Name Box: Knowing Where You Are">

        <p>
          Every cell in Excel has an address — like a house number — made of
          a column letter and a row number. For example, the cell in column{" "}
          <strong>B</strong>, row <strong>4</strong> is called{" "}
          <strong>B4</strong>.
        </p>

        <p>
          The <strong>Name Box</strong>, located just left of the Formula
          Bar, always tells you the address of the cell you've clicked on —
          so you never lose track of where you are.
        </p>

      </LessonSection>

      {/* Sheet Tabs */}

      <LessonSection title="Sheet Tabs: Moving Between Pages">

        <p>
          Remember from the earlier lesson that a Workbook can have multiple
          Worksheets — like pages in a notebook? The small tabs at the{" "}
          <strong>bottom-left</strong> of the screen (often labeled Sheet1,
          Sheet2...) let you click and jump between those pages instantly.
        </p>

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "The Ribbon (top) organizes all tools into tabs like Home, Insert, and Formulas.",
          "The Formula Bar shows the real content or formula behind the selected cell.",
          "The Worksheet is the grid of rows and columns where you enter data.",
          "The Status Bar (bottom) shows quick calculations like Sum and Average.",
          "The Name Box tells you the address of the cell you've selected, like B4.",
          "Sheet Tabs at the bottom let you switch between different worksheets.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}