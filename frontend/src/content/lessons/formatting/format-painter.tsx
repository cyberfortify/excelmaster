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
        question: "What does Format Painter copy from one cell to another?",
        options: [
            "Only the data/value",
            "Only the formatting, like font, color, and borders",
            "Both the data and the formatting",
            "Only formulas",
        ],
        answer: 1,
        explanation:
            "Format Painter copies just the formatting — font, color, borders, alignment — leaving the underlying data untouched.",
    },
    {
        question: "Where is the Format Painter icon located?",
        options: ["Insert tab", "Home tab, in the Clipboard group (paintbrush icon)", "View tab", "Formulas tab"],
        answer: 1,
        explanation:
            "Format Painter is the paintbrush icon in the Clipboard group, at the very left of the Home tab.",
    },
    {
        question: "How do you apply the same formatting to several different, non-adjacent areas without reselecting the tool each time?",
        options: [
            "Single-click Format Painter",
            "Double-click Format Painter",
            "Right-click Format Painter",
            "It's not possible",
        ],
        answer: 1,
        explanation:
            "Double-clicking Format Painter keeps it active for multiple uses, until you press Esc or click it again to turn it off.",
    },
    {
        question: "What is the keyboard shortcut alternative to clicking Format Painter?",
        options: ["Ctrl + Shift + C, then Ctrl + Shift + V", "Ctrl + C, then Ctrl + V", "Ctrl + P", "Ctrl + F"],
        answer: 0,
        explanation:
            "Ctrl + Shift + C copies formatting only, and Ctrl + Shift + V pastes just that formatting — a keyboard-only alternative to the paintbrush icon.",
    },
    {
        question: "After single-clicking Format Painter and applying it once, what happens if you try to use it again on another cell?",
        options: [
            "It applies again automatically",
            "It turns off automatically after one use, so you'd need to click it again",
            "It deletes the formatting",
            "Nothing happens",
        ],
        answer: 1,
        explanation:
            "A single click of Format Painter only works for one paste action — it switches off right after, unless you double-click it to keep it active.",
    },
    {
        question: "An admin has one perfectly formatted header (bold, blue fill, centered) on 'Sheet1' and needs to copy this exact style to headers on 5 other sheets. What's the most efficient approach?",
        options: [
            "Manually apply Bold, Fill Color, and Center on each of the 5 sheets",
            "Double-click Format Painter, then click each header across all 5 sheets one by one",
            "Retype every header",
            "Use Find and Replace",
        ],
        answer: 1,
        explanation:
            "Double-clicking Format Painter keeps it active across multiple clicks and even multiple sheets, letting the admin apply the exact formatting everywhere in seconds.",
    },
];

export default function FormatPainter() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Format Painter does and why it saves time.</li>
                    <li>Learn the difference between single-click and double-click use.</li>
                    <li>Copy formatting across cells, rows, and even different sheets.</li>
                    <li>Learn the keyboard shortcut alternative to Format Painter.</li>
                    <li>Avoid common mistakes while reusing formatting.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    You've spent ten minutes perfectly styling one header — bold
                    text, a light blue background, centered alignment. Now you need
                    that exact same look on twelve other headers across your
                    workbook. Retyping every formatting step twelve times would be
                    exhausting. This is exactly the problem{" "}
                    <strong>Format Painter</strong> solves.
                </p>

                <p className="mt-3">
                    Format Painter copies just the <em>style</em> of a cell — never
                    the actual data — and lets you "paint" that same style onto other
                    cells in a click or two.
                </p>

                <InfoBox>
                    <p>
                        Think of Format Painter like a paint roller — you dip it once
                        into a fully formatted cell, then roll that exact style onto
                        anything else you touch.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Format Painter?">

                <ImageCard
                    src="/images/lessons/formatting/format-painter-icon.png"
                    alt="Format Painter paintbrush icon on the Home tab"
                    caption="Format Painter is the paintbrush icon in the Clipboard group, at the far left of the Home tab."
                />

            </LessonSection>

            {/* What it copies */}

            <LessonSection title="What Exactly Does Format Painter Copy?">

                <p>
                    Format Painter copies every visual style applied to a cell —
                    but never touches the actual value or formula inside it.
                </p>

                <LessonTable
                    headers={["Copied by Format Painter", "NOT Copied"]}
                    rows={[
                        ["Font style, size, bold, italic, underline", "The actual text or number in the cell"],
                        ["Font color and fill color", "Formulas or calculations"],
                        ["Borders", "Cell comments"],
                        ["Alignment (left, center, right)", "Data validation rules"],
                        ["Number format (like Currency or Percentage)", "—"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        Cell A1 has the text "Total Sales" styled with bold, white
                        text on a dark blue background. Using Format Painter on cell
                        C5 (which contains "Total Expenses") applies that same bold,
                        white-on-blue style — but C5 still says "Total Expenses," not
                        "Total Sales."
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Single click vs double click */}

            <LessonSection title="Single-Click vs Double-Click: A Key Difference">

                <p>
                    This is the most important thing to understand about Format
                    Painter — how you click changes how long it stays active.
                </p>

                <LessonTable
                    headers={["Single-Click", "Double-Click"]}
                    rows={[
                        ["Applies formatting once, then automatically turns off", "Stays active until you manually turn it off"],
                        ["Best for copying to just one area", "Best for copying to several different, scattered areas"],
                        ["No need to press Esc afterward", "Press Esc (or click the icon again) when finished"],
                    ]}
                />

                <TipBox>
                    <p>
                        If you find yourself clicking Format Painter again and again
                        for every new cell, that's a sign you should have{" "}
                        <strong>double-clicked</strong> it instead — it saves you from
                        repeating the same click over and over.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Step by step */}

            <LessonSection title="How to Use Format Painter: Step by Step">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Click the cell whose formatting you want to copy."],
                        ["2", "Click (or double-click) the Format Painter icon on the Home tab."],
                        ["3", "Your cursor turns into a paintbrush — click or drag over the destination cells."],
                        ["4", "If you double-clicked, press Esc when you're done applying it everywhere."],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        An admin has a nicely formatted header row on "January"
                        sheet. To match "February" through "December," they select
                        the January header, double-click Format Painter, then click
                        the header row on each of the other 11 sheets — all matching
                        in seconds.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Applying to multiple non adjacent cells */}

            <LessonSection title="Copying Formatting to Multiple, Scattered Cells">

                <p>
                    Format Painter isn't limited to one continuous range — with
                    double-click active, you can apply the same formatting to
                    completely unrelated cells anywhere in the workbook.
                </p>

                <ExampleBox title="Example">
                    <p>
                        A finance report has three separate "Total" cells scattered
                        across different sections. Selecting one already-formatted
                        Total cell, double-clicking Format Painter, then clicking each
                        of the other two Total cells applies identical formatting to
                        all three — even though they aren't next to each other.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Keyboard alternative */}

            <LessonSection title="Keyboard Shortcut Alternative">

                <p>
                    If you prefer not to reach for the mouse, Excel offers a
                    keyboard-only way to copy and paste formatting.
                </p>

                <LessonTable
                    headers={["Shortcut", "What It Does"]}
                    rows={[
                        ["Ctrl + Shift + C", "Copies the formatting of the selected cell"],
                        ["Ctrl + Shift + V", "Pastes only that copied formatting onto the selected cell"],
                    ]}
                />

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you're an HR executive maintaining employee records
                    across 10 different department sheets in one workbook. Once you
                    perfect the header formatting on the first sheet, Format Painter
                    lets you apply that exact same professional look to all 10 sheets
                    in under a minute — keeping the entire workbook visually
                    consistent.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        A finance analyst formats one "Total" cell with a thick top
                        border and bold red font for negative results. Using Format
                        Painter, they instantly copy this style onto every other
                        subtotal cell across a 50-row report.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Shortcuts and tricks */}

            <LessonSection title="Excel Tricks & Shortcuts for Format Painter">

                <LessonTable
                    headers={["Shortcut / Trick", "What It Does"]}
                    rows={[
                        ["Double-click Format Painter", "Keeps it active for multiple, scattered areas"],
                        ["Esc", "Turns off an active Format Painter"],
                        ["Ctrl + Shift + C / Ctrl + Shift + V", "Keyboard-only copy and paste of formatting"],
                        ["Format Painter across sheets", "Works even when clicking a destination on a different worksheet tab"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> Format Painter works across
                        different worksheets in the same workbook — you don't need to
                        stay on the same sheet to reuse it.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Single-clicking when multiple areas need formatting, forcing repeated clicks.</li>
                    <li>Forgetting to press Esc after double-clicking, leaving the paintbrush active by accident.</li>
                    <li>Accidentally applying formatting to the wrong cells while the paintbrush cursor is still active.</li>
                    <li>Expecting Format Painter to also copy the data — it never does, only the style.</li>
                    <li>Not noticing that dragging (instead of clicking) applies formatting to an entire range at once, which can overwrite more than intended.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Use double-click whenever formatting needs to go to more than one place.</li>
                    <li>Always press Esc once you're done, so you don't accidentally reformat other cells later.</li>
                    <li>Perfect one cell's formatting first, then use Format Painter to spread it — faster than formatting each cell individually.</li>
                    <li>Combine Format Painter with Ctrl + Shift + C/V for a fully keyboard-driven workflow.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Format Painter copies only formatting — font, color, borders, alignment — never the actual data.",
                    "Single-click applies it once; double-click keeps it active for multiple areas.",
                    "It works across different cells, rows, and even different worksheets in the same workbook.",
                    "Ctrl + Shift + C and Ctrl + Shift + V offer a keyboard-only alternative.",
                    "Press Esc to turn off an active Format Painter after double-clicking.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}