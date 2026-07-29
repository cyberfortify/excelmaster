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
        question: "By default, how does Excel align text in a cell?",
        options: ["Left-aligned", "Right-aligned", "Center-aligned", "Justified"],
        answer: 0,
        explanation:
            "Excel automatically left-aligns text and right-aligns numbers by default, without you changing anything.",
    },
    {
        question: "By default, how does Excel align numbers in a cell?",
        options: ["Left-aligned", "Right-aligned", "Center-aligned", "Bottom-aligned"],
        answer: 1,
        explanation:
            "Numbers are right-aligned by default in Excel, which makes it easier to compare values by their place value.",
    },
    {
        question: "Which feature combines several selected cells into one larger cell, often used for titles?",
        options: ["Wrap Text", "Merge & Center", "Format Painter", "Freeze Panes"],
        answer: 1,
        explanation:
            "Merge & Center joins multiple selected cells into a single cell and automatically centers the text inside it.",
    },
    {
        question: "A cell has a long sentence that's spilling into neighboring cells. Which tool makes the text wrap inside the cell instead, increasing the row height?",
        options: ["Wrap Text", "Merge Cells", "Orientation", "Indent"],
        answer: 0,
        explanation:
            "Wrap Text forces long content to break into multiple lines within the same cell, expanding the row height automatically.",
    },
    {
        question: "Which alignment option rotates text diagonally or vertically inside a cell?",
        options: ["Wrap Text", "Orientation", "Merge & Center", "Indent"],
        answer: 1,
        explanation:
            "Orientation lets you angle or rotate text within a cell — often used for slanted column headers to save horizontal space.",
    },
    {
        question: "A teacher has a report title that should span across columns A to E and appear centered. What's the best way to do this?",
        options: [
            "Manually widen column A only",
            "Select cells A1:E1 and use Merge & Center",
            "Use Wrap Text on cell A1",
            "Use Find and Replace",
        ],
        answer: 1,
        explanation:
            "Selecting the range A1:E1 and clicking Merge & Center combines the cells into one wide title cell with the text centered.",
    },
];

export default function CellAlignment() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand Excel's default alignment for text and numbers.</li>
                    <li>Learn horizontal and vertical alignment options.</li>
                    <li>Use Wrap Text to handle long content neatly.</li>
                    <li>Use Merge & Center for titles and headers.</li>
                    <li>Learn shortcuts and tricks to align data faster.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Have you ever opened a spreadsheet where numbers were scattered
                    unevenly, text was spilling over into other cells, or a title
                    looked oddly placed in one small box? All of this comes down to{" "}
                    <strong>Cell Alignment</strong> — how content is positioned
                    within a cell.
                </p>

                <p className="mt-3">
                    Good alignment doesn't just make a sheet look neat — it makes
                    numbers easier to compare and text easier to read, especially in
                    reports that others will review.
                </p>

                <InfoBox>
                    <p>
                        Alignment only changes the position of content inside a cell —
                        it never changes the actual data or its value.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Alignment Tools?">

                <ImageCard
                    src="/images/lessons/formatting/alignment-group-home-tab.png"
                    alt="Excel Alignment group on the Home tab"
                    caption="Alignment tools are grouped together in the Alignment section of the Home tab."
                />

            </LessonSection>

            {/* Default alignment */}

            <LessonSection title="Excel's Default Alignment">

                <p>
                    Before changing anything, it helps to know what Excel does
                    automatically — this default behavior is actually a helpful clue
                    about your data type.
                </p>

                <LessonTable
                    headers={["Data Type", "Default Alignment", "Why"]}
                    rows={[
                        ["Text", "Left-aligned", "Text is read left to right, so it starts from the left edge"],
                        ["Numbers", "Right-aligned", "Right-alignment lines up decimal points and digits for easy comparison"],
                        ["Dates", "Right-aligned", "Excel treats dates as numbers internally"],
                    ]}
                />

                <TipBox>
                    <p>
                        Quick trick: if a number you typed appears left-aligned
                        instead of right-aligned, it's usually a sign Excel is
                        treating it as text, not a real number — worth double-checking.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Horizontal alignment */}

            <LessonSection title="Horizontal Alignment">

                <p>
                    Horizontal alignment controls whether content sits to the left,
                    center, or right of a cell.
                </p>

                <LessonTable
                    headers={["Option", "Best Used For"]}
                    rows={[
                        ["Left Align", "Names, descriptions, and general text data"],
                        ["Center Align", "Headers, short labels, single words needing emphasis"],
                        ["Right Align", "Numbers, currency, and dates for easy comparison"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        A sales table has "Product" in column A and "Amount" in
                        column B. Left-aligning "Product" and keeping "Amount"
                        right-aligned (Excel's default) makes the whole table easier
                        to scan at a glance.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Vertical alignment */}

            <LessonSection title="Vertical Alignment">

                <p>
                    Vertical alignment controls whether content sits at the top,
                    middle, or bottom of a taller cell — especially useful once row
                    heights are increased.
                </p>

                <LessonTable
                    headers={["Option", "What It Does"]}
                    rows={[
                        ["Top Align", "Pushes content to the top of a tall cell"],
                        ["Middle Align", "Centers content vertically — most commonly used"],
                        ["Bottom Align", "Excel's default; content sits at the bottom of the cell"],
                    ]}
                />

            </LessonSection>

            {/* Wrap text */}

            <LessonSection title="Wrap Text: Handling Long Content">

                <p>
                    When a cell contains a long sentence, it either spills into the
                    next cell (if that cell is empty) or gets visually cut off. <strong>Wrap
                    Text</strong> solves this by breaking the content into multiple
                    lines within the same cell.
                </p>

                <ExampleBox title="Real-Life Example">
                    <p>
                        A feedback column contains long comments like "Delivery was
                        delayed by three days due to weather conditions." Turning on
                        Wrap Text keeps the full comment visible inside one cell,
                        automatically increasing the row height instead of spilling
                        into neighboring cells.
                    </p>
                </ExampleBox>

                <TipBox>
                    <p>
                        Wrap Text is on the Home tab, right next to Merge & Center —
                        look for the icon showing text wrapping onto a second line.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Merge and center */}

            <LessonSection title="Merge & Center: Creating Titles and Headers">

                <p>
                    <strong>Merge & Center</strong> combines multiple selected cells
                    into one larger cell and centers the content inside it — perfect
                    for report titles that need to span across several columns.
                </p>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the range of cells you want to merge, like A1:E1."],
                        ["2", "Go to Home → Alignment group → Merge & Center."],
                        ["3", "The selected cells combine into one, with text centered inside."],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        A monthly report has the title "Sales Report – March 2026" in
                        cell A1, and the table below spans columns A to E. Selecting
                        A1:E1 and clicking Merge & Center makes the title appear
                        perfectly centered above the entire table.
                    </p>
                </ExampleBox>

                <InfoBox>
                    <p>
                        Merging cells is best for titles and headers only. Avoid
                        merging cells within your actual data — it can make sorting
                        and filtering behave unexpectedly later.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Indent and orientation */}

            <LessonSection title="Indent and Orientation">

                <p>
                    Two lesser-known but useful alignment tools:
                </p>

                <LessonTable
                    headers={["Tool", "What It Does", "Example Use"]}
                    rows={[
                        ["Indent", "Pushes content slightly away from the cell's left edge", "Indenting sub-items under a main category for a clear hierarchy"],
                        ["Orientation", "Rotates or angles text within a cell", "Slanting column headers at 45° to fit narrow columns"],
                    ]}
                />

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you're preparing an invoice for a client. The company
                    name and invoice title need to be merged and centered across the
                    top, product descriptions need Wrap Text so nothing gets cut off,
                    and prices need right-alignment so totals line up cleanly at the
                    bottom — all of this is achieved purely through alignment tools.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An admin team creates attendance sheets with long department
                        names as column headers. Using Orientation to angle the
                        headers at 45° lets them fit many narrow columns on one
                        printed page, instead of making each column unreasonably wide.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Excel tricks and shortcuts */}

            <LessonSection title="Excel Tricks & Shortcuts for Alignment">

                <LessonTable
                    headers={["Shortcut / Trick", "What It Does"]}
                    rows={[
                        ["Ctrl + 1", "Opens Format Cells → Alignment tab for full control, including Orientation and Indent"],
                        ["Alt + H, A, C", "Center-aligns the selected cells (Ribbon key-tip shortcut)"],
                        ["Alt + H, A, L", "Left-aligns the selected cells"],
                        ["Alt + H, A, R", "Right-aligns the selected cells"],
                        ["Double-click column border", "Auto-fits column width to the longest content, reducing the need for Wrap Text"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> If Wrap Text is making a row too
                        tall, first try widening the column instead — sometimes a
                        wider column reads better than several wrapped lines.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Overusing Merge & Center inside actual data tables, breaking sorting and filtering later.</li>
                    <li>Center-aligning large blocks of paragraph text, making it harder to read than left-aligned.</li>
                    <li>Forgetting Wrap Text and letting long sentences spill or get cut off.</li>
                    <li>Leaving numbers left-aligned by accident, which usually means they're stored as text.</li>
                    <li>Using Orientation excessively, making headers harder to read instead of easier.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Keep numbers right-aligned and text left-aligned unless there's a clear reason not to.</li>
                    <li>Reserve Merge & Center for titles only, never for data rows.</li>
                    <li>Use Wrap Text instead of manually pressing Enter inside a cell to break lines.</li>
                    <li>Use Ctrl + 1 for quick access to every alignment option in one dialog.</li>
                    <li>Double-click a column border to auto-fit width before reaching for Wrap Text.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Excel left-aligns text and right-aligns numbers by default.",
                    "Horizontal alignment (left, center, right) and vertical alignment (top, middle, bottom) control content position.",
                    "Wrap Text breaks long content into multiple lines within the same cell.",
                    "Merge & Center combines cells into one and centers text — best used for titles.",
                    "Indent and Orientation help create hierarchy and fit angled headers.",
                    "Ctrl + 1 opens the full Alignment tab for complete control over every option.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}