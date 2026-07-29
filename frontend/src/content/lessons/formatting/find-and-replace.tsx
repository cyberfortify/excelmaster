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
        question: "Which keyboard shortcut opens the Find dialog box?",
        options: ["Ctrl + F", "Ctrl + H", "Ctrl + R", "Ctrl + G"],
        answer: 0,
        explanation:
            "Ctrl + F opens the Find dialog box, letting you search for specific text or numbers in your worksheet.",
    },
    {
        question: "Which keyboard shortcut opens the Find and Replace dialog box?",
        options: ["Ctrl + F", "Ctrl + H", "Ctrl + E", "Ctrl + P"],
        answer: 1,
        explanation:
            "Ctrl + H opens the Replace tab directly, letting you find text and swap it with something else.",
    },
    {
        question: "What does 'Replace All' do?",
        options: [
            "Replaces only the first match found",
            "Replaces every matching instance in the worksheet at once",
            "Deletes all data in the worksheet",
            "Only highlights matches without changing them",
        ],
        answer: 1,
        explanation:
            "Replace All scans the entire worksheet and swaps every occurrence of the search term in one click, without asking one by one.",
    },
    {
        question: "You want to replace 'Mumbai' with 'Delhi' only in one specific cell, not the whole sheet. What should you do?",
        options: [
            "Click Replace All directly",
            "Select that specific range first, then use Find and Replace with 'Replace' (not Replace All)",
            "Use Ctrl + Z instead",
            "Delete the cell and retype it",
        ],
        answer: 1,
        explanation:
            "Selecting a specific range before opening Find and Replace limits the search/replace to just that area, and clicking 'Replace' one at a time gives you control over each match.",
    },
    {
        question: "Which option in Find and Replace lets you search only for exact matches, like 'Cat' but not 'Category'?",
        options: ["Match entire cell contents", "Replace All", "Find Next", "Options"],
        answer: 0,
        explanation:
            "'Match entire cell contents' ensures Excel only finds cells where the search term is the complete value, not just part of a longer word.",
    },
    {
        question: "An accountant has 2,000 rows where the word 'Pending' should now say 'Completed'. What's the fastest way to fix this?",
        options: [
            "Manually retype each cell",
            "Use Find and Replace (Ctrl + H) and click Replace All",
            "Delete the entire column",
            "Use Freeze Panes",
        ],
        answer: 1,
        explanation:
            "Find and Replace with 'Replace All' updates every matching cell across all 2,000 rows instantly, without manual editing.",
    },
];

export default function FindAndReplace() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Find and Replace does and why it's useful.</li>
                    <li>Learn how to search for data using Find.</li>
                    <li>Learn how to replace data one at a time or all at once.</li>
                    <li>Use advanced options like Match Case and Match Entire Cell.</li>
                    <li>Avoid common mistakes that can accidentally change the wrong data.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Imagine a worksheet with 5,000 rows, and you suddenly realize a
                    company's name was misspelled throughout the entire sheet.
                    Scrolling through and fixing each one manually could take hours.
                    This is exactly the kind of problem{" "}
                    <strong>Find and Replace</strong> was built to solve.
                </p>

                <p className="mt-3">
                    Find and Replace lets you instantly locate specific text or
                    numbers anywhere in your worksheet, and optionally swap them with
                    something else — all in just a few clicks.
                </p>

                <InfoBox>
                    <p>
                        Think of Find and Replace like the search-and-fix tool in a
                        word processor, but built for spreadsheets full of numbers,
                        formulas, and text.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find This Tool?">

                <ImageCard
                    src="/images/lessons/formatting/find-and-replace-dialog.png"
                    alt="Excel Find and Replace dialog box"
                    caption="Find and Replace can be opened from Home → Find & Select, or with Ctrl + F / Ctrl + H."
                />

            </LessonSection>

            {/* Find */}

            <LessonSection title="Using Find: Locating Data Quickly">

                <p>
                    <strong>Find</strong> helps you search for a specific word,
                    number, or phrase anywhere in your worksheet — without scrolling
                    through hundreds of rows manually.
                </p>

                <ExampleBox title="Example">
                    <p>
                        Suppose you have a sales sheet with thousands of rows, and you
                        need to check if "Mumbai" appears anywhere. Press{" "}
                        <strong>Ctrl + F</strong>, type "Mumbai," and press Enter —
                        Excel jumps straight to the first matching cell.
                    </p>
                </ExampleBox>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Press Ctrl + F to open the Find dialog."],
                        ["2", "Type the word or number you're looking for."],
                        ["3", "Click 'Find Next' to jump to each matching cell."],
                        ["4", "Click 'Find All' to see a list of every match at once."],
                    ]}
                />

            </LessonSection>

            {/* Replace */}

            <LessonSection title="Using Replace: Fixing Data Instantly">

                <p>
                    <strong>Replace</strong> goes a step further — instead of just
                    finding data, it lets you swap it with new text or numbers,
                    either one at a time or everywhere at once.
                </p>

                <ExampleBox title="Example">
                    <p>
                        A company changed its name from "TechSoft" to "TechSoft Pvt
                        Ltd" and it appears in 500 cells. Press{" "}
                        <strong>Ctrl + H</strong>, type "TechSoft" in Find, "TechSoft
                        Pvt Ltd" in Replace, and click <strong>Replace All</strong> —
                        every cell updates in one click.
                    </p>
                </ExampleBox>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Press Ctrl + H to open the Replace dialog."],
                        ["2", "Type the text to search for in 'Find what'."],
                        ["3", "Type the new text in 'Replace with'."],
                        ["4", "Click 'Replace' for one at a time, or 'Replace All' for every match."],
                    ]}
                />

            </LessonSection>

            {/* Replace vs Replace All */}

            <LessonSection title="Replace vs Replace All">

                <p>
                    These two buttons look similar but behave very differently — mixing
                    them up can accidentally change data you didn't mean to touch.
                </p>

                <LessonTable
                    headers={["Replace", "Replace All"]}
                    rows={[
                        ["Changes one match at a time, asking you to confirm each one", "Changes every match in the worksheet instantly"],
                        ["Safer for sensitive or important data", "Faster for large, repetitive changes"],
                        ["Good when only some matches should change", "Good when every match should change the same way"],
                    ]}
                />

                <TipBox>
                    <p>
                        If you're unsure whether every match should really change,
                        always use <strong>Find Next</strong> and Replace one at a
                        time — Replace All has no built-in undo warning per cell.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Advanced options */}

            <LessonSection title="Advanced Options: More Precise Searching">

                <p>
                    Clicking <strong>"Options"</strong> inside the Find and Replace
                    dialog reveals extra settings for more accurate searches:
                </p>

                <LessonTable
                    headers={["Option", "What It Does"]}
                    rows={[
                        ["Match case", "Only finds text with matching uppercase/lowercase letters, like 'Cat' but not 'cat'"],
                        ["Match entire cell contents", "Only finds cells where the search term is the complete value, not part of a longer word"],
                        ["Within: Sheet / Workbook", "Limits the search to just the current sheet, or the entire workbook"],
                        ["Search: By Rows / By Columns", "Controls the direction Excel searches through the data"],
                    ]}
                />

                <ExampleBox title="Why 'Match Entire Cell' Matters">
                    <p>
                        Searching for "Cat" without this option turns on could
                        accidentally also match "Category" or "Catalog." Turning on{" "}
                        <strong>Match entire cell contents</strong> ensures only cells
                        containing exactly "Cat" are found.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Searching in a specific range */}

            <LessonSection title="Searching Within a Specific Range">

                <p>
                    By default, Find and Replace searches the entire worksheet. If you
                    only want to search within a specific area, select that range of
                    cells <em>before</em> opening the dialog box.
                </p>

                <InfoBox>
                    <p>
                        With a range selected, Excel automatically limits Find and
                        Replace to just those cells — helpful when the same word
                        appears in multiple places but only one section should change.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you work as an operations executive, and a client's status
                    needs to change from "Pending" to "Completed" across a 2,000-row
                    tracking sheet. Instead of scrolling and editing each row, you
                    press Ctrl + H, enter both terms, and click Replace All — the
                    entire sheet updates in seconds.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        An HR team notices an employee's designation was misspelled as
                        "Exective" instead of "Executive" throughout a 300-row payroll
                        sheet. Find and Replace fixes every instance instantly, without
                        the risk of missing a single cell.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Clicking Replace All without checking how many matches exist first.</li>
                    <li>Forgetting to turn on 'Match entire cell contents,' causing partial-word matches.</li>
                    <li>Not selecting a specific range, so Replace All changes the entire sheet unintentionally.</li>
                    <li>Ignoring Match Case when uppercase and lowercase versions mean different things.</li>
                    <li>Not saving a backup before running Replace All on important data.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <LessonSection title="Professional Tips">

                <TipBox>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Use 'Find All' first to preview every match before replacing anything.</li>
                        <li>Turn on 'Match entire cell contents' when searching for short words.</li>
                        <li>Select a specific range before searching if you only need part of the sheet updated.</li>
                        <li>Keep a backup copy of your file before running Replace All on important reports.</li>
                        <li>Combine Find and Replace with Ctrl + Z if a replacement goes wrong — undo works right after.</li>
                    </ul>
                </TipBox>

            </LessonSection>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Find (Ctrl + F) helps you locate specific text or numbers anywhere in a worksheet.",
                    "Replace (Ctrl + H) lets you swap that text with something new, one at a time or all at once.",
                    "Replace All changes every match instantly; Replace changes them one by one with control.",
                    "Advanced Options like Match Case and Match Entire Cell make searches more precise.",
                    "Selecting a range before searching limits Find and Replace to just that area.",
                    "Always preview matches before using Replace All on important data.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}