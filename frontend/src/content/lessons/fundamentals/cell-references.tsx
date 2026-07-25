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
    question: "What is a Relative Cell Reference?",
    options: [
      "A reference that never changes when copied",
      "A reference that automatically adjusts when copied to other cells",
      "A reference to another workbook",
      "A reference that only works with text",
    ],
    answer: 1,
    explanation:
      "A relative reference (like A1) automatically shifts based on where you copy the formula — it's the default type in Excel.",
  },
  {
    question: "Which symbol is used to 'lock' a row or column in an Absolute Reference?",
    options: ["#", "$", "%", "&"],
    answer: 1,
    explanation:
      "The dollar sign ($) is placed before the column letter and/or row number to lock it, like $B$2.",
  },
  {
    question: "What does the reference $B$2 mean?",
    options: [
      "Only the column B is locked",
      "Only row 2 is locked",
      "Both column B and row 2 are locked — it never changes when copied",
      "It refers to two different cells",
    ],
    answer: 2,
    explanation:
      "When both the column and row have a $ sign, the entire reference is absolute and stays fixed no matter where you copy the formula.",
  },
  {
    question: "In a Mixed Reference like $B2, what stays locked when copied?",
    options: ["Only the row (2)", "Only the column (B)", "Both column and row", "Neither — it behaves like a normal reference"],
    answer: 1,
    explanation:
      "In $B2, the $ before B locks only the column, while the row number (2) is free to change when copied down or across.",
  },
  {
    question: "A shopkeeper wants to calculate tax for every product using one fixed tax rate cell (say B1), while product prices change in each row. What type of reference should they use for B1 in the formula?",
    options: ["Relative reference (B1)", "Absolute reference ($B$1)", "Text reference", "No reference needed"],
    answer: 1,
    explanation:
      "Since the tax rate cell should stay fixed for every row while other parts of the formula change, an absolute reference ($B$1) is needed.",
  },
  {
    question: "If you copy a formula containing A1 (relative reference) from cell C1 to cell C2, what happens?",
    options: [
      "It stays exactly as A1",
      "It automatically becomes A2",
      "It becomes B1",
      "It causes an error",
    ],
    answer: 1,
    explanation:
      "Since C1 moved down one row to C2, the relative reference A1 also shifts down one row, becoming A2.",
  },
];

export default function CellReferences() {
  return (
    <>
      {/* What You'll Learn */}

      <LessonSection title="What You'll Learn">

        <ul className="list-disc space-y-3 pl-6">
          <li>Understand what a cell reference is and why it matters in formulas.</li>
          <li>Learn the difference between Relative, Absolute, and Mixed references.</li>
          <li>Know when to use the $ symbol and why.</li>
          <li>See a real-world example of why locking a reference is useful.</li>
        </ul>

      </LessonSection>

      {/* Introduction */}

      <LessonSection title="Quick Recap: What is a Cell Reference?">

        <p>
          In the last lesson, we learned that every cell has an address,
          like B4 or C5. A <strong>cell reference</strong> is simply using
          that address inside a formula — like{" "}
          <code>=B4+C5</code> — instead of typing the actual numbers.
        </p>

        <InfoBox>
          <p>
            The real power of cell references shows up when you{" "}
            <strong>copy a formula</strong> to other cells — and that's
            exactly what this lesson is about.
          </p>
        </InfoBox>

      </LessonSection>

      {/* Image */}

      <LessonSection title="Types of Cell References">

        <ImageCard
          src="/images/lessons/fundamentals/excel-cell-references.png"
          alt="Excel formulas showing relative, absolute, and mixed cell references"
          caption="The $ symbol determines whether a reference moves or stays fixed when copied."
        />

      </LessonSection>

      {/* Relative reference */}

      <LessonSection title="1. Relative Reference (Default)">

        <p>
          This is the type of reference Excel uses by default — like{" "}
          <strong>A1</strong> or <strong>B4</strong>, with no $ symbol. When
          you copy a formula to another cell, a relative reference{" "}
          <strong>automatically shifts</strong> to match the new position.
        </p>

        <ExampleBox title="Relative Reference Example">
          <p>
            If cell C1 has the formula <code>=A1+B1</code>, and you copy it
            down to C2, Excel automatically changes it to{" "}
            <code>=A2+B2</code> — it "moves" along with the formula.
          </p>
        </ExampleBox>

      </LessonSection>

      {/* Absolute reference */}

      <LessonSection title="2. Absolute Reference (Locked)">

        <p>
          Sometimes you don't want a reference to change when copied — for
          example, a tax rate or a fixed conversion rate that should apply
          to every row. This is where the <strong>$</strong> symbol comes
          in.
        </p>

        <ExampleBox title="Absolute Reference Example">
          <p>
            Writing <strong>$B$1</strong> locks both the column (B) and the
            row (1). No matter where you copy the formula, it will always
            point to cell B1.
          </p>
        </ExampleBox>

        <TipBox>
          <p>
            Shortcut: after typing a cell reference in a formula, press{" "}
            <strong>F4</strong> to quickly add the $ signs, instead of
            typing them manually.
          </p>
        </TipBox>

      </LessonSection>

      {/* Mixed reference */}

      <LessonSection title="3. Mixed Reference (Partially Locked)">

        <p>
          A mixed reference locks <strong>only the row or only the
          column</strong>, not both.
        </p>

        <LessonTable
          headers={["Reference", "What's Locked", "What Changes When Copied"]}
          rows={[
            ["$B2", "Column B is locked", "Row number (2) can still change"],
            ["B$2", "Row 2 is locked", "Column letter (B) can still change"],
          ]}
        />

      </LessonSection>

      {/* Real world example */}

      <LessonSection title="Real-Life Example: Calculating Tax">

        <p>
          Let's say a shopkeeper has product prices in column B, and a
          fixed 5% tax rate stored once in cell <strong>E1</strong>. They
          want to calculate tax for every product:
        </p>

        <LessonTable
          headers={["", "A (Product)", "B (Price)", "C (Tax Amount)"]}
          rows={[
            ["Row 1", "Product", "Price", "=B2*$E$1"],
            ["Row 2", "Notebook", "₹50", "=B2*$E$1"],
            ["Row 3", "Pen", "₹10", "=B3*$E$1"],
          ]}
        />

        <p>
          Notice how <strong>B2</strong> changes to <strong>B3</strong> as
          the formula moves down each row (relative), but{" "}
          <strong>$E$1</strong> stays exactly the same every time
          (absolute) — because the tax rate shouldn't change.
        </p>

      </LessonSection>

      {/* Summary */}

      <SummaryBox
        points={[
          "A cell reference is a cell's address (like B4) used inside a formula.",
          "Relative references (A1) automatically shift when the formula is copied.",
          "Absolute references ($A$1) stay fixed no matter where the formula is copied.",
          "Mixed references ($A1 or A$1) lock only the column or only the row.",
          "Pressing F4 after selecting a cell reference quickly toggles between these types.",
          "Absolute references are especially useful for fixed values like tax rates or conversion rates.",
        ]}
      />

      {/* Practice */}

      <PracticeCard
        questions={questions}
      />
    </>
  );
}