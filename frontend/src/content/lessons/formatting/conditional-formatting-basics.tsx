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
        question: "What does Conditional Formatting do in Excel?",
        options: [
            "Deletes cells that meet a condition",
            "Automatically changes a cell's formatting based on its value or a rule",
            "Sorts data automatically",
            "Freezes rows and columns",
        ],
        answer: 1,
        explanation:
            "Conditional Formatting applies formatting — like color, icons, or bars — automatically to cells that meet a rule you set, without manual selection.",
    },
    {
        question: "Which Ribbon tab contains Conditional Formatting?",
        options: ["Insert", "Home", "View", "Page Layout"],
        answer: 1,
        explanation:
            "Conditional Formatting is found in the Styles group on the Home tab, right next to Cell Styles.",
    },
    {
        question: "You want every cell with a value greater than 100 to turn green automatically. Which built-in rule type would you use?",
        options: ["Data Bars", "Highlight Cells Rules → Greater Than", "Icon Sets", "Color Scales"],
        answer: 1,
        explanation:
            "Highlight Cells Rules → Greater Than lets you set a threshold value, and Excel automatically formats every cell exceeding it.",
    },
    {
        question: "What do Data Bars visually represent inside a cell?",
        options: [
            "A colored bar whose length is proportional to the cell's value",
            "A percentage symbol",
            "The cell's formula",
            "A border around the cell",
        ],
        answer: 0,
        explanation:
            "Data Bars fill each cell with a bar whose length reflects how large or small its value is compared to others in the range — like a mini bar chart inside the cell.",
    },
    {
        question: "If the underlying value in a conditionally formatted cell changes, what happens to its formatting?",
        options: [
            "It stays exactly the same forever",
            "It automatically updates to reflect the new value against the rule",
            "The formatting is deleted",
            "You must reapply the rule manually every time",
        ],
        answer: 1,
        explanation:
            "Conditional Formatting is dynamic — as soon as a value changes, Excel automatically re-evaluates the rule and updates the formatting instantly.",
    },
    {
        question: "A sales manager wants every cell below the monthly target to automatically turn red, without manually checking each number. What's the best tool?",
        options: [
            "Manually check and color each cell",
            "Conditional Formatting with a 'Less Than' rule set to the target value",
            "Use Freeze Panes",
            "Use Format Painter",
        ],
        answer: 1,
        explanation:
            "Conditional Formatting with a 'Less Than' rule automatically colors every underperforming cell red, and keeps updating as new data comes in.",
    },
];

export default function ConditionalFormattingBasics() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Conditional Formatting is and how it's different from manual formatting.</li>
                    <li>Learn to use Highlight Cells Rules for simple conditions.</li>
                    <li>Use Data Bars, Color Scales, and Icon Sets to visualize data.</li>
                    <li>Understand how conditional formatting updates automatically.</li>
                    <li>Learn how to clear or manage existing rules.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Earlier, we saw how Fill Color and Font Color can highlight
                    important values — but manually checking and coloring hundreds
                    of cells one by one is slow, and breaks the moment your data
                    changes. <strong>Conditional Formatting</strong> solves this by
                    letting Excel automatically color, highlight, or mark cells
                    based on a rule you set just once.
                </p>

                <p className="mt-3">
                    Instead of you deciding which cells look "good" or "bad,"
                    Conditional Formatting constantly checks your data and updates
                    the formatting on its own — even as numbers change.
                </p>

                <InfoBox>
                    <p>
                        Think of Conditional Formatting as a rule you set once —
                        "if this happens, format it like this" — and Excel keeps
                        applying that rule automatically, forever.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Conditional Formatting?">

                <ImageCard
                    src="/images/lessons/formatting/conditional-formatting-menu.png"
                    alt="Conditional Formatting menu on the Home tab"
                    caption="Conditional Formatting is in the Styles group on the Home tab, next to Cell Styles."
                />

            </LessonSection>

            {/* Manual vs conditional */}

            <LessonSection title="Manual Formatting vs Conditional Formatting">

                <LessonTable
                    headers={["Manual Formatting", "Conditional Formatting"]}
                    rows={[
                        ["You select and color each cell yourself", "You set a rule once, and Excel applies it automatically"],
                        ["Doesn't update if the value changes", "Automatically updates when values change"],
                        ["Practical for a handful of cells", "Practical for hundreds or thousands of cells"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        A sales sheet has 500 rows. Manually coloring every cell
                        below target red would take forever, and you'd have to redo
                        it whenever numbers change. A single Conditional Formatting
                        rule does this instantly, and keeps it updated automatically.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Highlight cells rules */}

            <LessonSection title="Highlight Cells Rules">

                <p>
                    The simplest type of Conditional Formatting compares each cell
                    to a value or condition you specify.
                </p>

                <LessonTable
                    headers={["Rule", "Example Use"]}
                    rows={[
                        ["Greater Than", "Highlight sales above ₹50,000 in green"],
                        ["Less Than", "Highlight expenses below budget in blue"],
                        ["Between", "Highlight scores between 60 and 80 in yellow"],
                        ["Equal To", "Highlight cells that exactly match 'Pending'"],
                        ["Text that Contains", "Highlight any cell containing the word 'Urgent'"],
                        ["Duplicate Values", "Highlight repeated entries, like duplicate employee IDs"],
                    ]}
                />

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the range of cells to check."],
                        ["2", "Go to Home → Conditional Formatting → Highlight Cells Rules."],
                        ["3", "Choose a rule type, like 'Greater Than.'"],
                        ["4", "Enter the value and pick a formatting style, then click OK."],
                    ]}
                />

            </LessonSection>

            {/* Data bars color scales icon sets */}

            <LessonSection title="Data Bars, Color Scales, and Icon Sets">

                <p>
                    Beyond simple highlighting, Excel offers three visual styles
                    that turn a column of numbers into an instant, readable
                    picture.
                </p>

                <LessonTable
                    headers={["Type", "What It Looks Like", "Best For"]}
                    rows={[
                        ["Data Bars", "A colored bar inside each cell, sized by value", "Comparing sales figures at a glance, like a mini bar chart"],
                        ["Color Scales", "A gradient from one color to another based on value", "Spotting highs and lows across a large range, like a heat map"],
                        ["Icon Sets", "Small icons like arrows or traffic lights based on value", "Showing performance status — up/down arrows or red/yellow/green circles"],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        A regional sales report with 20 rows uses{" "}
                        <strong>Data Bars</strong> on the "Revenue" column — instantly,
                        the highest-performing regions show the longest bars, without
                        reading a single number.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Automatic updating */}

            <LessonSection title="Why It's Called 'Conditional': Automatic Updates">

                <p>
                    The real strength of Conditional Formatting is that it's{" "}
                    <em>alive</em> — it constantly re-checks your data, not just
                    once, but every time a value changes.
                </p>

                <ExampleBox title="Example">
                    <p>
                        A "Less Than 50" rule marks low stock items in red. If a
                        product's stock is updated from 30 to 80, its cell
                        automatically turns back to normal — no manual reformatting
                        needed.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Managing rules */}

            <LessonSection title="Managing and Clearing Rules">

                <p>
                    As you apply more rules, it helps to know how to review or
                    remove them.
                </p>

                <LessonTable
                    headers={["Action", "How to Do It"]}
                    rows={[
                        ["View all active rules", "Home → Conditional Formatting → Manage Rules"],
                        ["Edit an existing rule", "Manage Rules → select the rule → Edit Rule"],
                        ["Clear rules from selected cells", "Conditional Formatting → Clear Rules → Clear Rules from Selected Cells"],
                        ["Clear rules from the entire sheet", "Conditional Formatting → Clear Rules → Clear Rules from Entire Sheet"],
                    ]}
                />

                <TipBox>
                    <p>
                        If a sheet looks unexpectedly colored and you're not sure
                        why, check <strong>Manage Rules</strong> first — there's
                        likely a forgotten Conditional Formatting rule still active.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you're an inventory manager tracking stock levels for
                    200 products. A Conditional Formatting rule marks any item below
                    its reorder point in red. As stock naturally rises and falls
                    each day, the formatting keeps itself updated automatically —
                    instantly showing which products need restocking, without
                    anyone manually checking every row.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An HR team uses Icon Sets on a "Performance Score" column —
                        green circles for high scores, yellow for average, and red
                        for low — letting managers scan an entire department's
                        performance in seconds.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Applying rules to the entire column instead of just the data range, wasting processing and causing confusion.</li>
                    <li>Forgetting existing rules are still active, leading to unexpected colors after new data is entered.</li>
                    <li>Using too many different Conditional Formatting types on one sheet, making it visually noisy.</li>
                    <li>Not checking Manage Rules before applying a new one, leading to conflicting or duplicate rules.</li>
                    <li>Assuming Conditional Formatting changes the actual data — it only ever changes appearance.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Select only the exact data range before applying a rule, not entire rows or columns.</li>
                    <li>Use Data Bars or Color Scales for quick visual scanning of large numeric ranges.</li>
                    <li>Check Manage Rules periodically to keep formatting clean and intentional.</li>
                    <li>Combine Conditional Formatting with Cell Styles for a consistent, professional report.</li>
                    <li>Use Icon Sets sparingly — they're powerful, but too many can clutter a report.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Conditional Formatting automatically applies formatting to cells based on a rule you set once.",
                    "Highlight Cells Rules cover simple conditions like Greater Than, Less Than, and Duplicate Values.",
                    "Data Bars, Color Scales, and Icon Sets turn numbers into instant, readable visuals.",
                    "Formatting updates automatically whenever the underlying data changes.",
                    "Manage Rules lets you view, edit, or clear existing Conditional Formatting rules.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}