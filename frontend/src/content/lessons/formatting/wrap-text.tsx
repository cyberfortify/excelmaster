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
        question: "What does Wrap Text do to a cell's content?",
        options: [
            "Deletes extra text that doesn't fit",
            "Breaks long content into multiple lines within the same cell",
            "Merges the cell with the next one",
            "Changes the font size automatically",
        ],
        answer: 1,
        explanation:
            "Wrap Text keeps all the content inside one cell by wrapping it onto multiple lines, instead of letting it spill over or get cut off.",
    },
    {
        question: "Which Ribbon tab contains the Wrap Text button?",
        options: ["Insert", "Home", "Data", "Formulas"],
        answer: 1,
        explanation:
            "Wrap Text is in the Alignment group on the Home tab, shown as an icon with text wrapping onto a second line.",
    },
    {
        question: "What visibly happens to a row's height after Wrap Text is turned on for long content?",
        options: [
            "The row height stays exactly the same",
            "The row height automatically increases to fit the wrapped lines",
            "The row height decreases",
            "The column width changes instead",
        ],
        answer: 1,
        explanation:
            "Once text wraps onto multiple lines, Excel automatically increases the row height so every line remains visible.",
    },
    {
        question: "Without Wrap Text, what happens to long text in a cell if the cell to its right is empty?",
        options: [
            "It gets deleted",
            "It visually spills over into the empty cell(s) to the right",
            "It automatically wraps anyway",
            "Excel shows an error",
        ],
        answer: 1,
        explanation:
            "By default, if the neighboring cell is empty, long text simply overflows visually into it — though the text still belongs only to the original cell.",
    },
    {
        question: "What happens to long text if Wrap Text is off AND the cell to its right already contains data?",
        options: [
            "It automatically wraps",
            "It gets visually cut off, showing only as much as fits in the column width",
            "It deletes the neighboring cell's data",
            "It creates a new row",
        ],
        answer: 1,
        explanation:
            "When the neighboring cell isn't empty, overflowing text has nowhere to spill into, so it appears truncated — though the full text is still stored in the cell.",
    },
    {
        question: "A feedback column has long customer comments that keep getting cut off visually. What's the best fix?",
        options: [
            "Manually press Enter inside every cell to force line breaks",
            "Turn on Wrap Text for that column",
            "Delete the long comments",
            "Use Freeze Panes",
        ],
        answer: 1,
        explanation:
            "Turning on Wrap Text automatically breaks long comments into multiple lines within their cells, without manually editing each entry.",
    },
];

export default function WrapText() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Wrap Text does and why long content needs it.</li>
                    <li>See what happens to text when Wrap Text is off, in different situations.</li>
                    <li>Learn how to turn Wrap Text on and off.</li>
                    <li>Understand how Wrap Text affects row height.</li>
                    <li>Avoid common mistakes when working with long text.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Type a long sentence like "Delivery was delayed due to weather
                    conditions in the northern region" into a single cell, and it
                    either spills messily into the next cell, or gets visually cut
                    off entirely. <strong>Wrap Text</strong> fixes this by neatly
                    breaking the sentence into multiple lines — all within the same
                    cell.
                </p>

                <InfoBox>
                    <p>
                        Wrap Text never changes your actual data — the full sentence
                        is always stored in that one cell. It only changes how the
                        text is displayed visually.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Wrap Text?">

                <ImageCard
                    src="/images/lessons/formatting/wrap-text-icon-home-tab.png"
                    alt="Wrap Text icon in the Alignment group"
                    caption="Wrap Text is in the Alignment group on the Home tab, next to Merge & Center."
                />

            </LessonSection>

            {/* What happens without wrap text */}

            <LessonSection title="What Happens Without Wrap Text?">

                <p>
                    Before turning it on, it helps to understand exactly what
                    problem Wrap Text solves — long text behaves differently
                    depending on the neighboring cell.
                </p>

                <LessonTable
                    headers={["Situation", "What You See"]}
                    rows={[
                        ["Neighboring cell is empty", "Text visually spills over into that empty cell, looking like it belongs to both"],
                        ["Neighboring cell has data", "Text gets visually cut off at the column's edge, hiding the rest"],
                        ["Either case", "The full text is still stored safely in the original cell — only the display looks wrong"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        Cell A1 contains "Monthly Sales Report for the Northern
                        Region." If B1 is empty, the full sentence appears to
                        stretch across both cells. But if B1 already has "March,"
                        A1's text suddenly looks cut off as "Monthly Sales Repo..."
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Turning on wrap text */}

            <LessonSection title="Turning On Wrap Text">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cell or range containing long text."],
                        ["2", "Go to Home tab → Alignment group."],
                        ["3", "Click the Wrap Text icon (looks like text wrapping onto a second line)."],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        A feedback form's "Comments" column has entries like
                        "Product arrived slightly damaged but customer service
                        resolved it quickly." Turning on Wrap Text for this column
                        breaks each comment into 2–3 neat lines, staying fully
                        readable within a reasonably sized column.
                    </p>
                </ExampleBox>

                <TipBox>
                    <p>
                        Clicking Wrap Text again toggles it off, returning the cell
                        to its original single-line display.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Effect on row height */}

            <LessonSection title="How Wrap Text Affects Row Height">

                <p>
                    Once text wraps onto multiple lines, Excel automatically
                    increases the row's height so every line stays fully visible —
                    you don't need to manually resize anything.
                </p>

                <ExampleBox title="Example">
                    <p>
                        A row with a single line of text might be 15 pixels tall.
                        After Wrap Text breaks a long sentence into 3 lines, that
                        same row automatically grows to about 45 pixels tall,
                        keeping the whole sentence visible.
                    </p>
                </ExampleBox>

                <InfoBox>
                    <p>
                        If a wrapped row still looks too short, you may have
                        manually resized the row earlier — right-click the row
                        number and choose 'Row Height' → 'AutoFit' to let Excel
                        recalculate it automatically.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Wrap text vs widening column */}

            <LessonSection title="Wrap Text vs Simply Widening the Column">

                <p>
                    Sometimes widening a column is actually a better fix than
                    wrapping text — here's how to decide:
                </p>

                <LessonTable
                    headers={["Widen the Column", "Use Wrap Text"]}
                    rows={[
                        ["Best for moderately long text that fits in one readable line when widened", "Best for genuinely long text (sentences, paragraphs) that would need an unreasonably wide column"],
                        ["Keeps rows short and consistent", "Keeps columns narrow, but rows taller"],
                        ["Good for names, short labels", "Good for comments, descriptions, addresses"],
                    ]}
                />

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you manage a customer support tracker with a "Complaint
                    Description" column containing detailed, multi-sentence
                    entries. Without Wrap Text, most of each description would be
                    hidden behind neighboring columns. Turning on Wrap Text for
                    that column keeps every complaint fully visible and readable,
                    without needing an impractically wide column.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An HR team maintains an "Address" column for 200 employees,
                        where addresses vary in length. Wrap Text ensures every
                        address displays fully within its cell, keeping the sheet
                        neat regardless of how long each address is.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Shortcuts and tricks */}

            <LessonSection title="Excel Tricks & Shortcuts for Wrap Text">

                <LessonTable
                    headers={["Shortcut / Trick", "What It Does"]}
                    rows={[
                        ["Alt + H, W", "Toggles Wrap Text on the selected cells using the keyboard"],
                        ["Alt + Enter (while typing in a cell)", "Manually forces a line break at a specific point, without needing Wrap Text turned on"],
                        ["Double-click row border after wrapping", "Auto-fits the row height precisely to the wrapped text"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> Use <strong>Alt + Enter</strong>{" "}
                        when you want a line break at one exact spot (like after a
                        comma), rather than letting Wrap Text decide where lines
                        break automatically.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Manually pressing Enter to break lines instead of using Wrap Text, which looks inconsistent across cells.</li>
                    <li>Turning on Wrap Text for very short text, unnecessarily increasing row height.</li>
                    <li>Not using AutoFit Row Height after wrapping, leaving rows either too short or oddly tall.</li>
                    <li>Assuming cut-off text (without Wrap Text) means the data was lost — it's still there, just hidden visually.</li>
                    <li>Wrapping text on an entire column when only a few long entries actually need it.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Use Wrap Text for genuinely long content like comments, descriptions, or addresses.</li>
                    <li>Try widening the column first for moderately long text — it often looks cleaner than wrapping.</li>
                    <li>Use Alt + Enter for a deliberate, single line break instead of relying on automatic wrapping.</li>
                    <li>Use Row Height → AutoFit if wrapped rows look inconsistent after applying Wrap Text.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Wrap Text breaks long content into multiple lines within the same cell, without changing the actual data.",
                    "Without it, long text either spills into empty neighboring cells or gets visually cut off.",
                    "Turning on Wrap Text automatically increases the row height to fit all the wrapped lines.",
                    "Alt + Enter creates a manual line break at a specific point, as an alternative to automatic wrapping.",
                    "Widening a column is sometimes a cleaner fix than wrapping, depending on the content.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}