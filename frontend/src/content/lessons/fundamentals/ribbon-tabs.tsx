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
    question: "Which Ribbon tab would you use to make text bold or change font color?",
    options: ["Insert", "Home", "Page Layout", "Data"],
    answer: 1,
    explanation:
      "The Home tab holds basic formatting tools like Bold, Italic, font color, and alignment — the ones used most often.",
  },
  {
    question: "You want to add a chart to show your sales data visually. Which tab should you open?",
    options: ["Home", "Formulas", "Insert", "Review"],
    answer: 2,
    explanation:
      "The Insert tab is where you add charts, tables, pictures, and other objects into your worksheet.",
  },
  {
    question: "Which tab contains ready-made functions like SUM and AVERAGE?",
    options: ["Formulas", "View", "Home", "Page Layout"],
    answer: 0,
    explanation:
      "The Formulas tab groups all of Excel's built-in functions, like SUM, AVERAGE, and IF, in one place.",
  },
  {
    question: "Before printing a worksheet, which tab would help you set margins and page orientation?",
    options: ["Data", "Page Layout", "Review", "Insert"],
    answer: 1,
    explanation:
      "The Page Layout tab has settings for margins, orientation (portrait/landscape), and print area.",
  },
  {
    question: "Which tab would you use to sort a list of names alphabetically or filter out unwanted rows?",
    options: ["Data", "Home", "Insert", "View"],
    answer: 0,
    explanation:
      "The Data tab contains tools for sorting and filtering, helping you organize large lists of information.",
  },
  {
    question: "Ribbon tabs are grouped further into smaller sections. What are these sections called?",
    options: ["Cells", "Groups", "Sheets", "Names"],
    answer: 1,
    explanation:
      "Each Ribbon tab is divided into Groups (like 'Font' or 'Alignment' inside the Home tab) to keep related tools together.",
  },
];

export default function RibbonAndTabs() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Understand what the Ribbon is and why it's organized into tabs.</li>
          <li>Learn what each major Ribbon tab is used for.</li>
          <li>Understand how tabs are further divided into Groups.</li>
          <li>Know exactly where to look when you need a specific tool.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="What is the Ribbon?">

        <p>
          In the last lesson, we saw that the Ribbon sits at the top of
          Excel. Think of it like the <strong>menu of a restaurant</strong> —
          instead of one giant confusing list, dishes are grouped into
          categories like Starters, Main Course, and Desserts. The Ribbon
          works the same way, grouping tools into labeled tabs.
        </p>

        <InfoBox>
          <p>
            You don't have to remember where every single tool is. Just
            remember which <em>tab</em> it belongs to, and you'll find it
            quickly.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="The Ribbon in Action">

        <ImageCard
          src="/images/lessons/fundamentals/excel-ribbon-tabs.png"
          alt="Excel Ribbon with Home and Insert tabs highlighted"
          caption="The Excel Ribbon showing tabs like Home, Insert, Page Layout, and Formulas."
        />

      </LessonSection>

      {/* Main Tabs Breakdown */}

      <LessonSection title="The Main Ribbon Tabs, Explained">

        <p>
          Here are the tabs you'll use most often, along with what they do
          and a simple real-life example for each:
        </p>

        <LessonTable
          headers={["Tab", "What It's For", "Real-Life Example"]}
          rows={[
            [
              "Home",
              "Basic formatting — font, color, bold, alignment",
              "Making your name bold and the header cell colored yellow",
            ],
            [
              "Insert",
              "Add charts, tables, pictures, and shapes",
              "Adding a bar chart to show monthly sales growth",
            ],
            [
              "Page Layout",
              "Control how your sheet looks when printed",
              "Setting the page to landscape before printing a report",
            ],
            [
              "Formulas",
              "Access built-in functions like SUM, AVERAGE, IF",
              "Clicking 'AutoSum' to quickly total a column of expenses",
            ],
            [
              "Data",
              "Sort and filter data",
              "Sorting a list of students by highest marks first",
            ],
            [
              "Review",
              "Spell check, add comments, protect sheet",
              "Adding a comment to explain an unusual number",
            ],
            [
              "View",
              "Change how the sheet looks on screen",
              "Turning on gridlines or freezing the top row while scrolling",
            ],
          ]}
        />

      </LessonSection>

      {/* Groups within tabs */}

      <LessonSection title="Tabs Are Divided Into Groups">

        <p>
          Open any tab and you'll notice it's split into smaller labeled
          sections — these are called <strong>Groups</strong>. For example,
          the Home tab has separate groups for Font, Alignment, and Number.
        </p>

        <ExampleBox title="Home Tab Groups">
          <LessonTable
            headers={["Group Name", "Tools Inside"]}
            rows={[
              ["Font", "Bold, Italic, Font Color, Font Size"],
              ["Alignment", "Left/Center/Right align, Wrap Text"],
              ["Number", "Currency format, Percentage, Decimal places"],
              ["Cells", "Insert, Delete, Format cell size"],
            ]}
          />
        </ExampleBox>

        <TipBox>
          <p>
            Hover your mouse over any Ribbon icon for a couple of seconds —
            Excel will show a small tooltip explaining exactly what that
            button does.
          </p>
        </TipBox>

      </LessonSection>

      {/* Practical scenario */}

      <LessonSection title="Quick Scenario: Which Tab Would You Use?">

        <p>
          Let's revisit our shopkeeper from earlier lessons. They've entered
          three months of sales data and now want to:
        </p>

        <LessonTable
          headers={["Task", "Tab to Use"]}
          rows={[
            ["Make the header row bold", "Home"],
            ["Insert a chart showing sales trend", "Insert"],
            ["Add a SUM formula for total sales", "Formulas"],
            ["Set the page to print on one page", "Page Layout"],
          ]}
        />

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "The Ribbon organizes Excel's tools into labeled tabs, like a restaurant menu.",
          "Home is for basic formatting; Insert is for charts, tables, and images.",
          "Formulas gives access to built-in functions like SUM and AVERAGE.",
          "Page Layout controls how your sheet looks when printed.",
          "Data helps you sort and filter information.",
          "Each tab is further divided into Groups, keeping related tools together.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}