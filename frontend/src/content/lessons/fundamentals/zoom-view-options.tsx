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
    question: "Where can you find the Zoom slider for quick zooming in Excel?",
    options: [
      "Top-left corner near the Ribbon",
      "Bottom-right corner of the screen, next to the Status Bar",
      "Inside the Formulas tab",
      "Inside the Name Box",
    ],
    answer: 1,
    explanation:
      "The Zoom slider sits at the bottom-right of the Excel window, right next to the Status Bar, for quick access anytime.",
  },
  {
    question: "Which Ribbon tab has the full Zoom and View options, like Page Layout view and Freeze Panes?",
    options: ["Home", "View", "Insert", "Data"],
    answer: 1,
    explanation:
      "The View tab holds all display-related tools, including Zoom, Page Layout view, Normal view, and Freeze Panes.",
  },
  {
    question: "Which view is best when you're getting ready to print a worksheet and want to see exactly how each page will look?",
    options: ["Normal View", "Page Layout View", "Split View", "Zoom 400%"],
    answer: 1,
    explanation:
      "Page Layout View shows page breaks, margins, and headers/footers exactly as they'll appear when printed.",
  },
  {
    question: "What does 'Zoom to Selection' do?",
    options: [
      "Deletes everything except the selected cells",
      "Automatically zooms in or out so the selected range fills the visible screen",
      "Prints only the selected cells",
      "Freezes the selected cells",
    ],
    answer: 1,
    explanation:
      "Zoom to Selection adjusts the zoom level automatically so that whatever range you've selected fits perfectly on your screen.",
  },
  {
    question: "A user has very small handwriting-like data and is struggling to read it. What's the quickest fix?",
    options: [
      "Delete the data and retype it bigger",
      "Increase the Zoom percentage using the slider or View tab",
      "Use Freeze Panes",
      "Switch worksheets",
    ],
    answer: 1,
    explanation:
      "Increasing the Zoom level (e.g., from 100% to 150%) makes everything on screen appear larger, without changing the actual data or font size.",
  },
  {
    question: "Which view is best for everyday data entry and formula work, without any page break lines showing?",
    options: ["Page Layout View", "Page Break Preview", "Normal View", "Print Preview"],
    answer: 2,
    explanation:
      "Normal View is Excel's default, distraction-free view for regular data entry and calculations, without showing print-related page divisions.",
  },
];

export default function ZoomAndViewOptions() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Learn how to zoom in and out of a worksheet.</li>
          <li>Understand the different View modes: Normal, Page Layout, and Page Break Preview.</li>
          <li>Know when to use each view for different tasks.</li>
          <li>Learn the "Zoom to Selection" shortcut for quick focus on specific data.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="Why Zoom & View Options Matter">

        <p>
          Not everyone works the same way — someone on a large monitor might
          want to see more of their sheet at once, while someone on a small
          laptop screen might need to zoom in just to read the numbers
          clearly. Excel's Zoom and View options let you adjust exactly how
          your worksheet appears, without changing the actual data.
        </p>

        <InfoBox>
          <p>
            Zooming only changes how things <em>look</em> on your screen —
            it has no effect on the actual font size stored in the cell or
            how the sheet prints.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Zoom Slider and View Tab">

        <ImageCard
          src="/images/lessons/fundamentals/excel-zoom-view-options.png"
          alt="Excel Zoom slider at the bottom right and View tab options"
          caption="The Zoom slider sits at the bottom-right, while full view options live in the View tab."
        />

      </LessonSection>

      {/* Zoom basics */}

      <LessonSection title="Zooming In and Out">

        <p>
          There are two quick ways to change your zoom level:
        </p>

        <LessonTable
          headers={["Method", "How to Use It"]}
          rows={[
            ["Zoom Slider", "Drag the slider at the bottom-right corner of the screen, or click the + and – buttons"],
            ["View Tab → Zoom", "Click 'Zoom' on the View tab for exact percentage options (like 75%, 100%, 200%)"],
          ]}
        />

        <ExampleBox title="Real-Life Example">
          <p>
            A student reviewing a big project sheet on a small laptop
            screen might zoom out to 70% to see the whole layout at once —
            then zoom back to 100% when it's time to type numbers
            accurately.
          </p>
        </ExampleBox>

      </LessonSection>

      {/* Zoom to selection */}

      <LessonSection title="Zoom to Selection">

        <p>
          Instead of manually adjusting the zoom percentage, you can select
          a specific range of cells and let Excel zoom automatically to fit
          exactly that selection on your screen.
        </p>

        <TipBox>
          <p>
            Select your data range, then go to View → Zoom to Selection —
            perfect for quickly focusing on one part of a large sheet, like
            a single month's sales table.
          </p>
        </TipBox>

      </LessonSection>

      {/* View modes */}

      <LessonSection title="The Three View Modes">

        <p>
          Beyond zooming, Excel offers three different ways to{" "}
          <em>view</em> your worksheet, each suited for a different task:
        </p>

        <LessonTable
          headers={["View Mode", "What It Shows", "Best Used For"]}
          rows={[
            [
              "Normal View",
              "The standard, distraction-free grid",
              "Everyday data entry, formulas, and calculations",
            ],
            [
              "Page Layout View",
              "Shows margins, headers, footers, and page boundaries",
              "Designing a worksheet exactly how it will look printed",
            ],
            [
              "Page Break Preview",
              "Shows where one printed page ends and the next begins",
              "Adjusting what fits on each page before printing a large report",
            ],
          ]}
        />

      </LessonSection>

      {/* Practical scenario */}

      <LessonSection title="Quick Scenario: Choosing the Right View">

        <p>
          Let's revisit our shopkeeper, who has a year of sales data and
          needs to print a monthly report for their accountant.
        </p>

        <LessonTable
          headers={["Task", "Best View/Zoom Option"]}
          rows={[
            ["Entering daily sales quickly", "Normal View, 100% zoom"],
            ["Checking how the report will look on paper", "Page Layout View"],
            ["Fixing where pages break before printing", "Page Break Preview"],
            ["Reading small numbers clearly on a laptop", "Increase Zoom to 150%"],
          ]}
        />

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "The Zoom slider (bottom-right) lets you quickly zoom in or out without changing your data.",
          "Zoom to Selection automatically fits a chosen range perfectly on your screen.",
          "Normal View is best for everyday data entry and formulas.",
          "Page Layout View shows exactly how your sheet will look when printed.",
          "Page Break Preview helps you control what fits on each printed page.",
          "Zooming and switching views only changes appearance — it never affects your actual data.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}