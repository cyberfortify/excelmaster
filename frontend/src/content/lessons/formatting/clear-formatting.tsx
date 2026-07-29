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
        question: "What does 'Clear Formatting' do to a cell?",
        options: [
            "Deletes the data but keeps the formatting",
            "Removes all formatting (color, bold, borders) while keeping the actual data",
            "Deletes both the data and formatting",
            "Only removes borders",
        ],
        answer: 1,
        explanation:
            "Clear Formatting strips away all visual styling — color, bold, borders, number format — but leaves the underlying data completely untouched.",
    },
    {
        question: "Which keyboard shortcut clears formatting from selected cells?",
        options: ["Ctrl + Shift + ~", "Alt + H, E, F", "Delete", "Ctrl + Z"],
        answer: 1,
        explanation:
            "Alt + H, E, F is the Ribbon key-tip shortcut for Clear Formats — pressing these keys in sequence removes formatting instantly.",
    },
    {
        question: "If you press the Delete key on a selected cell, does it remove formatting like Fill Color?",
        options: [
            "Yes, Delete removes both data and formatting",
            "No, Delete only removes the data/content — formatting like color and borders remain",
            "Delete removes only borders",
            "Delete does nothing to a cell",
        ],
        answer: 1,
        explanation:
            "A common surprise for beginners: pressing Delete clears only the cell's content, not its formatting — the fill color, borders, or bold styling stay behind.",
    },
    {
        question: "Where is the 'Clear' menu (including Clear Formats) located?",
        options: ["Insert tab", "Home tab, in the Editing group (eraser icon)", "View tab", "Data tab"],
        answer: 1,
        explanation:
            "The Clear menu, shown as an eraser icon, is in the Editing group at the far right of the Home tab.",
    },
    {
        question: "What is the difference between 'Clear Formats' and 'Clear All'?",
        options: [
            "They are identical",
            "Clear Formats removes only formatting; Clear All removes formatting, content, and comments together",
            "Clear All only removes borders",
            "Clear Formats deletes the data",
        ],
        answer: 1,
        explanation:
            "Clear Formats leaves your data intact and removes only the visual styling, while Clear All wipes out formatting, content, comments, and hyperlinks all at once.",
    },
    {
        question: "A worksheet was copy-pasted from another file and now has messy fonts, random colors, and inconsistent borders, but the numbers themselves are correct. What's the fastest fix?",
        options: [
            "Retype all the data from scratch",
            "Select the range and use Clear Formats to strip the messy styling, then reformat cleanly",
            "Delete the entire worksheet",
            "Use Freeze Panes",
        ],
        answer: 1,
        explanation:
            "Clear Formats instantly removes all the inconsistent, messy styling while preserving the correct data underneath, giving you a clean slate to reformat properly.",
    },
];

export default function ClearFormatting() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Clear Formatting does and why it's different from Delete.</li>
                    <li>Learn the difference between Clear Formats, Clear Contents, and Clear All.</li>
                    <li>Use Clear Formatting to fix messy, inherited formatting.</li>
                    <li>Learn the shortcut for clearing formatting quickly.</li>
                    <li>Avoid common mistakes that accidentally delete data along with formatting.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    You've pasted data from another file, and now your worksheet is
                    a mess — random fonts, odd colors, strange borders — but the
                    actual numbers are exactly what you need. Retyping everything
                    would be wasteful. This is exactly where{" "}
                    <strong>Clear Formatting</strong> helps: it wipes away the messy
                    styling while keeping your data perfectly intact.
                </p>

                <InfoBox>
                    <p>
                        Clear Formatting is like erasing pencil markings on a page
                        without touching the printed text underneath — only the
                        visual decoration disappears.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Clear Formatting?">

                <ImageCard
                    src="/images/lessons/formatting/clear-formats-eraser-icon.png"
                    alt="Clear Formats eraser icon on the Home tab"
                    caption="The Clear menu (eraser icon) is in the Editing group, at the far right of the Home tab."
                />

            </LessonSection>

            {/* Delete vs clear formatting - key confusion */}

            <LessonSection title="Delete Key vs Clear Formatting: A Common Surprise">

                <p>
                    Many beginners assume pressing the <strong>Delete</strong> key
                    removes everything about a cell — but it doesn't. This is one of
                    the most useful things to understand early on.
                </p>

                <LessonTable
                    headers={["Pressing Delete", "Using Clear Formats"]}
                    rows={[
                        ["Removes the content (text/numbers)", "Removes the formatting (color, bold, borders)"],
                        ["Formatting like Fill Color remains", "Data remains untouched"],
                        ["Cell looks empty but may still have colored borders or fill", "Cell keeps its data but returns to plain, default styling"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        A cell with a yellow fill and the number "500" — pressing{" "}
                        <strong>Delete</strong> removes "500" but the yellow fill
                        stays behind on the now-empty cell. Using{" "}
                        <strong>Clear Formats</strong> instead would keep "500" but
                        remove the yellow fill.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* The three clear options */}

            <LessonSection title="The Three 'Clear' Options">

                <p>
                    Clicking the eraser icon on the Home tab reveals several
                    options, each clearing something different.
                </p>

                <LessonTable
                    headers={["Option", "What It Removes", "What Stays"]}
                    rows={[
                        ["Clear Formats", "Font, color, borders, number format", "Data, comments, hyperlinks"],
                        ["Clear Contents", "Only the data/text/numbers", "Formatting stays exactly the same"],
                        ["Clear Comments", "Only comments/notes attached to the cell", "Data and formatting stay"],
                        ["Clear Hyperlinks", "Only the hyperlink, not the text itself", "Data and formatting stay"],
                        ["Clear All", "Everything — formatting, content, comments, hyperlinks", "Nothing; the cell becomes completely blank"],
                    ]}
                />

                <TipBox>
                    <p>
                        Think of "Clear Contents" as the opposite of "Clear Formats"
                        — one keeps the look and removes the data, the other keeps
                        the data and removes the look.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Step by step */}

            <LessonSection title="How to Clear Formatting: Step by Step">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cell or range with messy or unwanted formatting."],
                        ["2", "Go to Home tab → Editing group → click the eraser icon."],
                        ["3", "Choose 'Clear Formats' from the dropdown."],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        Data copied from a website into Excel often carries strange
                        fonts, colors, and cell sizes. Selecting the pasted range and
                        clicking <strong>Clear Formats</strong> strips all of that
                        away instantly, leaving clean data ready for your own
                        formatting.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* When to use it */}

            <LessonSection title="When Should You Use Clear Formatting?">

                <LessonTable
                    headers={["Situation", "Why Clear Formatting Helps"]}
                    rows={[
                        ["Data pasted from another file or website", "Removes inherited fonts, colors, and sizing that don't match your report"],
                        ["A cell has leftover Conditional Formatting colors", "Resets the cell back to plain, default appearance"],
                        ["Starting a fresh design on an old, heavily formatted sheet", "Gives you a clean base instead of fighting old styles"],
                        ["A number format is stuck (e.g., showing as Currency by mistake)", "Removing the format lets you reapply the correct one from scratch"],
                    ]}
                />

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you're an analyst who receives a report every week from
                    a different vendor, each with its own inconsistent formatting —
                    strange fonts, random colors, uneven borders. Instead of
                    manually resetting each style one by one, selecting the entire
                    sheet and clicking Clear Formats instantly gives you a blank,
                    consistent canvas to apply your own company's formatting style.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An HR executive imports a payroll sheet where currency
                        formatting was applied to non-currency ID numbers by mistake.
                        Using Clear Formats resets those cells back to General,
                        instantly fixing the display issue without affecting the
                        actual ID values.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Shortcuts and tricks */}

            <LessonSection title="Excel Tricks & Shortcuts for Clearing Formatting">

                <LessonTable
                    headers={["Shortcut / Trick", "What It Does"]}
                    rows={[
                        ["Alt + H, E, F", "Clears formatting from selected cells using the keyboard"],
                        ["Ctrl + Shift + ~", "Quickly resets number format to General (not a full format clear, but fixes most format-stuck issues)"],
                        ["Select entire sheet (Ctrl + A) before Clear Formats", "Resets formatting across the whole worksheet in one action"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> Clear Formats before reapplying
                        Cell Styles or Themes — starting from a clean slate avoids
                        old formatting clashing with new styles.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Clicking 'Clear All' by mistake, accidentally deleting the actual data along with formatting.</li>
                    <li>Assuming Delete removes formatting too, then being confused why old colors and borders remain.</li>
                    <li>Clearing formatting on an entire sheet when only one section needed it, losing intentional styling elsewhere.</li>
                    <li>Not realizing Conditional Formatting rules aren't removed by Clear Formats — they need to be cleared separately via Manage Rules.</li>
                    <li>Forgetting to reapply necessary formatting (like Currency) after clearing, leaving numbers looking plain.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Always select the exact range you need before clearing, to avoid affecting unrelated cells.</li>
                    <li>Use Clear Formats (not Clear All) whenever your data itself is correct and only the look is wrong.</li>
                    <li>Clear formatting before pasting new Cell Styles or Themes for a cleaner result.</li>
                    <li>Double-check with Ctrl + Z immediately if you're unsure whether Clear All was the right choice.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Clear Formatting removes all visual styling — color, bold, borders — while keeping the actual data.",
                    "Pressing Delete only removes content; it does not remove formatting like Fill Color.",
                    "Clear Contents removes only data; Clear Formats removes only styling; Clear All removes everything.",
                    "It's especially useful for cleaning up data pasted from other files or websites.",
                    "Alt + H, E, F is the keyboard shortcut for clearing formatting quickly.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}