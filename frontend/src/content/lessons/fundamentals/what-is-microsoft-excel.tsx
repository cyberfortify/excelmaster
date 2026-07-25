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
    question: "Microsoft Excel is best described as a:",
    options: [
      "Video editing tool",
      "Spreadsheet application",
      "Photo editing software",
      "Web browser",
    ],
    answer: 1,
    explanation:
      "As explained in the lesson, Excel is a spreadsheet application that helps organize, calculate, analyze, and visualize data using rows and columns.",
  },
  {
    question: "Which file extension is used for Excel workbooks?",
    options: [".docx", ".xlsx", ".pptx", ".pdf"],
    answer: 1,
    explanation:
      "The lesson shows the example 'Sales_2026.xlsx' — .xlsx is the default Excel workbook format.",
  },
  {
    question: "In the Workbook vs Worksheet example, a Workbook is compared to a:",
    options: ["Single page", "Notebook", "Pen", "Calculator"],
    answer: 1,
    explanation:
      "The lesson compares a Workbook to a whole notebook, and a Worksheet to a single page inside that notebook.",
  },
  {
    question: "In the shopkeeper example from the lesson, what was being tracked in Excel?",
    options: [
      "Employee attendance",
      "Monthly sales",
      "Ad campaign clicks",
      "Student marks",
    ],
    answer: 1,
    explanation:
      "The lesson's example showed a small shop owner tracking January, February, and March sales in Excel.",
  },
  {
    question: "What does the formula =SUM(B2:B4) do, as shown in the lesson?",
    options: [
      "Deletes the data in those cells",
      "Adds up the values in cells B2 to B4",
      "Creates a chart",
      "Changes the font color",
    ],
    answer: 1,
    explanation:
      "The lesson explains that =SUM(B2:B4) instantly adds up the sales values from those three cells, instead of calculating manually.",
  },
  {
    question: "According to the lesson, which of these is NOT mentioned as a real-life user of Excel?",
    options: ["A student tracking marks", "A shopkeeper tracking sales", "A pilot flying a plane", "A family planning a budget"],
    answer: 2,
    explanation:
      "The lesson's real-world table mentions students, shopkeepers, families, HR managers, and marketers — flying a plane isn't an Excel use case.",
  },
];

export default function WhatIsMicrosoftExcel() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Understand what Microsoft Excel is, in simple words.</li>
          <li>See where Excel is used in everyday, real life.</li>
          <li>Understand the difference between a Workbook and a Worksheet.</li>
          <li>Know why Excel is one of the most valuable job skills today.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="What is Microsoft Excel?">

        <p>
          Think of Microsoft Excel as a <strong>giant, smart notebook made of
            rows and columns</strong>. Instead of writing numbers on paper and
          calculating totals by hand, Excel does the math for you — instantly.
        </p>

        <p>
          It's a spreadsheet application made by Microsoft that helps people
          organize, calculate, analyze, and visualize data. Millions of
          students, shopkeepers, accountants, and companies use it every
          single day — from tracking pocket money to managing crores of
          rupees in a business.
        </p>

        <InfoBox>
          <p>
            Excel comes with Microsoft Office and Microsoft 365. You can use
            it on Windows, macOS, Android, iPhone, and even directly in a web
            browser — no installation needed.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Microsoft Excel Interface">

        <ImageCard
          src="/images/lessons/fundamentals/excel-interface.png"
          alt="Microsoft Excel Interface"
          caption="The Microsoft Excel workspace showing the Ribbon, Formula Bar, Worksheet, and Status Bar."
        />

      </LessonSection>

      {/* Why Learn Excel */}

      <LessonSection title="Why Should You Learn Excel?">

        <p>
          Imagine two people applying for the same job. One knows Excel, the
          other doesn't. The one who knows Excel can turn messy data into
          clear reports in minutes — that's why Excel is one of the most
          in-demand skills across almost every industry: finance, marketing,
          HR, sales, engineering, and education.
        </p>

        <TipBox>
          <p>
            Even basic Excel skills (SUM, AVERAGE, simple charts) can make
            you noticeably faster at your job and boost your resume.
          </p>
        </TipBox>

      </LessonSection>

      {/* Real World Applications */}

      <LessonSection title="Where is Excel Used in Real Life?">

        <p>
          You don't need to work in an office to use Excel. Here are simple,
          everyday examples:
        </p>

        <LessonTable
          headers={["Situation", "How Excel Helps"]}
          rows={[
            ["A student", "Tracking marks in each subject and calculating the total or average"],
            ["A shopkeeper", "Noting daily sales and finding which month sold the most"],
            ["A family", "Planning monthly household budget and expenses"],
            ["An HR manager", "Keeping records of employee attendance and salary"],
            ["A marketer", "Comparing which ad campaign got more clicks"],
            ["A business owner", "Building a dashboard to see profit and loss at a glance"],
          ]}
        />

      </LessonSection>

      {/* Workbook */}

      <LessonSection title="Workbook vs Worksheet">

        <p>
          This is one of the most confusing terms for beginners — here's an
          easy way to remember it:
        </p>

        <ExampleBox title="Think of a Workbook like a Notebook">
          <p>
            A <strong>Workbook</strong> is like an entire notebook — the full
            Excel file you save on your computer (example:{" "}
            <code>Sales_2026.xlsx</code>). A <strong>Worksheet</strong> is
            like a single page inside that notebook (example: a "January"
            sheet, a "February" sheet, and so on).
          </p>

          <LessonTable
            headers={["Workbook", "Worksheet"]}
            rows={[
              ["The complete Excel file", "One single sheet inside the file"],
              ["Can contain many worksheets", "Made up of rows and columns"],
              ["Saved as .xlsx", "Cannot exist without a workbook"],
            ]}
          />
        </ExampleBox>

      </LessonSection>

      {/* Example */}

      <LessonSection title="Simple Real-World Example">

        <p>
          Suppose you own a small shop and want to track how much you sold
          each month:
        </p>

        <LessonTable
          headers={["Month", "Sales"]}
          rows={[
            ["January", "₹50,000"],
            ["February", "₹63,000"],
            ["March", "₹71,000"],
          ]}
        />

        <p>
          Instead of adding these numbers on a calculator, Excel can
          automatically find the <strong>total</strong> sales, the{" "}
          <strong>average</strong> monthly sales, how much sales{" "}
          <strong>grew</strong> each month (in %), and even draw a{" "}
          <strong>chart</strong> so you can see the trend at a glance —
          all with a single formula.
        </p>

        <TipBox>
          <p>
            Example: typing <code>=SUM(B2:B4)</code> in a cell instantly adds
            up all three months' sales for you — no manual calculation
            needed.
          </p>
        </TipBox>

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "Microsoft Excel is a spreadsheet application — think of it as a smart, digital notebook.",
          "Data is stored in rows and columns, and the box where they meet is called a cell.",
          "Excel supports formulas, functions, charts, and tables to work with data.",
          "It's used everywhere — by students, shopkeepers, families, and big companies.",
          "A Workbook is the whole file; a Worksheet is one page inside it.",
          "Learning Excel is a valuable, practical skill for almost any career.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}