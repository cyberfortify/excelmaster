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
        question: "What does Flash Fill do in Excel?",
        options: [
            "Deletes duplicate data",
            "Automatically fills data by recognizing a pattern from your example",
            "Freezes the header row",
            "Sorts data alphabetically",
        ],
        answer: 1,
        explanation:
            "Flash Fill studies the pattern in the example you type and automatically completes the rest of the column to match it.",
    },
    {
        question: "Which keyboard shortcut triggers Flash Fill manually?",
        options: ["Ctrl + E", "Ctrl + F", "Ctrl + Shift + L", "Ctrl + T"],
        answer: 0,
        explanation:
            "Pressing Ctrl + E runs Flash Fill immediately, based on the pattern found in the cells you've already filled.",
    },
    {
        question: "Column A has full names like 'Priya Sharma'. You type 'Priya' in column B as an example. What will Flash Fill do for the rest of column B?",
        options: [
            "Fill the full names again",
            "Extract just the first name for every row, like Flash Fill learned from your example",
            "Leave the cells blank",
            "Copy 'Priya' into every cell",
        ],
        answer: 1,
        explanation:
            "Flash Fill recognizes that you extracted the first word (first name) from column A and repeats that same logic for every other row.",
    },
    {
        question: "Which Ribbon tab contains the Flash Fill button?",
        options: ["Home", "Insert", "Data", "View"],
        answer: 2,
        explanation:
            "Flash Fill is located under the Data tab, in the Data Tools group.",
    },
    {
        question: "How is Flash Fill different from AutoFill?",
        options: [
            "They are exactly the same feature",
            "AutoFill continues simple patterns like numbers/dates; Flash Fill learns and applies text-editing logic like combining or splitting",
            "Flash Fill only works with numbers",
            "AutoFill requires a formula, Flash Fill doesn't",
        ],
        answer: 1,
        explanation:
            "AutoFill is best for continuing simple series (numbers, days, months), while Flash Fill is smarter — it can split, combine, or reformat text based on your example.",
    },
    {
        question: "An HR executive has 'First Name' in column A and 'Last Name' in column B, and wants a 'Full Name' column combining both. What's the fastest way using Flash Fill?",
        options: [
            "Manually retype every full name",
            "Type one example of the combined full name in column C, then press Ctrl + E",
            "Delete columns A and B",
            "Use Freeze Panes",
        ],
        answer: 1,
        explanation:
            "Typing just one correctly combined example teaches Flash Fill the pattern, and Ctrl + E instantly applies it to the rest of the column.",
    },
];

export default function FlashFill() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what Flash Fill is and how it's different from AutoFill.</li>
                    <li>Learn how to trigger Flash Fill using an example.</li>
                    <li>Use Flash Fill to split, combine, and reformat text instantly.</li>
                    <li>Know the keyboard shortcut and where to find it on the Ribbon.</li>
                    <li>Avoid common mistakes while using Flash Fill.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Imagine you have a list of 500 email addresses like{" "}
                    <strong>priya.sharma@company.com</strong>, and you need just the
                    names — "Priya Sharma" — in a separate column. Typing that
                    manually would take hours. This is exactly where{" "}
                    <strong>Flash Fill</strong> becomes a lifesaver.
                </p>

                <p className="mt-3">
                    Flash Fill is one of Excel's smartest features — it watches the
                    pattern in the example you give it, and instantly completes the
                    rest of the column to match, without you writing a single formula.
                </p>

                <InfoBox>
                    <p>
                        Think of Flash Fill as Excel "guessing" what you're trying to
                        do, based on just one example — similar to how your phone's
                        keyboard predicts the next word.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Flash Fill?">

                <ImageCard
                    src="/images/lessons/formatting/flash-fill-data-tab.png"
                    alt="Flash Fill button on the Data tab"
                    caption="Flash Fill is available on the Data tab, inside the Data Tools group."
                />

            </LessonSection>

            {/* What is flash fill */}

            <LessonSection title="What Exactly Does Flash Fill Do?">

                <p>
                    Flash Fill looks at a pattern you've created in one or two cells,
                    and applies that same logic to every other row automatically. It
                    works especially well for tasks involving text — splitting,
                    joining, or reformatting.
                </p>

                <ExampleBox title="Simple Example: Extracting First Names">
                    <p>
                        Column A has full names like "Priya Sharma," "Rahul Verma," and
                        "Ayesha Khan." In column B, you type just{" "}
                        <strong>"Priya"</strong> next to the first name. As soon as you
                        start typing the second entry, Excel suggests the rest — press{" "}
                        <strong>Enter</strong> to accept it.
                    </p>
                </ExampleBox>

                <LessonTable
                    headers={["Column A (Full Name)", "Column B (First Name)"]}
                    rows={[
                        ["Priya Sharma", "Priya"],
                        ["Rahul Verma", "Rahul (auto-filled)"],
                        ["Ayesha Khan", "Ayesha (auto-filled)"],
                    ]}
                />

            </LessonSection>

            {/* How to use */}

            <LessonSection title="How to Use Flash Fill: Step by Step">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Type your desired result for the first row as an example."],
                        ["2", "Start typing the same pattern in the second row."],
                        ["3", "Excel shows a preview (grayed-out text) for the remaining rows."],
                        ["4", "Press Enter to accept, or Ctrl + E to trigger it manually."],
                    ]}
                />

                <TipBox>
                    <p>
                        If Excel doesn't automatically suggest a preview, simply select
                        the range and press <strong>Ctrl + E</strong> — this forces
                        Flash Fill to run based on your example.
                    </p>
                </TipBox>

            </LessonSection>

            {/* What flash fill can do */}

            <LessonSection title="What Can Flash Fill Do?">

                <p>
                    Flash Fill isn't limited to just extracting first names — it can
                    handle many everyday text tasks:
                </p>

                <LessonTable
                    headers={["Task", "Example Input", "Flash Fill Result"]}
                    rows={[
                        ["Extract first name", "Priya Sharma", "Priya"],
                        ["Extract last name", "Priya Sharma", "Sharma"],
                        ["Combine two columns", "First: Priya, Last: Sharma", "Priya Sharma"],
                        ["Extract username from email", "priya.sharma@company.com", "priya.sharma"],
                        ["Reformat phone numbers", "9876543210", "987-654-3210"],
                        ["Change text case", "PRIYA SHARMA", "Priya Sharma"],
                    ]}
                />

                <ExampleBox title="Real-Life Example: Combining Names">
                    <p>
                        Column A has first names, Column B has last names. In Column C,
                        you type <strong>"Priya Sharma"</strong> as an example of the
                        combined name. Pressing Ctrl + E fills the rest of column C by
                        joining every row's first and last name automatically.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Flash fill vs autofill */}

            <LessonSection title="Flash Fill vs AutoFill: What's the Difference?">

                <p>
                    These two features sound similar and are often confused — here's
                    a clear comparison:
                </p>

                <LessonTable
                    headers={["AutoFill", "Flash Fill"]}
                    rows={[
                        ["Continues simple series: numbers, days, months", "Learns text-editing patterns: splitting, joining, reformatting"],
                        ["Uses the Fill Handle (drag)", "Uses a typed example (then Enter or Ctrl + E)"],
                        ["Best for: 1, 2, 3... or Jan, Feb, Mar...", "Best for: extracting names, combining columns, formatting text"],
                        ["Works with minimal setup", "Needs at least one clear, correct example"],
                    ]}
                />

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose you work as an HR executive and receive a spreadsheet with
                    "First Name" and "Last Name" in separate columns. The payroll
                    system needs a single "Full Name" column instead. Rather than
                    writing a formula or retyping 300 names, you type just one
                    combined example and press Ctrl + E — done in seconds.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        A sales team has customer emails like{" "}
                        "ravi.kumar@brandmail.com" in one column. The manager wants a
                        clean "Ravi Kumar" formatted name for reports. Typing one
                        example and using Flash Fill converts the entire list
                        instantly, without any manual editing.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Giving an inconsistent or incorrect first example, which confuses the pattern.</li>
                    <li>Expecting Flash Fill to work when the source data itself is messy or inconsistent.</li>
                    <li>Not reviewing the auto-filled results for occasional errors before saving.</li>
                    <li>Using Flash Fill on a column that already has other data, causing accidental overwrites.</li>
                    <li>Forgetting that Flash Fill only works on text patterns, not formulas or calculations.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <LessonSection title="Professional Tips">

                <TipBox>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Always double-check a few Flash Fill results before trusting the whole column.</li>
                        <li>Use Ctrl + E when Excel doesn't show an automatic preview.</li>
                        <li>Keep your first example spotless — Flash Fill copies your logic exactly.</li>
                        <li>Use Flash Fill for one-time cleanups; use formulas if the data will keep changing.</li>
                        <li>Combine Flash Fill with sorting to quickly organize cleaned-up data.</li>
                    </ul>
                </TipBox>

            </LessonSection>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Flash Fill automatically fills data by recognizing a pattern from your typed example.",
                    "It's found on the Data tab, and can be triggered manually with Ctrl + E.",
                    "It's ideal for splitting, combining, or reformatting text — like names, emails, and phone numbers.",
                    "Unlike AutoFill (simple series), Flash Fill learns more complex text-editing logic.",
                    "A clean, correct first example is essential for accurate results.",
                    "Always review Flash Fill's output before relying on it for important reports.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}