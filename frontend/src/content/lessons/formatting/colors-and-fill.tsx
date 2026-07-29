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
        question: "Which tool changes the background color of a cell?",
        options: ["Font Color", "Fill Color", "Borders", "Wrap Text"],
        answer: 1,
        explanation:
            "Fill Color changes the background of the cell itself, while Font Color changes only the color of the text inside it.",
    },
    {
        question: "Which Ribbon tab contains both Font Color and Fill Color?",
        options: ["Insert", "Home", "View", "Data"],
        answer: 1,
        explanation:
            "Both Font Color and Fill Color are found in the Font group on the Home tab.",
    },
    {
        question: "Repeating the last used Fill Color on a new cell can be done by simply clicking which part of the Fill Color button?",
        options: [
            "The dropdown arrow next to the bucket icon",
            "The bucket icon itself, not the arrow",
            "The Font Color icon",
            "The Borders icon",
        ],
        answer: 1,
        explanation:
            "Clicking directly on the paint bucket icon (not the dropdown arrow) instantly applies whatever color was used last, without reopening the color picker.",
    },
    {
        question: "A finance report needs negative numbers to visually stand out as red. Which tool would best achieve this quickly for many cells at once?",
        options: ["Fill Color", "Conditional Formatting", "Merge & Center", "Freeze Panes"],
        answer: 1,
        explanation:
            "Conditional Formatting can automatically color cells red whenever their value meets a condition (like being negative), without manually selecting each one.",
    },
    {
        question: "Why should you avoid using bright colors like neon green or hot pink as Fill Color for large data areas?",
        options: [
            "Excel doesn't allow it",
            "It reduces readability and looks unprofessional in reports",
            "It slows down the file",
            "It changes the actual data",
        ],
        answer: 1,
        explanation:
            "Bright, saturated fill colors make text harder to read and appear unprofessional — light, muted shades work better for large areas.",
    },
    {
        question: "An HR manager wants only the header row of an employee sheet to have a light blue background with white bold text. What combination of tools is needed?",
        options: [
            "Fill Color (light blue) + Font Color (white) + Bold",
            "Only Font Color",
            "Only Borders",
            "Only Wrap Text",
        ],
        answer: 0,
        explanation:
            "Achieving this look requires Fill Color for the background, Font Color to make the text white, and Bold to make the header stand out.",
    },
];

export default function ColorsAndFill() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand the difference between Font Color and Fill Color.</li>
                    <li>Learn how to apply and reuse colors quickly.</li>
                    <li>Use color combinations to highlight important data.</li>
                    <li>Learn a few good practices for choosing colors in reports.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    A plain black-and-white spreadsheet can be hard to scan quickly —
                    but the moment you add a light background to headers or color
                    negative numbers red, the same data suddenly becomes much easier
                    to understand at a glance. This is the power of{" "}
                    <strong>Colors and Fill</strong> in Excel.
                </p>

                <p className="mt-3">
                    Used well, color draws the eye exactly where it needs to go.
                    Used poorly, it can make a sheet distracting and hard to read —
                    so knowing the tools and a few good habits matters just as much
                    as knowing the buttons.
                </p>

                <InfoBox>
                    <p>
                        Color should always support the data, not distract from it —
                        the goal is to guide the reader's eye, not decorate the sheet.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Color Tools?">

                <ImageCard
                    src="/images/lessons/formatting/font-fill-color-home-tab.png"
                    alt="Font Color and Fill Color icons on the Home tab"
                    caption="Font Color and Fill Color sit next to each other in the Font group on the Home tab."
                />

            </LessonSection>

            {/* Font color vs fill color */}

            <LessonSection title="Font Color vs Fill Color">

                <p>
                    These two tools sit right next to each other and are often
                    confused by beginners — here's the clear difference:
                </p>

                <LessonTable
                    headers={["Font Color", "Fill Color"]}
                    rows={[
                        ["Changes the color of the text itself", "Changes the background color of the cell"],
                        ["Icon looks like an 'A' with a color bar under it", "Icon looks like a paint bucket"],
                        ["Used to highlight specific values, like red text for losses", "Used to highlight entire cells, like a colored header row"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        In a sales report, you might set the "Total" cell's{" "}
                        <strong>Fill Color</strong> to light gray, and make the number
                        inside it bold with a dark <strong>Font Color</strong> — both
                        tools working together to make it stand out.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Applying colors */}

            <LessonSection title="Applying Colors: Step by Step">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cell or range you want to color."],
                        ["2", "Click the dropdown arrow next to Fill Color or Font Color."],
                        ["3", "Choose a color from the palette, or click 'More Colors' for custom shades."],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Quick trick:</strong> Once you've picked a color, you
                        can apply that same color to other cells just by clicking the
                        paint bucket icon itself (not the dropdown arrow) — it
                        instantly reuses the last color you chose.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Using color for meaning */}

            <LessonSection title="Using Color to Highlight Meaning">

                <p>
                    Beyond decoration, color is often used to instantly communicate
                    meaning in a report — without the reader needing to read every
                    number carefully.
                </p>

                <LessonTable
                    headers={["Use Case", "Common Color Choice"]}
                    rows={[
                        ["Header rows", "Light blue, gray, or dark fill with white bold text"],
                        ["Negative values or losses", "Red text"],
                        ["Positive values or profits", "Green text"],
                        ["Cells needing review", "Yellow fill"],
                        ["Completed or approved items", "Light green fill"],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        An HR manager formats an employee sheet's header row with a
                        light blue Fill Color and white, bold Font Color — making it
                        instantly clear where the data starts, even after scrolling
                        far down the sheet.
                    </p>
                </ExampleBox>

                <InfoBox>
                    <p>
                        For highlighting values automatically based on a rule — like
                        coloring every negative number red without selecting each one
                        — Excel offers a more powerful tool called Conditional
                        Formatting, covered in a later lesson.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you're preparing a budget report. The header row gets a
                    dark fill with white text, expense categories over budget are
                    manually marked with red text, and categories under budget are
                    marked green — turning a plain table of numbers into a report
                    that tells a story at a glance.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        A project manager color-codes a task tracker — yellow fill for
                        pending tasks, light green for completed ones — so the entire
                        team can check project status without reading a single word.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Shortcuts and tricks */}

            <LessonSection title="Excel Tricks & Shortcuts for Colors">

                <LessonTable
                    headers={["Shortcut / Trick", "What It Does"]}
                    rows={[
                        ["Click the bucket/A icon directly (not the arrow)", "Reapplies the last used Fill Color or Font Color instantly"],
                        ["Ctrl + 1", "Opens Format Cells → Fill tab for patterns and custom colors"],
                        ["Format Painter", "Copies a cell's exact Fill Color and Font Color combination onto other cells"],
                    ]}
                />

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Using too many different colors, making the sheet look chaotic instead of clear.</li>
                    <li>Choosing bright, saturated colors that make text hard to read.</li>
                    <li>Confusing Font Color with Fill Color and picking the wrong one.</li>
                    <li>Manually coloring hundreds of cells one by one instead of using Conditional Formatting for rule-based highlighting.</li>
                    <li>Forgetting that dark fill colors need light font colors (like white) to stay readable.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Stick to 2–3 colors per report for a clean, professional appearance.</li>
                    <li>Use light, muted fills for large areas and reserve bold colors for key highlights.</li>
                    <li>Always check that text remains easily readable against its background color.</li>
                    <li>Use the same color meaning consistently across a report — for example, red should always mean the same thing.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Font Color changes text color, while Fill Color changes a cell's background.",
                    "Clicking the color icon directly (not the dropdown) reuses the last color instantly.",
                    "Color is often used to communicate meaning — red for losses, green for profits, yellow for pending items.",
                    "Format Painter can copy an entire color combination from one cell to others.",
                    "Good color use guides the reader's eye; overusing color creates clutter instead of clarity.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}