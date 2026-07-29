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
        question: "What is a Cell Style in Excel?",
        options: [
            "A single color applied to one cell",
            "A saved combination of formatting (font, color, border) that can be applied in one click",
            "A type of formula",
            "A chart type",
        ],
        answer: 1,
        explanation:
            "A Cell Style bundles multiple formatting choices — font, fill, border, number format — into one saved, reusable style.",
    },
    {
        question: "Which Ribbon tab contains the Cell Styles gallery?",
        options: ["Insert", "Home", "Data", "Formulas"],
        answer: 1,
        explanation:
            "Cell Styles are found on the Home tab, in the Styles group.",
    },
    {
        question: "What is the main advantage of using a built-in Cell Style like 'Good' or 'Bad' instead of manually coloring a cell?",
        options: [
            "It's the only way to add color in Excel",
            "It applies a consistent, pre-designed look instantly and keeps formatting standardized across a workbook",
            "It changes the actual data",
            "It deletes existing formatting permanently",
        ],
        answer: 1,
        explanation:
            "Built-in Cell Styles give a instant, professionally designed look and help keep formatting consistent, rather than manually guessing colors each time.",
    },
    {
        question: "Can you create your own Custom Cell Style in Excel?",
        options: [
            "No, only built-in styles can be used",
            "Yes, by formatting a cell the way you want and saving it as a New Cell Style",
            "Only Microsoft can create new styles",
            "Only through Format Painter",
        ],
        answer: 1,
        explanation:
            "Excel lets you format a cell exactly as desired, then save that combination as a New Cell Style for one-click reuse anywhere in the workbook.",
    },
    {
        question: "If you update a Cell Style's definition, what happens to cells that already used that style?",
        options: [
            "Nothing changes on existing cells",
            "All cells using that style update automatically to match the new definition",
            "The cells get deleted",
            "Only new cells are affected, existing ones stay the same forever",
        ],
        answer: 1,
        explanation:
            "One major benefit of Cell Styles is that editing the style definition instantly updates every cell that uses it — a huge time-saver for consistency.",
    },
    {
        question: "A company wants every 'Warning' cell across 20 worksheets to instantly change from yellow to orange in one action, without touching each cell manually. What's the best approach?",
        options: [
            "Manually recolor every Warning cell one by one across all 20 sheets",
            "Apply a Cell Style called 'Warning' to all those cells beforehand, then edit that one style's definition",
            "Use Find and Replace",
            "Delete all the sheets and start over",
        ],
        answer: 1,
        explanation:
            "If all Warning cells share the same Cell Style, editing that style's definition once instantly updates every cell using it, across every sheet.",
    },
];

export default function CellStyles() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Cell Styles are and how they differ from manual formatting.</li>
                    <li>Learn to apply built-in styles like Good, Bad, and Neutral.</li>
                    <li>Create and save your own Custom Cell Style.</li>
                    <li>Understand how updating a style updates every cell using it.</li>
                    <li>Learn shortcuts and tricks for working with styles faster.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    You've learned to manually apply Bold, Fill Color, and Borders
                    one at a time. But what if you need that exact same combination
                    — bold white text on a dark blue background with a border —
                    applied consistently across dozens of headers, and you want to
                    update all of them at once later? This is exactly what{" "}
                    <strong>Cell Styles</strong> are built for.
                </p>

                <p className="mt-3">
                    A Cell Style bundles multiple formatting choices into one saved,
                    reusable "style" — similar to how a Word document uses "Heading
                    1" or "Heading 2" styles instead of manually formatting every
                    heading.
                </p>

                <InfoBox>
                    <p>
                        Cell Styles are formatting shortcuts with memory — apply one,
                        and if you ever change your mind about the look, updating the
                        style updates every cell using it, all at once.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Cell Styles?">

                <ImageCard
                    src="/images/lessons/formatting/cell-styles-gallery.png"
                    alt="Cell Styles gallery on the Home tab"
                    caption="Cell Styles live in the Styles group on the Home tab, showing a gallery of pre-designed looks."
                />

            </LessonSection>

            {/* Built in styles */}

            <LessonSection title="Built-in Cell Styles">

                <p>
                    Excel comes with a gallery of ready-made styles, grouped by
                    purpose — no need to manually pick colors and fonts yourself.
                </p>

                <LessonTable
                    headers={["Style", "Typical Look", "Common Use"]}
                    rows={[
                        ["Good", "Green fill, dark green text", "Marking positive results, like targets achieved"],
                        ["Bad", "Red fill, dark red text", "Marking negative results, like missed targets"],
                        ["Neutral", "Yellow fill, dark yellow text", "Marking values that need review"],
                        ["Heading 1 / Heading 2", "Bold, larger font with an underline", "Section titles within a worksheet"],
                        ["Total", "Bold text with a top border", "Highlighting a sum or total row"],
                        ["Input", "Light yellow fill", "Marking cells meant for manual data entry"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        Instead of manually choosing a green fill and dark green font
                        for cells showing "Target Achieved," simply select those
                        cells and click the <strong>Good</strong> style from the
                        gallery — the exact combination applies in one click.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Applying a style */}

            <LessonSection title="Applying a Cell Style: Step by Step">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cell or range you want to style."],
                        ["2", "Go to Home tab → Cell Styles (in the Styles group)."],
                        ["3", "Hover over each style to preview it live on your cells."],
                        ["4", "Click the style you want to apply it."],
                    ]}
                />

                <TipBox>
                    <p>
                        Hovering over a style before clicking shows a live preview
                        directly on your selected cells — a quick way to compare
                        options before committing.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Creating custom style */}

            <LessonSection title="Creating Your Own Custom Cell Style">

                <p>
                    If the built-in styles don't match your company's branding or
                    report design, you can create and save your own.
                </p>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Format a cell exactly the way you want (font, fill, border, number format)."],
                        ["2", "Go to Home → Cell Styles → New Cell Style."],
                        ["3", "Give your style a name, like 'Company Header.'"],
                        ["4", "Click OK — your custom style now appears in the gallery for reuse."],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        A company always formats report headers in their brand's dark
                        green with white bold text. Instead of recreating this every
                        time, they format it once, save it as "Company Header," and
                        apply it in a single click on every future report.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Updating a style */}

            <LessonSection title="The Real Power: Updating a Style Everywhere">

                <p>
                    This is what makes Cell Styles far more powerful than manual
                    formatting: if you change the style's definition later, every
                    cell using that style updates automatically — even across
                    different sheets.
                </p>

                <ExampleBox title="Example">
                    <p>
                        A company rebrands its report color from blue to green.
                        Instead of manually recoloring hundreds of cells across
                        dozens of sheets, they simply edit the "Company Header" style
                        once — every cell using that style instantly turns green.
                    </p>
                </ExampleBox>

                <InfoBox>
                    <p>
                        Right-click any style in the gallery and choose{" "}
                        <strong>Modify</strong> to edit its definition and update
                        every linked cell at once.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Cell styles vs manual formatting */}

            <LessonSection title="Cell Styles vs Manual Formatting">

                <LessonTable
                    headers={["Manual Formatting", "Cell Styles"]}
                    rows={[
                        ["Applied one property at a time (font, then color, then border)", "Applies a full combination in a single click"],
                        ["Must be repeated manually for consistency", "Guarantees consistency automatically"],
                        ["Changing the look means re-editing every cell", "Changing the look means editing the style once"],
                    ]}
                />

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you work in finance, preparing monthly reports with
                    "Good," "Bad," and "Total" cells scattered throughout. Using
                    built-in Cell Styles for these ensures every report looks
                    consistent, without needing to manually recreate colors each
                    month — and if the company later wants a different color scheme,
                    updating the styles takes seconds, not hours.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An operations team applies a custom "Department Header" style
                        across 15 sheets. When the company updates its branding
                        colors, the team edits the style once, and every header
                        across all 15 sheets updates instantly.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Shortcuts and tricks */}

            <LessonSection title="Excel Tricks & Shortcuts for Cell Styles">

                <LessonTable
                    headers={["Trick", "What It Does"]}
                    rows={[
                        ["Hover before clicking", "Live-previews a style on selected cells before applying it"],
                        ["Right-click a style → Modify", "Edits a style's definition, instantly updating every cell using it"],
                        ["Right-click a style → Duplicate", "Creates a copy of an existing style to tweak, without changing the original"],
                        ["Merge Styles", "Lets you import Cell Styles from another open workbook, keeping designs consistent across files"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> Building 2–3 custom styles for your
                        most common needs (like "Header" and "Total") once saves far
                        more time than manually formatting cells every single report.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Manually recoloring cells one by one, instead of creating a reusable Cell Style.</li>
                    <li>Not naming custom styles clearly, making them hard to find later in the gallery.</li>
                    <li>Overwriting a built-in style by mistake instead of creating a new one.</li>
                    <li>Forgetting that modifying a style changes every cell using it — which could be unexpected if not intended.</li>
                    <li>Mixing manual formatting and Cell Styles on the same report, creating inconsistency.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Build a small set of custom styles for repeated report types, like "Header," "Total," and "Warning."</li>
                    <li>Use built-in Good/Bad/Neutral styles for quick, standardized status highlighting.</li>
                    <li>Update a style's definition instead of manually reformatting when a company-wide design changes.</li>
                    <li>Use Merge Styles to bring consistent styles into a new workbook, rather than recreating them.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "A Cell Style bundles font, fill, border, and number formatting into one reusable, named style.",
                    "Built-in styles like Good, Bad, Neutral, and Total are ready to use from the Home tab.",
                    "Custom Cell Styles can be created by formatting a cell and saving it as a New Cell Style.",
                    "Updating a style's definition automatically updates every cell that uses it.",
                    "Cell Styles ensure consistency far more reliably than repeating manual formatting.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}