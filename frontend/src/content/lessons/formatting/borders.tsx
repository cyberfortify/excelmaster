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
        question: "By default, does Excel print the light gray gridlines you see on screen?",
        options: ["Yes, always", "No, gridlines are only for on-screen viewing unless you add actual Borders", "Only in Page Layout View", "Only for numbers"],
        answer: 1,
        explanation:
            "The faint gridlines on screen are just a visual guide and don't print by default — actual Borders must be added if you want visible lines on a printed report.",
    },
    {
        question: "Which Ribbon tab contains the Borders tool?",
        options: ["Insert", "Home", "View", "Data"],
        answer: 1,
        explanation:
            "Borders are found in the Font group on the Home tab, right next to Fill Color.",
    },
    {
        question: "Which shortcut instantly adds a border around the currently selected cells?",
        options: ["Ctrl + B", "Ctrl + Shift + &", "Ctrl + 1", "Ctrl + Shift + ~"],
        answer: 1,
        explanation:
            "Ctrl + Shift + & applies an outline border around the selected range instantly, without opening any menu.",
    },
    {
        question: "What does 'All Borders' do, compared to 'Outside Borders'?",
        options: [
            "They are exactly the same",
            "All Borders adds lines around every individual cell, while Outside Borders only outlines the entire selected range",
            "All Borders removes borders",
            "Outside Borders only works on numbers",
        ],
        answer: 1,
        explanation:
            "All Borders draws a grid line around each individual cell inside your selection, while Outside Borders draws just one line around the outer edge of the whole range.",
    },
    {
        question: "Where would you go for full control over border style, thickness, and color, beyond the quick Ribbon options?",
        options: ["Format Painter", "Format Cells → Border tab (Ctrl + 1)", "Wrap Text", "Freeze Panes"],
        answer: 1,
        explanation:
            "Pressing Ctrl + 1 opens Format Cells, where the Border tab offers custom line styles, thickness, and colors not available directly on the Ribbon.",
    },
    {
        question: "An accountant wants only the total row of a report to have a thick top border, separating it clearly from the data above. What's the best approach?",
        options: [
            "Use All Borders on the entire sheet",
            "Select just the total row, open Format Cells → Border, and apply a thick line to only the top edge",
            "Use Wrap Text instead",
            "Delete the row and retype it",
        ],
        answer: 1,
        explanation:
            "Format Cells → Border tab lets you apply a border to just one specific edge (like the top), giving precise control instead of boxing in every cell.",
    },
];

export default function Borders() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand the difference between gridlines and actual Borders.</li>
                    <li>Learn how to quickly add borders using the Ribbon.</li>
                    <li>Use Format Cells for custom border styles, thickness, and color.</li>
                    <li>Apply borders to specific edges, like just the top or bottom.</li>
                    <li>Learn shortcuts and tricks for faster border formatting.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Open any Excel sheet and you'll see faint gray lines separating
                    every cell — but here's a surprise for beginners:{" "}
                    <strong>those lines don't actually print</strong>. If you want
                    visible lines on a report, invoice, or printed table, you need to
                    add real <strong>Borders</strong>.
                </p>

                <p className="mt-3">
                    Borders help separate sections, highlight totals, and make
                    printed reports look structured and professional — instead of
                    just a floating block of numbers.
                </p>

                <InfoBox>
                    <p>
                        Think of gridlines as light pencil guides on graph paper, and
                        Borders as the actual pen lines you draw on top when you want
                        something to stand out.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find the Borders Tool?">

                <ImageCard
                    src="/images/lessons/formatting/borders-tool-home-tab.png"
                    alt="Excel Borders dropdown on the Home tab"
                    caption="The Borders tool is in the Font group on the Home tab, shown as a small grid icon."
                />

            </LessonSection>

            {/* Gridlines vs borders */}

            <LessonSection title="Gridlines vs Borders: A Key Difference">

                <p>
                    This is one of the most common points of confusion for
                    beginners — here's a clear comparison:
                </p>

                <LessonTable
                    headers={["Gridlines", "Borders"]}
                    rows={[
                        ["Faint gray lines shown by default on every sheet", "Solid lines you deliberately add to specific cells"],
                        ["Only for on-screen viewing", "Actually appear when printed"],
                        ["Cannot be styled or colored", "Can be styled, thickened, and colored"],
                        ["Turned on/off via View tab → Gridlines checkbox", "Applied via Home tab → Borders, or Ctrl + 1"],
                    ]}
                />

                <TipBox>
                    <p>
                        If your printed report looks like it has "no lines at all"
                        even though it looks fine on screen, that's almost always
                        because you were seeing gridlines, not real Borders.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Quick borders */}

            <LessonSection title="Adding Quick Borders from the Ribbon">

                <p>
                    The fastest way to add borders is through the Borders dropdown
                    on the Home tab, which offers several ready-made options.
                </p>

                <LessonTable
                    headers={["Option", "What It Does"]}
                    rows={[
                        ["Bottom Border", "Adds a line under the selected cells only"],
                        ["All Borders", "Adds lines around every individual cell in the selection"],
                        ["Outside Borders", "Adds a single line around the outer edge of the selection"],
                        ["Thick Box Border", "Adds a bold outline around the entire selection"],
                        ["No Border", "Removes any borders from the selected cells"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        Select a sales table from A1 to D10, click the Borders
                        dropdown, and choose <strong>All Borders</strong>. Every cell
                        in that range now has a visible grid line, both on screen and
                        when printed.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* All borders vs outside borders */}

            <LessonSection title="All Borders vs Outside Borders">

                <p>
                    These two options look similar in the dropdown but produce very
                    different results:
                </p>

                <LessonTable
                    headers={["All Borders", "Outside Borders"]}
                    rows={[
                        ["Draws a line around every single cell", "Draws just one line around the whole selected range"],
                        ["Looks like a full grid or table", "Looks like a single box or frame"],
                        ["Best for detailed data tables", "Best for highlighting a section or title block"],
                    ]}
                />

            </LessonSection>

            {/* Custom borders via format cells */}

            <LessonSection title="Custom Borders with Format Cells">

                <p>
                    For more control — like changing line thickness, style (dashed,
                    double), or color — open the full <strong>Format Cells</strong>{" "}
                    dialog.
                </p>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cells you want to format."],
                        ["2", "Press Ctrl + 1 to open Format Cells."],
                        ["3", "Click the Border tab."],
                        ["4", "Choose a line style and color, then click the specific edge (top, bottom, left, right) to apply it."],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        An accountant wants the "Total" row of a report to stand out
                        with a thick top border, separating it from the data above.
                        Selecting just that row, opening Format Cells → Border, and
                        clicking only the top edge with a thick line style achieves
                        exactly that — without boxing in the entire row.
                    </p>
                </ExampleBox>

                <InfoBox>
                    <p>
                        Format Cells lets you apply borders to just <em>one</em> edge
                        at a time — useful when you want separation without a full
                        box around every cell.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you're preparing an invoice for a client. The header row
                    gets a thick bottom border to separate it from item details, each
                    product row gets thin borders for readability, and the final
                    total row gets a bold top border to clearly mark where the
                    calculation begins — all achieved through thoughtful border use.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An HR team formats an attendance sheet with All Borders for
                        the full data grid, then adds a Thick Box Border around the
                        entire table to visually separate it from other content on
                        the same sheet, like notes or a summary box.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Excel tricks and shortcuts */}

            <LessonSection title="Excel Tricks & Shortcuts for Borders">

                <LessonTable
                    headers={["Shortcut / Trick", "What It Does"]}
                    rows={[
                        ["Ctrl + Shift + &", "Instantly adds an outline border around the selected cells"],
                        ["Ctrl + Shift + _", "Removes all borders from the selected cells"],
                        ["Ctrl + 1", "Opens Format Cells → Border tab for full custom control"],
                        ["Border Painter (pencil icon in Border dropdown)", "Lets you 'draw' borders freehand by clicking or dragging over cell edges"],
                        ["View tab → Gridlines checkbox", "Hides the on-screen gridlines so only your real Borders are visible — useful for previewing the final printed look"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> Turn off View → Gridlines
                        temporarily while designing a report — this shows you exactly
                        what the sheet will look like once printed, without the
                        distracting default gray lines.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Assuming gridlines will print, then being surprised by a blank-looking printout.</li>
                    <li>Using All Borders everywhere, making the sheet look cluttered instead of clean.</li>
                    <li>Forgetting that borders don't remove with the Delete key — use No Border or Ctrl + Shift + _ instead.</li>
                    <li>Applying thick borders to every row, reducing their impact when something truly needs to stand out.</li>
                    <li>Not previewing borders in Page Layout View before printing an important report.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Use All Borders for detailed data tables, and Outside Borders for section headers.</li>
                    <li>Reserve thick or colored borders for totals and key highlights only.</li>
                    <li>Use Ctrl + 1 whenever you need control over just one edge of a cell.</li>
                    <li>Check Page Layout View before printing to confirm your borders appear as expected.</li>
                    <li>Combine Borders with Fill Color for headers that truly stand out.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Gridlines are just for on-screen viewing and don't print by default.",
                    "Borders are real lines you add on purpose, and they do appear when printed.",
                    "The Borders dropdown on the Home tab offers quick options like All Borders and Outside Borders.",
                    "Format Cells (Ctrl + 1) → Border tab gives full control over style, thickness, color, and specific edges.",
                    "Ctrl + Shift + & quickly outlines selected cells; Ctrl + Shift + _ removes borders.",
                    "Use borders thoughtfully — too many can clutter a sheet instead of making it clearer.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}