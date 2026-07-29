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
        question: "How does Excel actually store a date internally, behind the display?",
        options: ["As plain text", "As a serial number representing days since a fixed starting date", "As an image", "Dates cannot be stored in Excel"],
        answer: 1,
        explanation:
            "Excel stores dates as serial numbers counting days from January 1, 1900 — the display format (like 01-Jan-2026) is just how that number is shown.",
    },
    {
        question: "If a date appears left-aligned instead of right-aligned, what does this usually mean?",
        options: [
            "The date is correct and normal",
            "Excel is treating it as text, not a real date",
            "The date is in the future",
            "The cell is locked",
        ],
        answer: 1,
        explanation:
            "Since Excel right-aligns numbers (and dates) by default, a left-aligned date is a sign it's stored as plain text and won't work correctly in date calculations.",
    },
    {
        question: "Which shortcut instantly applies Date format to selected cells?",
        options: ["Ctrl + Shift + #", "Ctrl + Shift + $", "Ctrl + D", "Ctrl + Shift + T"],
        answer: 0,
        explanation:
            "Ctrl + Shift + # applies a standard date format to the selected cells instantly.",
    },
    {
        question: "Which shortcut instantly applies Time format to selected cells?",
        options: ["Ctrl + Shift + @", "Ctrl + Shift + $", "Ctrl + T", "Ctrl + Shift + %"],
        answer: 0,
        explanation:
            "Ctrl + Shift + @ applies a standard time format (hours and minutes) to the selected cells.",
    },
    {
        question: "What shortcut instantly inserts today's date into a selected cell?",
        options: ["Ctrl + ;", "Ctrl + Shift + ;", "Ctrl + D", "Ctrl + T"],
        answer: 0,
        explanation:
            "Ctrl + ; (semicolon) instantly types today's date as a fixed value into the selected cell.",
    },
    {
        question: "An HR sheet has joining dates typed as plain text like '15/03/2026', imported from another system. What's the risk of leaving them this way?",
        options: [
            "No risk at all",
            "Excel won't be able to calculate durations or sort them correctly as real dates",
            "The file will not open",
            "The dates will automatically disappear",
        ],
        answer: 1,
        explanation:
            "Text-based dates look correct but can't be used in date calculations (like finding someone's tenure) or sorted chronologically, since Excel doesn't recognize them as real dates.",
    },
];

export default function DateTimeFormats() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand how Excel actually stores dates and times internally.</li>
                    <li>Learn common Date and Time formats and how to apply them.</li>
                    <li>Spot the difference between a real date and date-looking text.</li>
                    <li>Use Custom Date formats for specific display needs.</li>
                    <li>Learn shortcuts and tricks to work with dates faster.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Type <strong>15/03/2026</strong> into a cell, and Excel doesn't
                    just see a piece of text — it secretly converts it into a
                    number behind the scenes. This is the key to understanding{" "}
                    <strong>Date and Time Formats</strong> in Excel, and why some
                    dates behave strangely if you're not careful.
                </p>

                <p className="mt-3">
                    Once Excel recognizes something as a real date, you can add or
                    subtract days, calculate someone's age, or sort events
                    chronologically — none of which work correctly if the date is
                    accidentally stored as plain text.
                </p>

                <InfoBox>
                    <p>
                        A "date" in Excel is really just a number with a costume on —
                        the number 1 represents 1st January 1900, and every day after
                        that adds 1 to the count.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Date and Time Formats?">

                <ImageCard
                    src="/images/lessons/formatting/date-time-format-dropdown.png"
                    alt="Date and Time options in the Number Format dropdown"
                    caption="Short Date, Long Date, and Time formats appear in the Number Format dropdown on the Home tab."
                />

            </LessonSection>

            {/* How excel stores dates */}

            <LessonSection title="How Excel Actually Stores Dates">

                <p>
                    This is the most important concept in this lesson: Excel stores
                    every date as a <strong>serial number</strong> counting the days
                    since 1st January 1900. The date format you see is just a
                    display style layered on top of that number.
                </p>

                <LessonTable
                    headers={["What You See", "What Excel Actually Stores"]}
                    rows={[
                        ["01-Jan-1900", "1"],
                        ["02-Jan-1900", "2"],
                        ["15-Mar-2026", "46096 (example serial number)"],
                    ]}
                />

                <ExampleBox title="Why This Matters">
                    <p>
                        Because dates are really numbers, Excel can calculate the
                        difference between two dates just like subtracting two
                        numbers — for example, a "leaving date" minus a "joining date"
                        instantly gives the number of days someone worked.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Common date formats */}

            <LessonSection title="Common Date Formats">

                <LessonTable
                    headers={["Format", "Example Display"]}
                    rows={[
                        ["Short Date", "15-03-2026"],
                        ["Long Date", "Sunday, 15 March 2026"],
                        ["DD-MMM-YYYY", "15-Mar-2026"],
                        ["MMM-YY", "Mar-26"],
                    ]}
                />

                <TipBox>
                    <p>
                        The same underlying date can be displayed in many different
                        styles — changing the format never changes which actual date
                        is stored.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common time formats */}

            <LessonSection title="Common Time Formats">

                <LessonTable
                    headers={["Format", "Example Display"]}
                    rows={[
                        ["Time (h:mm AM/PM)", "2:30 PM"],
                        ["24-hour Time (h:mm)", "14:30"],
                        ["h:mm:ss", "14:30:45 (includes seconds)"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        A gym's class schedule stores "18:00" as a time value, then
                        applies the "h:mm AM/PM" format so trainers see it clearly as{" "}
                        <strong>6:00 PM</strong> instead of 24-hour format.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Real date vs text date */}

            <LessonSection title="Real Dates vs Date-Looking Text">

                <p>
                    One of the most common Excel problems is a date that{" "}
                    <em>looks</em> correct but is actually stored as plain text —
                    often after copying data from another system or website.
                </p>

                <LessonTable
                    headers={["Real Date", "Text That Looks Like a Date"]}
                    rows={[
                        ["Right-aligned in the cell", "Left-aligned in the cell"],
                        ["Can be used in calculations (SUM, subtraction)", "Cannot be used in date calculations"],
                        ["Sorts correctly by chronological order", "Sorts incorrectly, like alphabetical text"],
                    ]}
                />

                <InfoBox>
                    <p>
                        Quick check: if a date is left-aligned instead of
                        right-aligned, that's Excel's way of quietly telling you it's
                        text, not a real date.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Custom date formats */}

            <LessonSection title="Custom Date Formats (Introduction)">

                <p>
                    Just like numbers, dates can also use Custom formats through
                    Format Cells for very specific display needs.
                </p>

                <LessonTable
                    headers={["Custom Code", "What It Displays"]}
                    rows={[
                        ["dd-mmm-yyyy", "15-Mar-2026"],
                        ["dddd, dd mmmm", "Sunday, 15 March"],
                        ["mmm-yy", "Mar-26"],
                        ["yyyy", "2026 (year only)"],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        A monthly report header needs to show just "March 2026"
                        instead of a full date. Using the custom format code{" "}
                        <strong>mmmm yyyy</strong> in Format Cells achieves exactly
                        this display, based on a single date value like 01-03-2026.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you work as an HR executive tracking employee joining
                    dates. Storing them as real dates (not text) lets you instantly
                    calculate each employee's tenure, sort the list from newest to
                    oldest joiner, and generate work-anniversary reminders — none of
                    which would work if the dates were accidentally typed as plain
                    text.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An events team tracks meeting times across different time
                        zones using the Time format, instantly converting a stored
                        time value between 24-hour and 12-hour AM/PM display, without
                        retyping anything.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Shortcuts and tricks */}

            <LessonSection title="Excel Tricks & Shortcuts for Dates and Times">

                <LessonTable
                    headers={["Shortcut", "What It Does"]}
                    rows={[
                        ["Ctrl + ;", "Instantly inserts today's date into the selected cell"],
                        ["Ctrl + Shift + ;", "Instantly inserts the current time into the selected cell"],
                        ["Ctrl + Shift + #", "Applies standard Date format to selected cells"],
                        ["Ctrl + Shift + @", "Applies standard Time format to selected cells"],
                        ["Ctrl + 1", "Opens Format Cells → Number tab for custom Date/Time formats"],
                    ]}
                />

                <TipBox>
                    <p>
                        <strong>Pro tip:</strong> Ctrl + ; inserts a fixed date (it
                        won't change tomorrow), which is different from using the{" "}
                        <code>=TODAY()</code> formula, which always updates to the
                        current date automatically.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Typing dates in inconsistent formats (like 15/3/26 and 2026-03-15 in the same column), confusing Excel.</li>
                    <li>Not noticing when imported dates are left-aligned, meaning they're stored as text.</li>
                    <li>Assuming a date will "update automatically" when it was inserted with Ctrl + ; (it won't — that's a fixed value).</li>
                    <li>Applying a Date format to a cell that never contained a real date in the first place.</li>
                    <li>Confusing DD/MM/YYYY and MM/DD/YYYY formats, especially when sharing files internationally.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Always check alignment to confirm a date is real, not text, before relying on it for calculations.</li>
                    <li>Use Ctrl + ; for a fixed date stamp, and =TODAY() when you need it to auto-update.</li>
                    <li>Keep one consistent date format throughout a worksheet or report.</li>
                    <li>Use Custom Date formats like "mmmm yyyy" for clean report headers.</li>
                    <li>Double-check date formats when sharing files with people in other countries, since DD/MM and MM/DD can be easily confused.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Excel stores dates as serial numbers counting days since 1 January 1900.",
                    "The format you see (like 15-Mar-2026) is just a display style on top of that number.",
                    "A left-aligned date usually means it's stored as text, not a real date.",
                    "Real dates can be used in calculations and sorted chronologically; text dates cannot.",
                    "Ctrl + ; inserts a fixed today's date; Ctrl + Shift + ; inserts the current time.",
                    "Custom Date formats let you display dates exactly how you need, like 'March 2026' for report headers.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}