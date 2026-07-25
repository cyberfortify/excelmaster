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
    question: "Where is the Quick Access Toolbar usually located?",
    options: [
      "At the bottom of the screen",
      "Above or below the Ribbon, near the top-left corner",
      "On the right side of the worksheet",
      "Inside the Formulas tab",
    ],
    answer: 1,
    explanation:
      "The Quick Access Toolbar (QAT) sits near the top-left of the Excel window, either above or below the Ribbon.",
  },
  {
    question: "Which of these is a default tool usually found on the Quick Access Toolbar?",
    options: ["Insert Chart", "Save", "Sort Data", "Page Layout"],
    answer: 1,
    explanation:
      "Save, Undo, and Redo are the common default tools that appear on the Quick Access Toolbar out of the box.",
  },
  {
    question: "What is the main advantage of the Quick Access Toolbar?",
    options: [
      "It replaces the need for the Ribbon entirely",
      "It gives one-click access to your most-used tools, without switching tabs",
      "It only works when printing",
      "It automatically saves your file every second",
    ],
    answer: 1,
    explanation:
      "The QAT stays visible no matter which Ribbon tab you're on, so you can reach your favorite tools in a single click.",
  },
  {
    question: "Can you customize the Quick Access Toolbar by adding your own tools?",
    options: [
      "No, it is fixed and cannot be changed",
      "Yes, you can add or remove tools using the dropdown arrow next to it",
      "Only Microsoft can change it",
      "Only in the mobile app",
    ],
    answer: 1,
    explanation:
      "Clicking the small dropdown arrow next to the Quick Access Toolbar lets you add or remove tools like Print, Spell Check, or Quick Print.",
  },
  {
    question: "If you're doing a task repeatedly, like printing daily, what's the smart thing to do?",
    options: [
      "Open the Insert tab every time",
      "Pin the Print tool to the Quick Access Toolbar",
      "Restart Excel each time",
      "Use the Status Bar",
    ],
    answer: 1,
    explanation:
      "Pinning frequently used tools to the QAT saves time, since you no longer need to search through Ribbon tabs repeatedly.",
  },
];

export default function QuickAccessToolbar() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Understand what the Quick Access Toolbar (QAT) is.</li>
          <li>Learn where it's located and what tools it usually has.</li>
          <li>Know how to customize it by adding your own frequently used tools.</li>
          <li>Understand why it saves time compared to using the Ribbon alone.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="What is the Quick Access Toolbar?">

        <p>
          Imagine you're cooking, and instead of walking to a different
          drawer every time you need a spoon, you keep your most-used spoon,
          knife, and spatula right next to the stove. The{" "}
          <strong>Quick Access Toolbar (QAT)</strong> works exactly like
          this — it keeps your favorite Excel tools within one click,
          without needing to switch Ribbon tabs.
        </p>

        <InfoBox>
          <p>
            The Quick Access Toolbar is small, but it's one of the biggest
            time-savers once you customize it to your own workflow.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Where is the Quick Access Toolbar?">

        <ImageCard
          src="/images/lessons/fundamentals/excel-quick-access-toolbar.png"
          alt="Excel Quick Access Toolbar location"
          caption="The Quick Access Toolbar appears at the top-left corner, above or below the Ribbon."
        />

        <p>
          By default, it sits right next to the Excel logo, above the
          Ribbon. It stays visible no matter which tab (Home, Insert,
          Formulas...) you're currently on.
        </p>

      </LessonSection>

      {/* Default tools */}

      <LessonSection title="Default Tools on the Quick Access Toolbar">

        <p>
          When you open Excel for the first time, the QAT already comes with
          a few basic tools:
        </p>

        <LessonTable
          headers={["Default Tool", "What It Does", "Everyday Example"]}
          rows={[
            [
              "Save",
              "Saves your current workbook",
              "Clicking it after finishing your monthly budget sheet",
            ],
            [
              "Undo",
              "Reverses your last action",
              "Accidentally deleted a row? Undo brings it right back",
            ],
            [
              "Redo",
              "Re-applies an action you just undid",
              "Changed your mind after undoing? Redo restores it",
            ],
          ]}
        />

      </LessonSection>

      {/* Customizing */}

      <LessonSection title="Customizing the Quick Access Toolbar">

        <p>
          The real power of the QAT is that you're not stuck with just the
          default three tools. You can add the tools <em>you</em> use most.
        </p>

        <ExampleBox title="How to Add a Tool to the QAT">
          <p>
            Click the small dropdown arrow (▼) at the end of the Quick
            Access Toolbar. A list of common tools appears — like Print,
            Quick Print, Spelling, and New. Simply click any tool to pin it
            permanently to the toolbar.
          </p>
        </ExampleBox>

        <TipBox>
          <p>
            You can also right-click any button inside the Ribbon (like
            "Bold" or "Insert Chart") and choose{" "}
            <em>"Add to Quick Access Toolbar"</em> — a shortcut most
            beginners don't know about.
          </p>
        </TipBox>

      </LessonSection>

      {/* Practical scenario */}

      <LessonSection title="Quick Scenario: Should You Add It to the QAT?">

        <p>
          Let's go back to our shopkeeper from earlier lessons. They print
          their sales report every single day before closing the shop.
          Instead of clicking Page Layout → Print every time, they can pin
          the <strong>Print</strong> tool to their Quick Access Toolbar —
          turning a 3-click task into a 1-click task.
        </p>

        <LessonTable
          headers={["Task Frequency", "Recommended Action"]}
          rows={[
            ["Used many times a day (e.g., Save, Print)", "Pin to Quick Access Toolbar"],
            ["Used once in a while (e.g., Insert Shape)", "Leave it in the Ribbon"],
          ]}
        />

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "The Quick Access Toolbar (QAT) sits near the top-left, above or below the Ribbon.",
          "It stays visible on every tab, giving one-click access to key tools.",
          "By default, it includes Save, Undo, and Redo.",
          "You can customize it using the dropdown arrow or by right-clicking any Ribbon tool.",
          "Pinning your most-used tools to the QAT saves time on repeated tasks.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}