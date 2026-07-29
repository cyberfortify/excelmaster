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
        question: "Which shortcut is used to Copy data in Excel?",
        options: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
        answer: 1,
        explanation:
            "Ctrl + C copies the selected cell or range without removing it from its original location.",
    },
    {
        question: "Which shortcut is used to Cut data?",
        options: ["Ctrl + X", "Ctrl + C", "Ctrl + A", "Ctrl + Shift + X"],
        answer: 0,
        explanation:
            "Ctrl + X removes the selected content from its current location so it can be pasted elsewhere.",
    },
    {
        question: "Which shortcut is used for Paste?",
        options: ["Ctrl + P", "Ctrl + V", "Ctrl + C", "Ctrl + Shift + V"],
        answer: 1,
        explanation:
            "Ctrl + V pastes the copied or cut data into the selected destination.",
    },
    {
        question: "What is the main difference between Copy and Cut?",
        options: [
            "Copy deletes data",
            "Cut duplicates data",
            "Copy creates a duplicate while Cut moves data",
            "There is no difference",
        ],
        answer: 2,
        explanation:
            "Copy leaves the original data unchanged, whereas Cut moves it to another location.",
    },
    {
        question: "Which feature lets you paste only the calculated result of a formula?",
        options: [
            "Paste Formatting",
            "Paste Values",
            "Paste Formula",
            "Paste Comments",
        ],
        answer: 1,
        explanation:
            "Paste Values copies only the displayed result, not the formula behind it.",
    },
];

export default function CopyCutPaste() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand the difference between Copy, Cut and Paste.</li>
                    <li>Learn keyboard shortcuts to work faster.</li>
                    <li>Copy data between cells, worksheets and workbooks.</li>
                    <li>Use different Paste options effectively.</li>
                    <li>Avoid common mistakes while moving data.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Copy, Cut and Paste are among the most frequently used commands in
                    Microsoft Excel. Whether you are creating reports, maintaining
                    employee records, preparing invoices or analysing sales data,
                    these commands help you work much faster.
                </p>

                <p className="mt-3">
                    Instead of typing the same information repeatedly, Excel allows
                    you to duplicate or move data within seconds.
                </p>

                <InfoBox>
                    <p>
                        Nearly every Excel user—from beginners to professional Data
                        Analysts—uses Copy, Cut and Paste every day.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Can You Find These Commands?">

                <ImageCard
                    src="/images/lessons/formatting/copy-cut-paste-ribbon.png"
                    alt="Excel Clipboard Group"
                    caption="Copy, Cut and Paste commands are available in the Home tab under the Clipboard group."
                />

            </LessonSection>

            {/* Copy */}

            <LessonSection title="What is Copy?">

                <p>
                    <strong>Copy</strong> creates an exact duplicate of the selected
                    data while keeping the original unchanged.
                </p>

                <ExampleBox title="Example">

                    <p>
                        Suppose cell <strong>A1</strong> contains the text
                        <strong> Excel Course</strong>.
                    </p>

                    <p className="mt-2">
                        If you copy A1 and paste it into B1, both cells will contain
                        the same value.
                    </p>

                </ExampleBox>

                <LessonTable
                    headers={["Cell", "Value"]}
                    rows={[
                        ["A1", "Excel Course"],
                        ["B1", "Excel Course"],
                    ]}
                />

            </LessonSection>

            {/* Cut */}

            <LessonSection title="What is Cut?">

                <p>
                    <strong>Cut</strong> moves data from one location to another.
                    Unlike Copy, the original content is removed after it is pasted.
                </p>

                <ExampleBox title="Example">

                    <p>
                        If cell A1 contains <strong>January Report</strong> and you use
                        Cut to move it into C1, A1 becomes empty while C1 now contains
                        the text.
                    </p>

                </ExampleBox>

            </LessonSection>

            {/* Paste */}

            <LessonSection title="What is Paste?">

                <p>
                    Paste inserts copied or cut content into a new location.
                </p>

                <p className="mt-3">
                    Excel also provides multiple Paste options like:
                </p>

                <ul className="list-disc pl-6 mt-3 space-y-2">
                    <li>Normal Paste</li>
                    <li>Paste Values</li>
                    <li>Paste Formulas</li>
                    <li>Paste Formatting</li>
                    <li>Paste Special</li>
                    <li>Transpose</li>
                </ul>

            </LessonSection>

            {/* Difference */}

            <LessonSection title="Copy vs Cut">

                <LessonTable
                    headers={["Copy", "Cut"]}
                    rows={[
                        ["Creates a duplicate", "Moves the original data"],
                        ["Original remains", "Original is removed"],
                        ["Ctrl + C", "Ctrl + X"],
                        ["Used for duplication", "Used for relocation"],
                    ]}
                />

                <TipBox>
                    <p>
                        If you only need another copy of your data, always use
                        <strong> Copy</strong>. Use <strong>Cut</strong> only when you
                        actually want to move information.
                    </p>
                </TipBox>

            </LessonSection>

            {/* How to Copy */}

            <LessonSection title="How to Copy Data">

                <p>
                    Copying data in Excel is very simple. You can use either keyboard
                    shortcuts or Ribbon commands.
                </p>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the cell or range you want to copy."],
                        ["2", "Press Ctrl + C or click Home → Copy."],
                        ["3", "Select the destination cell."],
                        ["4", "Press Ctrl + V to paste."],
                    ]}
                />

                <ExampleBox title="Example">

                    <p>
                        Suppose you have employee names in cells A2:A10 and you need the
                        same list on another worksheet.
                    </p>

                    <p className="mt-2">
                        Select the cells → Press <strong>Ctrl + C</strong> → Open the new
                        worksheet → Press <strong>Ctrl + V</strong>.
                    </p>

                </ExampleBox>

            </LessonSection>

            {/* How to Cut */}

            <LessonSection title="How to Cut Data">

                <p>
                    Cutting is almost identical to Copy, but instead of creating another
                    copy, Excel moves the selected data to a new location.
                </p>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the data."],
                        ["2", "Press Ctrl + X."],
                        ["3", "Select the destination."],
                        ["4", "Press Ctrl + V."],
                    ]}
                />

                <InfoBox>

                    <p>
                        When data is cut, Excel displays a moving dashed border around the
                        selected cells until the data is pasted.
                    </p>

                </InfoBox>

            </LessonSection>

            {/* Paste Options */}

            <LessonSection title="Paste Options">

                <p>
                    Excel offers several paste options depending on what you want to copy.
                </p>

                <LessonTable
                    headers={["Option", "Purpose"]}
                    rows={[
                        ["Paste", "Copies everything including values, formulas and formatting."],
                        ["Paste Values", "Copies only the displayed values."],
                        ["Paste Formulas", "Copies only formulas."],
                        ["Paste Formatting", "Copies only formatting."],
                        ["Transpose", "Converts rows into columns and columns into rows."],
                    ]}
                />

                <ImageCard
                    src="/images/lessons/formatting/paste-options.png"
                    alt="Paste Options"
                    caption="Excel provides multiple paste options for different situations."
                />

            </LessonSection>

            {/* Paste Special */}

            <LessonSection title="Paste Special">

                <p>
                    Paste Special gives you advanced control over what gets pasted.
                    Instead of copying everything, you can paste only values, formulas,
                    formatting, comments, validation rules and much more.
                </p>

                <TipBox>

                    <p>
                        Shortcut:
                        <strong> Ctrl + Alt + V</strong> opens the Paste Special dialog.
                    </p>

                </TipBox>

                <ExampleBox title="When to Use Paste Values">

                    <p>
                        Imagine a report contains formulas calculating monthly sales.
                        Before sharing the report with a client, use
                        <strong> Paste Values</strong> so only the final numbers remain and
                        the formulas stay hidden.
                    </p>

                </ExampleBox>

            </LessonSection>

            {/* Keyboard Shortcuts */}

            <LessonSection title="Keyboard Shortcuts">

                <LessonTable
                    headers={["Action", "Shortcut"]}
                    rows={[
                        ["Copy", "Ctrl + C"],
                        ["Cut", "Ctrl + X"],
                        ["Paste", "Ctrl + V"],
                        ["Paste Special", "Ctrl + Alt + V"],
                        ["Undo", "Ctrl + Z"],
                        ["Redo", "Ctrl + Y"],
                    ]}
                />

            </LessonSection>

            {/* Real World Example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you work as an MIS Executive in a company. Every month you
                    receive a sales report from different branches. Instead of manually
                    typing hundreds of records again, you simply copy the branch data into
                    the master report.
                </p>

                <ExampleBox title="Office Scenario">

                    <p>
                        The HR department has prepared an employee list. Finance also needs
                        the same list for salary processing. Rather than creating a new
                        table, HR copies the existing data and shares it with Finance in
                        just a few seconds.
                    </p>

                </ExampleBox>

            </LessonSection>

            {/* Common Mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">

                    <li>Using Cut when Copy should be used.</li>

                    <li>Overwriting important data while pasting.</li>

                    <li>Forgetting to use Paste Values before sharing reports.</li>

                    <li>Pasting formulas where only numbers are required.</li>

                    <li>Copying merged cells into incompatible ranges.</li>

                </ul>

            </LessonSection>

            {/* Professional Tips */}

            <LessonSection title="Professional Tips">

                <TipBox>

                    <ul className="list-disc pl-6 space-y-2">

                        <li>Learn keyboard shortcuts instead of using the mouse.</li>

                        <li>Use Paste Values before sending reports to clients.</li>

                        <li>Double-check the destination before cutting data.</li>

                        <li>Keep a backup before moving important worksheets.</li>

                        <li>Use Paste Formatting to quickly create consistent reports.</li>

                    </ul>

                </TipBox>

            </LessonSection>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Copy creates a duplicate while keeping the original unchanged.",
                    "Cut moves data from one location to another.",
                    "Paste inserts copied or cut data into a selected location.",
                    "Paste Special provides advanced paste options such as Values, Formulas and Formatting.",
                    "Keyboard shortcuts improve speed and productivity.",
                    "Using the correct paste option helps prevent reporting errors.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}