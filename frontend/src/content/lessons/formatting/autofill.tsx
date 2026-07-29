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
        question: "What is the small square at the bottom-right corner of a selected cell called?",
        options: ["Name Box", "Fill Handle", "Paste Special", "Formula Bar"],
        answer: 1,
        explanation:
            "The Fill Handle is the small square at the bottom-right corner of a selected cell, used to activate AutoFill.",
    },
    {
        question: "If cell A1 has 'Monday' and you drag the Fill Handle down, what will Excel fill in the next cells?",
        options: [
            "Monday repeated in every cell",
            "Tuesday, Wednesday, Thursday...",
            "Random days",
            "Blank cells",
        ],
        answer: 1,
        explanation:
            "Excel recognizes 'Monday' as part of a weekday pattern and automatically continues it — Tuesday, Wednesday, and so on.",
    },
    {
        question: "You type 10 in A1 and 20 in A2, select both, and drag the Fill Handle down. What does Excel do?",
        options: [
            "Repeats 10 and 20 randomly",
            "Continues the pattern: 30, 40, 50...",
            "Fills all cells with 10 only",
            "Shows an error",
        ],
        answer: 1,
        explanation:
            "Excel detects the difference between 10 and 20 (which is 10) and continues the number pattern by adding 10 each time.",
    },
    {
        question: "What happens if you drag the Fill Handle from a cell containing only the text 'Product'?",
        options: [
            "It creates Product 1, Product 2, Product 3...",
            "It repeats 'Product' in every cell",
            "It shows an error",
            "It clears the cell",
        ],
        answer: 1,
        explanation:
            "With plain text and no number or recognizable pattern, AutoFill simply repeats the same text in every cell.",
    },
    {
        question: "Which button appears after you finish dragging the Fill Handle, letting you choose how the data should be filled?",
        options: ["Paste Special", "Auto Fill Options", "Format Painter", "Quick Access Toolbar"],
        answer: 1,
        explanation:
            "The small 'Auto Fill Options' icon appears after dragging, letting you switch between Copy Cells, Fill Series, or Fill Formatting Only.",
    },
    {
        question: "A teacher wants roll numbers 1 to 50 filled automatically instead of typing each one. What's the fastest way?",
        options: [
            "Type all 50 numbers manually",
            "Type 1 and 2 in the first two cells, select both, then drag the Fill Handle down",
            "Copy and paste the same number 50 times",
            "Use Freeze Panes",
        ],
        answer: 1,
        explanation:
            "Typing the first two numbers to show the pattern (1, 2) and dragging the Fill Handle lets Excel continue the series automatically up to 50.",
    },
];

export default function AutoFill() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what AutoFill is and why it saves time.</li>
                    <li>Learn how to use the Fill Handle to complete patterns.</li>
                    <li>Fill numbers, dates, days, and months automatically.</li>
                    <li>Use Auto Fill Options to control exactly how data fills.</li>
                    <li>Avoid common mistakes while using AutoFill.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Imagine typing "January," "February," "March"... all the way to
                    "December" by hand. Or typing roll numbers 1 to 100 one by one.
                    That would take forever — and that's exactly the problem{" "}
                    <strong>AutoFill</strong> solves.
                </p>

                <p className="mt-3">
                    AutoFill lets Excel recognize a pattern from just one or two cells
                    and complete the rest automatically, saving huge amounts of time
                    on repetitive data entry.
                </p>

                <InfoBox>
                    <p>
                        Think of AutoFill like a smart assistant that finishes your
                        sentence once it understands where you're headed.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find AutoFill?">

                <ImageCard
                    src="/images/lessons/formatting/autofill-handle.png"
                    alt="Excel Fill Handle"
                    caption="The Fill Handle is the small square at the bottom-right corner of a selected cell."
                />

            </LessonSection>

            {/* What is autofill */}

            <LessonSection title="What is the Fill Handle?">

                <p>
                    Whenever you select a cell, notice the tiny square at its
                    bottom-right corner — that's the <strong>Fill Handle</strong>.
                    Clicking and dragging it is how you activate AutoFill.
                </p>

                <ExampleBox title="Simple Example">
                    <p>
                        Type <strong>"Monday"</strong> in cell A1. Click the Fill Handle
                        and drag it down to A5. Excel automatically fills in Tuesday,
                        Wednesday, Thursday, and Friday.
                    </p>
                </ExampleBox>

                <LessonTable
                    headers={["Cell", "Value"]}
                    rows={[
                        ["A1", "Monday"],
                        ["A2", "Tuesday"],
                        ["A3", "Wednesday"],
                        ["A4", "Thursday"],
                        ["A5", "Friday"],
                    ]}
                />

            </LessonSection>

            {/* Types of autofill */}

            <LessonSection title="What Can AutoFill Complete?">

                <p>
                    AutoFill isn't just for days of the week — it recognizes several
                    different types of patterns:
                </p>

                <LessonTable
                    headers={["Pattern Type", "You Type", "AutoFill Continues With"]}
                    rows={[
                        ["Days", "Monday", "Tuesday, Wednesday, Thursday..."],
                        ["Months", "January", "February, March, April..."],
                        ["Numbers (simple)", "1", "1, 1, 1... (repeats unless a second number is given)"],
                        ["Numbers (series)", "1, 2 (in two cells)", "3, 4, 5, 6..."],
                        ["Dates", "01-Jan-2026", "02-Jan-2026, 03-Jan-2026..."],
                        ["Text + Number", "Product 1", "Product 2, Product 3..."],
                    ]}
                />

                <TipBox>
                    <p>
                        If you only type one number and drag the Fill Handle, Excel
                        just repeats it. To create a series like 10, 20, 30, you need
                        to type the first <strong>two</strong> numbers so Excel can see
                        the pattern between them.
                    </p>
                </TipBox>

            </LessonSection>

            {/* How to use step by step */}

            <LessonSection title="How to Use AutoFill: Step by Step">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Type the starting value (or first two values for a number series)."],
                        ["2", "Select the cell(s) containing your starting value."],
                        ["3", "Hover over the bottom-right corner until you see a small cross (+)."],
                        ["4", "Click and drag down or across to fill the pattern."],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        Suppose you're preparing an attendance sheet and need roll
                        numbers 1 to 30. Type <strong>1</strong> in A2 and{" "}
                        <strong>2</strong> in A3. Select both cells, then drag the Fill
                        Handle down to A31 — Excel fills in the rest automatically.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Auto Fill Options */}

            <LessonSection title="Auto Fill Options">

                <p>
                    After you drag and release the Fill Handle, a small icon appears
                    near the filled cells. Clicking it opens{" "}
                    <strong>Auto Fill Options</strong>, giving you more control over
                    exactly how the data should fill.
                </p>

                <LessonTable
                    headers={["Option", "What It Does"]}
                    rows={[
                        ["Copy Cells", "Repeats the exact same value in every cell, ignoring any pattern"],
                        ["Fill Series", "Continues the pattern, like 1, 2, 3... (this is the default)"],
                        ["Fill Formatting Only", "Copies just the cell's color/style, without changing existing values"],
                        ["Fill Without Formatting", "Continues the pattern but ignores colors or styles"],
                    ]}
                />

                <ImageCard
                    src="/images/lessons/formatting/autofill-options.png"
                    alt="Auto Fill Options menu"
                    caption="Auto Fill Options lets you choose exactly how the dragged data should be filled."
                />

            </LessonSection>

            {/* Double click fill handle */}

            <LessonSection title="Quick Trick: Double-Click the Fill Handle">

                <p>
                    Instead of dragging manually, you can{" "}
                    <strong>double-click</strong> the Fill Handle when there's data in
                    the neighboring column. Excel automatically fills down to match the
                    length of that column.
                </p>

                <ExampleBox title="Example">
                    <p>
                        If column A has 100 employee names and you type a formula in
                        B1, double-clicking B1's Fill Handle instantly fills the formula
                        all the way down to B100 — matching column A exactly.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you work as a school clerk preparing a fee receipt book.
                    Instead of typing receipt numbers 1001, 1002, 1003... by hand for
                    500 students, you type just the first two receipt numbers and drag
                    the Fill Handle down — completing the entire list in seconds.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An accountant preparing monthly reports types "January" in the
                        header row, then drags the Fill Handle across to instantly get
                        February through December — no typing required.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Typing only one number and expecting a series instead of a repeat.</li>
                    <li>Dragging over existing data and accidentally overwriting it.</li>
                    <li>Forgetting to check Auto Fill Options when formatting looks wrong.</li>
                    <li>Not selecting both starting cells when a number pattern is needed.</li>
                    <li>Assuming AutoFill works the same for every kind of text.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <LessonSection title="Professional Tips">

                <TipBox>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Use two starting cells whenever you need a number series.</li>
                        <li>Double-click the Fill Handle to save time on long columns.</li>
                        <li>Check Auto Fill Options if the result doesn't look right.</li>
                        <li>Combine AutoFill with formulas to fill calculations down a column instantly.</li>
                        <li>Use Fill Without Formatting to avoid messing up existing cell colors.</li>
                    </ul>
                </TipBox>

            </LessonSection>

            {/* Summary */}

            <SummaryBox
                points={[
                    "AutoFill uses the Fill Handle to automatically complete patterns in a worksheet.",
                    "It can fill days, months, numbers, dates, and text-with-numbers.",
                    "Typing just one number repeats it; typing two numbers creates a series.",
                    "Auto Fill Options let you choose between copying, continuing a series, or filling formatting only.",
                    "Double-clicking the Fill Handle fills down automatically to match a neighboring column.",
                    "AutoFill saves huge amounts of time on repetitive data entry tasks.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}