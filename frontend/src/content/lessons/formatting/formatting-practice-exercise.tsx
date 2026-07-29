import LessonSection from "../../../components/lesson/content/LessonSection";
import InfoBox from "../../../components/lesson/content/InfoBox";
import TipBox from "../../../components/lesson/content/TipBox";
import SummaryBox from "../../../components/lesson/content/SummaryBox";
import PracticeCard from "../../../components/lesson/content/PracticeCard";

const questions = [
    // 1. Copy, Cut & Paste
    {
        question: "You cut a cell (Ctrl+X) and paste it elsewhere. What happens to any formulas in other cells that referenced the original cell?",
        options: [
            "They break and show #REF!",
            "They automatically update to point to the new location",
            "They stay pointing at the old (now empty) location",
            "They get deleted",
        ],
        answer: 1,
        explanation:
            "Cut & Paste updates all formula references automatically to follow the moved cell — unlike Copy, which leaves references untouched.",
    },
    // 2. AutoFill
    {
        question: "You type 'Monday' in a cell and drag the fill handle down 6 rows. What does AutoFill do?",
        options: [
            "Repeats 'Monday' in every cell",
            "Continues the weekday pattern: Tuesday, Wednesday, Thursday...",
            "Leaves the cells empty",
            "Shows an error since it's text, not a number",
        ],
        answer: 1,
        explanation:
            "AutoFill recognizes built-in lists like weekdays and month names, and continues the sequence automatically when dragged.",
    },
    // 3. Flash Fill
    {
        question: "Column A has full names like 'Aadi Sharma'. You type 'Aadi' in column B and press Ctrl+E. What does Flash Fill do?",
        options: [
            "Deletes column A",
            "Detects the first-name pattern and fills the rest of column B automatically",
            "Copies column A exactly as-is",
            "Nothing happens without selecting the whole column first",
        ],
        answer: 1,
        explanation:
            "Flash Fill studies the pattern in your first example and applies the same logic (extracting first names, in this case) to the rest of the column.",
    },
    // 4. Find & Replace
    {
        question: "You want to replace '2023' with '2024' only inside a specific selected range, not the whole sheet. What should you do first?",
        options: [
            "Nothing — Find & Replace always searches the whole sheet",
            "Select the range first, then open Find & Replace",
            "Rename the sheet",
            "Use AutoFill instead",
        ],
        answer: 1,
        explanation:
            "If you select a range before opening Find & Replace, it limits the search/replace to that range only, instead of scanning the entire sheet.",
    },
    // 5. Font Formatting
    {
        question: "Which of these is NOT a font formatting option?",
        options: ["Bold, Italic, Underline", "Font size and font color", "Font family (like Calibri or Arial)", "Row height"],
        answer: 3,
        explanation:
            "Row height is a layout setting, not a font attribute — font formatting covers style, size, color, and typeface.",
    },
    // 6. Cell Alignment
    {
        question: "By default, why do numbers align to the right and text aligns to the left in Excel?",
        options: [
            "It's random and can't be changed",
            "It's Excel's default alignment behavior based on data type, though it can be manually overridden",
            "Excel doesn't have default alignment",
            "Only numbers can be aligned, text cannot",
        ],
        answer: 1,
        explanation:
            "Excel automatically right-aligns numbers and left-aligns text by default, but you can always manually change alignment using the Alignment group on the Home tab.",
    },
    // 7. Borders
    {
        question: "You want a thick outer border around a whole table but thin borders between individual cells. What's the best approach?",
        options: [
            "Apply 'All Borders' only",
            "Use 'More Borders' in Format Cells to set outer and inner borders with different thickness separately",
            "Manually draw each border with a pen",
            "This isn't possible in Excel",
        ],
        answer: 1,
        explanation:
            "The Format Cells → Border tab lets you set outline and inside borders independently, including different line styles and thicknesses for each.",
    },
    // 8. Colors & Fill
    {
        question: "What's the difference between 'Font Color' and 'Fill Color'?",
        options: [
            "They are the same thing",
            "Font Color changes text color; Fill Color changes the cell's background color",
            "Font Color only works on headers",
            "Fill Color only works on borders",
        ],
        answer: 1,
        explanation:
            "Font Color affects the text inside the cell, while Fill Color affects the background shading of the cell itself.",
    },
    // 9. Number Formats
    {
        question: "A cell shows '####' after you type a large number. What's actually wrong?",
        options: [
            "The number is invalid",
            "The column isn't wide enough to display the formatted number",
            "The number format is corrupted",
            "Excel has a bug",
        ],
        answer: 1,
        explanation:
            "'####' simply means the column is too narrow to display the number in its current format — widening the column fixes it instantly.",
    },
    // 10. Date & Time Formats
    {
        question: "You type '3/15' into a cell and Excel shows '15-Mar'. What actually happened?",
        options: [
            "Excel stored it as text",
            "Excel recognized it as a date and stored it as a serial number, displaying it in a date format",
            "Excel deleted the original entry",
            "Excel converted it into a formula",
        ],
        answer: 1,
        explanation:
            "Excel auto-detects date-like entries, converts them into an internal serial number, and displays them using a recognizable date format — the underlying value is still a number.",
    },
    // 11. Format Painter
    {
        question: "You want to copy one cell's formatting to five different, non-adjacent cells without repeating the process five times. What should you do?",
        options: [
            "It's not possible with Format Painter",
            "Double-click Format Painter so it stays active, then click each target cell one by one",
            "Single-click Format Painter and hope it remembers",
            "Copy and paste the cell value five times",
        ],
        answer: 1,
        explanation:
            "A single click on Format Painter applies formatting once; double-clicking keeps it 'locked on' so you can paint multiple cells before pressing Esc to turn it off.",
    },
    // 12. Cell Styles
    {
        question: "What's the main advantage of using a built-in Cell Style like 'Good' or 'Bad' instead of manually coloring cells?",
        options: [
            "Cell Styles are always red",
            "Cell Styles apply a consistent, theme-linked look in one click and update automatically with theme changes",
            "There is no real advantage",
            "Cell Styles can only be applied to numbers",
        ],
        answer: 1,
        explanation:
            "Cell Styles bundle formatting for one-click consistency, and unlike manual colors, they're theme-aware — updating automatically if the workbook's theme changes.",
    },
    // 13. Themes
    {
        question: "If you switch a workbook's Theme, what happens to cells formatted with a Cell Style?",
        options: [
            "Nothing changes",
            "Their colors and fonts automatically update to match the new theme",
            "The Cell Style gets removed",
            "The workbook becomes corrupted",
        ],
        answer: 1,
        explanation:
            "Cell Styles are linked to the active theme, so changing the theme automatically updates the colors and fonts of every style-based cell.",
    },
    // 14. Conditional Formatting Basics
    {
        question: "You want all cells with a value below 50 to turn red automatically, even as data changes. What's the right tool?",
        options: [
            "Manually recolor cells every time data changes",
            "Conditional Formatting with a 'Less Than' rule",
            "Cell Styles",
            "Format Painter",
        ],
        answer: 1,
        explanation:
            "Conditional Formatting applies formatting dynamically based on rules, so cells automatically update their appearance whenever the underlying data changes.",
    },
    // 15. Clear Formatting
    {
        question: "You want to remove all colors, borders, and bold text from a cell, but keep the value inside it. What should you use?",
        options: [
            "Delete key",
            "Clear Formats (Home tab → Clear → Clear Formats)",
            "Clear All",
            "Cut and Paste",
        ],
        answer: 1,
        explanation:
            "'Clear Formats' strips all visual formatting (colors, borders, fonts, number formats) while leaving the actual cell content untouched — unlike 'Clear All', which removes everything.",
    },
    // 16. Wrap Text
    {
        question: "A cell contains a long sentence that's spilling into neighboring cells. What does 'Wrap Text' do to fix this?",
        options: [
            "Shrinks the font until it fits on one line",
            "Breaks the text onto multiple lines within the same cell and increases row height as needed",
            "Deletes the extra text",
            "Automatically widens the column instead",
        ],
        answer: 1,
        explanation:
            "Wrap Text keeps the full content inside the cell's width by wrapping it onto additional lines, expanding the row height to fit — the column width stays the same.",
    },
    // 17. Merge Cells
    {
        question: "You need a title centered across 5 columns of a data table, but the rows below need to stay sortable and filterable. What's the smarter formatting choice?",
        options: [
            "Merge & Center the title cells",
            "Use 'Center Across Selection' from Format Cells instead of merging",
            "Merge the entire table",
            "Leave the title unformatted",
        ],
        answer: 1,
        explanation:
            "'Center Across Selection' visually centers the title without actually merging cells, so sorting and filtering in the table below continues to work normally — real merging can break that.",
    },
    // Mixed scenario question 1
    {
        question: "You copied formatting from a green 'Good' cell using Format Painter onto a plain cell, then later changed the workbook's Theme. What happens to the newly formatted cell?",
        options: [
            "Nothing changes — Format Painter copies are frozen and don't respond to theme changes",
            "It updates automatically, since Format Painter copied the theme-linked Cell Style, not a fixed color",
            "It reverts back to no formatting at all",
            "It turns invisible",
        ],
        answer: 1,
        explanation:
            "Format Painter copies the full formatting definition, including any Cell Style link — so if the original cell used a theme-aware style, the copy stays theme-aware too, and updates with the theme.",
    },
    // Mixed scenario question 2
    {
        question: "A sales sheet has a 'Revenue' column formatted as Currency, and a Conditional Formatting rule highlighting values above ₹1,00,000 in green. If you select the column and click 'Clear Formats', what happens?",
        options: [
            "Only the currency formatting is removed; the conditional formatting stays",
            "Both the Currency number format and the Conditional Formatting rule are removed",
            "Only the Conditional Formatting rule is removed",
            "Nothing is removed since Clear Formats doesn't work on columns",
        ],
        answer: 1,
        explanation:
            "'Clear Formats' removes all applied formatting from a cell or range — including number formats and conditional formatting rules — while leaving the actual data intact.",
    },
];

export default function FormattingPracticeExercise() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Review everything covered in the Formatting module — from Copy/Paste to Merge Cells.</li>
                    <li>Test your understanding with real-life, scenario-based questions.</li>
                    <li>Identify which formatting tool fits which situation, not just what each tool does.</li>
                    <li>Build confidence before moving on to the next module.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    You've made it through the entire <strong>Formatting</strong>{" "}
                    module — 17 lessons covering everything from moving data
                    around with Copy/Cut/Paste, to making it look polished
                    with Fonts, Borders, Colors, Themes, and Conditional
                    Formatting.
                </p>

                <p className="mt-3">
                    This lesson is different — there's no new concept to
                    learn. Instead, it's a mixed practice set pulling one (or
                    more) question from every topic you've covered, plus a
                    few real-world scenarios that combine multiple tools
                    together, the way you'd actually use them at work.
                </p>

                <InfoBox>
                    <p>
                        Don't worry about getting everything right on the
                        first try — the goal here is to spot which topics
                        feel solid and which ones you might want to revisit
                        before moving to the next module.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Quick recap table style section */}

            <LessonSection title="Quick Recap Before You Start">

                <p>
                    Here's a fast reminder of what each tool is best used for
                    — skim this before jumping into the questions below:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Copy, Cut & Paste</strong> — moving or duplicating data, with Cut updating formula references.</li>
                    <li><strong>AutoFill</strong> — dragging to continue patterns like numbers, dates, or weekdays.</li>
                    <li><strong>Flash Fill</strong> — learning a pattern from your first example and applying it instantly.</li>
                    <li><strong>Find & Replace</strong> — searching and swapping text/values across a sheet or selection.</li>
                    <li><strong>Font Formatting</strong> — bold, italic, size, color, and typeface.</li>
                    <li><strong>Cell Alignment</strong> — controlling horizontal/vertical positioning of content.</li>
                    <li><strong>Borders</strong> — adding outlines and dividing lines between cells.</li>
                    <li><strong>Colors & Fill</strong> — background shading vs text color.</li>
                    <li><strong>Number Formats</strong> — displaying numbers as currency, percentage, etc.</li>
                    <li><strong>Date & Time Formats</strong> — controlling how date/time serial numbers are displayed.</li>
                    <li><strong>Format Painter</strong> — copying formatting only, not values, to other cells.</li>
                    <li><strong>Cell Styles</strong> — one-click, theme-aware formatting bundles.</li>
                    <li><strong>Themes</strong> — workbook-wide color, font, and effect coordination.</li>
                    <li><strong>Conditional Formatting</strong> — formatting that reacts automatically to data.</li>
                    <li><strong>Clear Formatting</strong> — stripping formatting while keeping the data.</li>
                    <li><strong>Wrap Text</strong> — fitting long text inside a cell across multiple lines.</li>
                    <li><strong>Merge Cells</strong> — combining multiple cells into one, best used sparingly.</li>
                </ul>

                <TipBox>
                    <p>
                        Notice how many of these tools work together in real
                        spreadsheets — a title might use Merge & Center, a
                        Theme, and Font Formatting all at once. The exercises
                        below test exactly that kind of combined thinking.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Summary */}

            <SummaryBox
                points={[
                    "This lesson reviews all 17 Formatting module topics through scenario-based questions.",
                    "Focus on identifying the right tool for a situation, not just recalling definitions.",
                    "Real spreadsheets usually combine multiple formatting tools together — practice thinking that way.",
                    "Revisit any lesson where a question felt unclear before moving to the next module.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}