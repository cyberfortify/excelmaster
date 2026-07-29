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
        question: "If you type 1000 in a cell and apply Currency format, what will it display as (in India)?",
        options: ["1000", "₹1,000.00", "1000.00%", "1,000 only"],
        answer: 1,
        explanation:
            "Currency format adds the currency symbol (₹) along with thousand separators and two decimal places by default.",
    },
    {
        question: "Does changing a cell's number format change the actual value stored in it?",
        options: [
            "Yes, it permanently changes the value",
            "No, it only changes how the value is displayed",
            "Yes, but only for percentages",
            "It deletes the original value",
        ],
        answer: 1,
        explanation:
            "Number formatting only changes how a value is displayed on screen — the actual underlying number stored in the cell never changes.",
    },
    {
        question: "If a cell has the value 0.25 and you apply Percentage format, what will it show?",
        options: ["0.25%", "25%", "2.5%", "250%"],
        answer: 1,
        explanation:
            "Percentage format multiplies the value by 100 and adds a % sign, so 0.25 becomes 25%.",
    },
    {
        question: "Which shortcut opens the Format Cells dialog for full control over number formatting?",
        options: ["Ctrl + 1", "Ctrl + 5", "Ctrl + Shift + %", "Ctrl + N"],
        answer: 0,
        explanation:
            "Ctrl + 1 opens Format Cells, where the Number tab has every formatting option, including Custom formats.",
    },
    {
        question: "Which quick shortcut applies Percentage format directly to selected cells?",
        options: ["Ctrl + Shift + %", "Ctrl + Shift + $", "Ctrl + Shift + #", "Ctrl + P"],
        answer: 0,
        explanation:
            "Ctrl + Shift + % instantly formats the selected cells as percentages, without opening any menu.",
    },
    {
        question: "An accountant wants negative expenses to automatically appear in red with brackets, like (500), instead of -500. What's the best way to achieve this?",
        options: [
            "Manually retype negative numbers with brackets",
            "Use a Custom Number Format in Format Cells",
            "Use Wrap Text",
            "Use Freeze Panes",
        ],
        answer: 1,
        explanation:
            "Custom Number Format lets you define exactly how positive, negative, and zero values should display — including color and brackets — without changing the actual data.",
    },
];

export default function NumberFormats() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Number Formatting is and why it never changes actual data.</li>
                    <li>Learn common formats: Currency, Percentage, Comma, and Decimal.</li>
                    <li>Use the Format Cells dialog for full control.</li>
                    <li>Create simple Custom Number Formats.</li>
                    <li>Learn shortcuts and tricks to format numbers faster.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Type <strong>50000</strong> into a cell, and it just sits there
                    as a plain number. But apply <strong>Currency format</strong>,
                    and it instantly becomes <strong>₹50,000.00</strong> — far easier
                    to read in a financial report. This transformation, without
                    changing the actual number at all, is what{" "}
                    <strong>Number Formatting</strong> does.
                </p>

                <p className="mt-3">
                    Number Formatting controls how values are <em>displayed</em> —
                    as currency, percentages, dates, or with specific decimal
                    places — while the real number behind the scenes stays exactly
                    the same.
                </p>

                <InfoBox>
                    <p>
                        This is one of the most important ideas in Excel: formatting
                        is like a costume for your data — it changes the look, never
                        the actual value underneath.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Number Formats?">

                <ImageCard
                    src="/images/lessons/formatting/number-format-home-tab.png"
                    alt="Number Format dropdown on the Home tab"
                    caption="The Number Format dropdown and quick-access icons are in the Number group on the Home tab."
                />

            </LessonSection>

            {/* Common formats */}

            <LessonSection title="Common Number Formats">

                <p>
                    Excel offers several ready-made formats for the most common
                    types of data:
                </p>

                <LessonTable
                    headers={["Format", "Input", "Displayed As"]}
                    rows={[
                        ["General", "1500", "1500 (Excel's default, no special styling)"],
                        ["Number", "1500", "1,500.00 (adds decimals and thousand separator)"],
                        ["Currency", "1500", "₹1,500.00"],
                        ["Accounting", "1500", "₹ 1,500.00 (aligns currency symbols in a column)"],
                        ["Percentage", "0.25", "25%"],
                        ["Comma Style", "1500", "1,500.00 (like Number, without the currency symbol)"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        A sales figure of 250000 looks far more professional as{" "}
                        <strong>₹2,50,000.00</strong> once Currency format is applied,
                        even though the actual stored value is still just 250000.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Applying formats */}

            <LessonSection title="Applying a Number Format">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cell or range containing numbers."],
                        ["2", "Open the Number Format dropdown on the Home tab (it usually shows 'General')."],
                        ["3", "Choose a format like Currency, Percentage, or Number."],
                    ]}
                />

                <TipBox>
                    <p>
                        For quicker access, use the small icons right next to the
                        dropdown — they apply Currency, Percentage, or Comma style in
                        a single click, without opening the full list.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Decimal places */}

            <LessonSection title="Controlling Decimal Places">

                <p>
                    Two small icons next to the Number Format dropdown let you add
                    or remove decimal places without retyping any values.
                </p>

                <LessonTable
                    headers={["Icon", "What It Does", "Example"]}
                    rows={[
                        ["Increase Decimal", "Adds one more decimal place", "50 → 50.0 → 50.00"],
                        ["Decrease Decimal", "Removes one decimal place", "50.00 → 50.0 → 50"],
                    ]}
                />

            </LessonSection>

            {/* Format cells dialog */}

            <LessonSection title="Format Cells: Full Control Over Numbers">

                <p>
                    For more precise control than the Ribbon offers — like choosing
                    exactly how negative numbers appear — open the{" "}
                    <strong>Format Cells</strong> dialog.
                </p>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cells you want to format."],
                        ["2", "Press Ctrl + 1 to open Format Cells."],
                        ["3", "Click the Number tab."],
                        ["4", "Choose a category (like Currency or Percentage) and adjust decimal places, symbols, or negative number style."],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        An accountant wants negative expenses to show in red with
                        brackets, like <strong>(500)</strong>, instead of{" "}
                        <strong>-500</strong>. Opening Format Cells → Number →
                        Currency reveals a "Negative numbers" section with exactly
                        this style available as a built-in option.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Custom formats */}

            <LessonSection title="Custom Number Formats (Introduction)">

                <p>
                    When none of the built-in formats fit exactly what you need,
                    Excel lets you build your own using the <strong>Custom</strong>{" "}
                    category inside Format Cells.
                </p>

                <LessonTable
                    headers={["Custom Code", "What It Displays"]}
                    rows={[
                        ["0\"kg\"", "Adds 'kg' after a number, like 50kg"],
                        ["0.00\"%\"", "Adds a % symbol manually with two decimals"],
                        ["#,##0", "Adds thousand separators without any decimals"],
                        ["+0;-0", "Shows a + sign before positive numbers and - before negative ones"],
                    ]}
                />

                <InfoBox>
                    <p>
                        Custom formats can feel advanced at first — start with the
                        built-in options, and explore Custom only once you need
                        something very specific, like adding units (kg, pcs, hrs).
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you're preparing a company's quarterly report. Revenue
                    figures get Currency format for clarity, growth rates get
                    Percentage format to instantly show performance, and product
                    weights get a Custom format showing "kg" — all without changing
                    a single actual number in the sheet.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        A sales manager applies Percentage format to a "Target
                        Achieved" column, instantly turning raw decimal values like
                        0.87 into a clear, readable 87% across the entire report.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Shortcuts and tricks */}

            <LessonSection title="Excel Tricks & Shortcuts for Number Formats">

                <LessonTable
                    headers={["Shortcut", "What It Does"]}
                    rows={[
                        ["Ctrl + 1", "Opens Format Cells → Number tab for full control"],
                        ["Ctrl + Shift + %", "Applies Percentage format instantly"],
                        ["Ctrl + Shift + $", "Applies Currency format instantly"],
                        ["Ctrl + Shift + #", "Applies Date format instantly"],
                        ["Ctrl + Shift + ~", "Resets to General format, removing special formatting"],
                        ["Ctrl + Shift + !", "Applies Comma Style (Number format with two decimals)"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> These Ctrl + Shift shortcuts work
                        instantly on selected cells — much faster than clicking
                        through the Number Format dropdown every time.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Typing the % symbol manually along with formatting Percentage, causing double conversion (25% becoming 2500%).</li>
                    <li>Assuming formatting changes the actual value used in calculations — it never does.</li>
                    <li>Forgetting to check decimal places, leading to overly long or misleadingly rounded numbers.</li>
                    <li>Using General format for financial reports instead of Currency or Accounting.</li>
                    <li>Not using Custom Format when a specific unit (kg, %, hrs) needs to appear consistently.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Use Accounting format instead of Currency when aligning multiple currency values in a column.</li>
                    <li>Keep decimal places consistent across a report — usually 0 or 2, not mixed.</li>
                    <li>Use Ctrl + Shift + % for instant percentage formatting during data entry.</li>
                    <li>Explore Custom Format once you're comfortable, for units like kg, hrs, or pcs.</li>
                    <li>Always double-check that a formatted percentage or currency value is calculating correctly, not just displaying correctly.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Number Formatting changes how a value is displayed, never the actual stored value.",
                    "Common formats include Currency, Percentage, Accounting, and Comma Style.",
                    "Format Cells (Ctrl + 1) gives full control, including how negative numbers appear.",
                    "Custom Number Formats let you add units or symbols, like kg or %, precisely.",
                    "Shortcuts like Ctrl + Shift + % and Ctrl + Shift + $ apply formats instantly.",
                    "Always keep decimal places and formats consistent across a report for a professional look.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}