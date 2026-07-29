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
        question: "Which keyboard shortcut makes selected text Bold?",
        options: ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + N"],
        answer: 0,
        explanation:
            "Ctrl + B instantly makes the selected cell's text bold, without needing to open the Ribbon.",
    },
    {
        question: "Which Ribbon tab holds the Font formatting options like Bold, Italic, and Font Color?",
        options: ["Insert", "Home", "Data", "Formulas"],
        answer: 1,
        explanation:
            "All basic font formatting tools live in the Font group under the Home tab.",
    },
    {
        question: "What is the shortcut to underline selected text?",
        options: ["Ctrl + U", "Ctrl + E", "Ctrl + L", "Ctrl + Shift + U"],
        answer: 0,
        explanation:
            "Ctrl + U applies or removes an underline from the selected text.",
    },
    {
        question: "Which tool copies only the formatting (font, color, borders) from one cell to another, without copying the data?",
        options: ["Fill Handle", "Format Painter", "Flash Fill", "Find and Replace"],
        answer: 1,
        explanation:
            "Format Painter copies just the formatting style of a cell so you can apply it elsewhere without affecting the actual data.",
    },
    {
        question: "How do you apply Format Painter to multiple different areas without clicking it again each time?",
        options: [
            "Right-click the destination cells",
            "Double-click the Format Painter button before selecting the areas",
            "Press Ctrl + P",
            "It's not possible",
        ],
        answer: 1,
        explanation:
            "Double-clicking Format Painter keeps it 'locked on,' letting you apply the same formatting to multiple non-adjacent areas until you press Esc.",
    },
    {
        question: "A manager wants the header row of a report to be bold, colored, and centered — matching a header from another sheet exactly. What's the fastest way?",
        options: [
            "Manually apply Bold, Color, and Center one by one on the new header",
            "Select the existing formatted header, use Format Painter, then click the new header",
            "Retype the entire header row",
            "Use Find and Replace",
        ],
        answer: 1,
        explanation:
            "Format Painter copies the exact combination of formatting (bold, color, alignment) in one click, instead of applying each style manually.",
    },
];

export default function FontFormatting() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Font Formatting is and why it matters.</li>
                    <li>Learn to apply Bold, Italic, Underline, and Font Color.</li>
                    <li>Change font style, size, and text alignment.</li>
                    <li>Use Format Painter to copy formatting instantly.</li>
                    <li>Learn essential shortcuts and tricks to format faster.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Two Excel sheets can have the exact same data, but look
                    completely different. One is a plain, hard-to-read wall of
                    numbers. The other has bold headers, colored highlights, and
                    clear alignment — instantly easier to understand.{" "}
                    <strong>Font Formatting</strong> is what makes that difference.
                </p>

                <p className="mt-3">
                    Formatting doesn't change your data — it only changes how it{" "}
                    <em>looks</em>, making reports more professional and easier to
                    read at a glance.
                </p>

                <InfoBox>
                    <p>
                        Good formatting isn't about making a sheet "pretty" — it's
                        about helping the reader instantly understand what's important.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Font Formatting Tools?">

                <ImageCard
                    src="/images/lessons/formatting/font-group-home-tab.png"
                    alt="Excel Font group on the Home tab"
                    caption="All font formatting tools are grouped together in the Font section of the Home tab."
                />

            </LessonSection>

            {/* Basic formatting */}

            <LessonSection title="Basic Text Formatting">

                <p>
                    These are the most commonly used formatting tools, found in the
                    Font group of the Home tab:
                </p>

                <LessonTable
                    headers={["Tool", "What It Does", "Shortcut"]}
                    rows={[
                        ["Bold", "Makes text thicker and more prominent", "Ctrl + B"],
                        ["Italic", "Slants text, often used for notes or emphasis", "Ctrl + I"],
                        ["Underline", "Adds a line below the text", "Ctrl + U"],
                        ["Font Color", "Changes the color of the text itself", "—"],
                        ["Fill Color", "Changes the background color of the cell", "—"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        Select the header row of a sales report — "Date," "Product,"
                        "Amount" — and press <strong>Ctrl + B</strong>. All three
                        headers instantly become bold, making them stand out from the
                        data below.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Font style and size */}

            <LessonSection title="Changing Font Style and Size">

                <p>
                    Beyond bold and color, you can also change the actual typeface
                    and how large or small it appears.
                </p>

                <LessonTable
                    headers={["Setting", "Where to Find It", "Example Use"]}
                    rows={[
                        ["Font Style", "Dropdown showing 'Calibri' by default, in the Font group", "Switching to 'Arial' for a cleaner, formal report"],
                        ["Font Size", "Number dropdown next to Font Style (usually 11)", "Increasing headers to size 14 or 16 to stand out"],
                        ["Font Color", "Paint-bucket-style 'A' icon with a color underline", "Making negative numbers red for quick visibility"],
                    ]}
                />

                <TipBox>
                    <p>
                        Keep font sizes consistent across similar data — for example,
                        all headers at size 12 and all data at size 11 — so your sheet
                        looks organized rather than random.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Alignment */}

            <LessonSection title="Text Alignment">

                <p>
                    Alignment controls where text sits inside a cell — helpful for
                    making tables look neat and readable.
                </p>

                <LessonTable
                    headers={["Alignment", "Best Used For"]}
                    rows={[
                        ["Left Align", "Text data, like names or descriptions (Excel's default for text)"],
                        ["Center Align", "Headers, short labels, or single words that need emphasis"],
                        ["Right Align", "Numbers and currency (Excel's default for numbers)"],
                    ]}
                />

            </LessonSection>

            {/* Format painter */}

            <LessonSection title="Format Painter: Copying Formatting Instantly">

                <p>
                    Once you've styled one cell exactly how you want — bold, colored,
                    centered — you don't need to repeat every step elsewhere.{" "}
                    <strong>Format Painter</strong> copies just the formatting, not
                    the data, onto other cells.
                </p>

                <ExampleBox title="Real-Life Example">
                    <p>
                        Your "January" sheet has a perfectly formatted header row
                        (bold, blue background, centered). Instead of manually
                        recreating this on the "February" sheet, select the January
                        header, click <strong>Format Painter</strong>, then click and
                        drag over the February header — it instantly matches.
                    </p>
                </ExampleBox>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cell with the formatting you want to copy."],
                        ["2", "Click Format Painter (paintbrush icon) on the Home tab."],
                        ["3", "Click or drag over the cells you want to apply the formatting to."],
                    ]}
                />

                <TipBox>
                    <p>
                        Need to apply the same formatting to several different areas?
                        <strong> Double-click</strong> Format Painter instead of
                        single-clicking — it stays active until you press{" "}
                        <strong>Esc</strong>.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you're preparing a monthly report for your manager. Raw,
                    unformatted numbers are hard to scan quickly. By bolding headers,
                    coloring negative values red, and aligning numbers to the right,
                    the same data becomes instantly easier to review — helping your
                    manager spot problems faster.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        A finance team formats every report with the same style —
                        bold blue headers and red negative numbers — using Format
                        Painter to copy the formatting instantly across dozens of
                        sheets, keeping every report visually consistent.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Excel tricks and shortcuts */}

            <LessonSection title="Excel Tricks & Shortcuts for Formatting">

                <p>
                    A few extra shortcuts can make formatting significantly faster
                    once you get used to them:
                </p>

                <LessonTable
                    headers={["Shortcut", "What It Does"]}
                    rows={[
                        ["Ctrl + B", "Bold the selected text"],
                        ["Ctrl + I", "Italicize the selected text"],
                        ["Ctrl + U", "Underline the selected text"],
                        ["Ctrl + 1", "Opens the Format Cells dialog for full control (font, borders, number format)"],
                        ["Ctrl + Shift + &", "Adds a border around the selected cells"],
                        ["Ctrl + Shift + ~", "Applies the General number format (removes special formatting)"],
                        ["Double-click Format Painter", "Keeps Format Painter active for multiple areas"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> Press <strong>Ctrl + 1</strong> any
                        time you want more control than the Ribbon offers — it opens
                        the full Format Cells dialog with every formatting option in
                        one place.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Using too many colors and fonts, making the sheet look cluttered instead of clear.</li>
                    <li>Forgetting to use Format Painter, leading to inconsistent formatting across sheets.</li>
                    <li>Bolding entire rows instead of just headers, reducing visual contrast.</li>
                    <li>Choosing font colors with poor contrast, making text hard to read.</li>
                    <li>Manually reformatting cells instead of using Ctrl + 1 or Format Painter for speed.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <LessonSection title="Professional Tips">

                <TipBox>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Stick to 1–2 fonts and 2–3 colors per report for a clean, professional look.</li>
                        <li>Use bold only for headers or key figures — overusing it reduces its impact.</li>
                        <li>Use Format Painter to keep formatting consistent across multiple sheets.</li>
                        <li>Right-align numbers and left-align text for cleaner-looking tables.</li>
                        <li>Learn Ctrl + 1 (Format Cells) — it's faster than clicking through Ribbon icons one by one.</li>
                    </ul>
                </TipBox>

            </LessonSection>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Font Formatting changes how data looks — bold, italic, underline, color — without changing the data itself.",
                    "Basic formatting tools are found in the Font group on the Home tab.",
                    "Alignment (left, center, right) helps organize text and numbers clearly.",
                    "Format Painter copies formatting from one cell to another instantly.",
                    "Double-clicking Format Painter lets you apply formatting to multiple areas at once.",
                    "Ctrl + 1 opens Format Cells for complete control over every formatting option.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}