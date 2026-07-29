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
        question: "What does 'Merge Cells' do in Excel?",
        options: [
            "Deletes the selected cells",
            "Combines two or more cells into one single larger cell",
            "Copies the formatting from one cell to another",
            "Splits one cell into multiple cells",
        ],
        answer: 1,
        explanation:
            "Merge Cells joins the selected range into a single cell that spans the same area — commonly used for titles and headers.",
    },
    {
        question: "When you merge cells that contain data in more than one cell, what happens?",
        options: [
            "All the data gets combined into one text string",
            "Excel keeps only the top-left cell's value and discards the rest",
            "Excel automatically creates a new column for the extra data",
            "Excel refuses to merge and shows nothing",
        ],
        answer: 1,
        explanation:
            "Excel warns you and then keeps only the top-left cell's content — data in the other merged cells is permanently discarded.",
    },
    {
        question: "Which Ribbon location has the 'Merge & Center' button?",
        options: ["Page Layout tab → Themes group", "Home tab → Alignment group", "Data tab → Sort & Filter group", "Insert tab → Illustrations group"],
        answer: 1,
        explanation:
            "Merge & Center lives on the Home tab, inside the Alignment group, right next to the text alignment buttons.",
    },
    {
        question: "What's the key difference between 'Merge & Center' and 'Merge Across'?",
        options: [
            "There is no difference, they do the same thing",
            "Merge & Center also centers the text; Merge Across merges each selected row separately without centering",
            "Merge Across only works on columns, never rows",
            "Merge & Center deletes cell formatting",
        ],
        answer: 1,
        explanation:
            "Merge & Center merges the range into one cell and centers the content. Merge Across merges each row in the selection into its own separate merged cell, row by row.",
    },
    {
        question: "You have a table where each row needs sorting and filtering, but the title above it needs to look centered across 5 columns. What's the smarter choice for the title?",
        options: [
            "Merge & Center the title cells",
            "Use 'Center Across Selection' from Format Cells instead of merging",
            "Merge the entire table including the title",
            "Leave the title left-aligned in a single cell",
        ],
        answer: 1,
        explanation:
            "'Center Across Selection' visually centers text across columns without actually merging cells — so sorting and filtering below it still works perfectly. True merging can break sort/filter operations if used carelessly.",
    },
    {
        question: "Why can merged cells sometimes cause problems in a data table?",
        options: [
            "They make the file size too large",
            "They can break sorting, filtering, and copy-paste operations because the underlying cell grid is no longer uniform",
            "They automatically delete formulas",
            "They only work in Excel Online, not Desktop",
        ],
        answer: 1,
        explanation:
            "Merged cells disrupt the regular row/column grid, which often causes errors or unexpected behavior when sorting, filtering, or pasting data into that range.",
    },
];

export default function MergeCells() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what merging cells actually does.</li>
                    <li>Learn the three merge options: Merge & Center, Merge Across, and Merge Cells.</li>
                    <li>Learn how to unmerge cells safely.</li>
                    <li>Understand what happens to data when you merge non-empty cells.</li>
                    <li>Learn a smarter alternative — Center Across Selection — and when to use it instead.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    Imagine you have a report title, and you want it to sit
                    perfectly centered above five columns of data — like a
                    banner stretching across the top. A single cell isn't wide
                    enough to look right. This is exactly what{" "}
                    <strong>Merge Cells</strong> is for — it takes several
                    neighboring cells and fuses them into one bigger cell.
                </p>

                <p className="mt-3">
                    Think of it like joining LEGO blocks — instead of five
                    small blocks side by side, you snap them into one long
                    block. Excel treats that merged area as a single cell from
                    then on.
                </p>

                <InfoBox>
                    <p>
                        Merging is purely a <strong>visual/layout</strong>{" "}
                        tool — it doesn't change your data, but it does change
                        how the cell grid behaves underneath, which is where
                        beginners often run into trouble later.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Merge & Center?">

                <ImageCard
                    src="/images/lessons/formatting/merge-center-home-tab.png"
                    alt="Merge & Center button on the Home tab"
                    caption="Merge & Center is on the Home tab, inside the Alignment group."
                />

            </LessonSection>

            {/* Types of merge */}

            <LessonSection title="The Three Merge Options">

                <p>
                    Click the small dropdown arrow next to "Merge & Center"
                    and you'll see three related options — each behaves a
                    little differently:
                </p>

                <LessonTable
                    headers={["Option", "What It Does", "Example"]}
                    rows={[
                        ["Merge & Center", "Merges the selected cells into one and centers the content", "Merging A1:E1 for a report title"],
                        ["Merge Across", "Merges each selected row into its own merged cell, row by row", "Selecting A1:E3 merges A1:E1, A2:E2, A3:E3 separately"],
                        ["Merge Cells", "Merges the whole selection into one cell without centering", "Merging A1:B2 into a single left-aligned block"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        If you select cells A1 to E1 and click "Merge &
                        Center," all five cells become one wide cell, and
                        whatever text was in A1 now sits centered across the
                        entire width — perfect for a title like "Monthly
                        Sales Report."
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Merging and unmerging steps */}

            <LessonSection title="How to Merge and Unmerge Cells">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the range of cells you want to combine."],
                        ["2", "Go to the Home tab, Alignment group."],
                        ["3", "Click 'Merge & Center' (or pick another option from its dropdown)."],
                        ["4", "To undo it, select the merged cell and click 'Merge & Center' again, or choose 'Unmerge Cells' from the dropdown."],
                    ]}
                />

                <TipBox>
                    <p>
                        Unmerging a cell puts all its content back into the
                        top-left cell of the original range — the other cells
                        stay empty, since that's where the data was kept all
                        along.
                    </p>
                </TipBox>

            </LessonSection>

            {/* What happens to data */}

            <LessonSection title="What Happens to Your Data When You Merge">

                <p>
                    This is the part that surprises a lot of beginners. If
                    only one of the selected cells has data, merging is
                    completely safe — that value simply becomes the merged
                    cell's value. But if{" "}
                    <strong>more than one</strong> selected cell has data,
                    Excel shows a warning and keeps only the{" "}
                    <strong>top-left cell's</strong> content — everything else
                    is lost.
                </p>

                <ExampleBox title="Real-Life Example">
                    <p>
                        Suppose A1 has "Name" and B1 has "Age." If you select
                        A1:B1 and merge them, Excel warns you, and after
                        merging, only "Name" remains — "Age" is gone unless
                        you copy it somewhere first.
                    </p>
                </ExampleBox>

                <InfoBox>
                    <p>
                        Always double-check that only one cell in your
                        selection has data before merging — or copy the other
                        values elsewhere first, since this action can't be
                        recovered once you've saved and closed the file.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Smarter alternative */}

            <LessonSection title="A Smarter Alternative: Center Across Selection">

                <p>
                    Many Excel professionals actually avoid merging for
                    titles and instead use{" "}
                    <strong>Center Across Selection</strong>, found under
                    Format Cells → Alignment → Horizontal dropdown. It{" "}
                    <em>looks</em> exactly like a merged, centered title — but
                    the cells underneath stay completely separate.
                </p>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Select the range where you want centered-looking text."],
                        ["2", "Press Ctrl+1 to open Format Cells."],
                        ["3", "Go to the Alignment tab."],
                        ["4", "Set Horizontal to 'Center Across Selection' and click OK."],
                    ]}
                />

                <ExampleBox title="Office Scenario">
                    <p>
                        A finance team builds a table where the header row
                        needs to look centered across several columns, but
                        the data rows below still need to be sorted and
                        filtered daily. Using "Center Across Selection" for
                        the header keeps the sorting and filtering below it
                        working smoothly, since the grid is never actually
                        merged.
                    </p>
                </ExampleBox>

                <TipBox>
                    <p>
                        Rule of thumb: use real merging for one-off titles you
                        won't sort or filter around. For anything sitting
                        above or inside a working data table, prefer Center
                        Across Selection.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    A student is building a timetable in Excel. The header
                    "Monday" needs to span three merged columns for Period 1,
                    2, and 3. They select the three cells, click{" "}
                    "Merge & Center," and type "Monday" — it now sits
                    perfectly centered above all three periods, just like a
                    printed school timetable.
                </p>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Merging cells that already contain data in multiple cells, losing information without realizing it.</li>
                    <li>Merging cells inside a data table meant to be sorted or filtered later, breaking those features.</li>
                    <li>Using merge purely for visual spacing instead of adjusting column widths or using Center Across Selection.</li>
                    <li>Forgetting that a merged cell's reference is just its top-left cell address, which can confuse formulas.</li>
                    <li>Trying to merge non-adjacent cells (like A1 and C1 without B1) — Excel doesn't allow this.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Use merging sparingly — mostly for titles and standalone headers, not inside working data tables.</li>
                    <li>Prefer "Center Across Selection" whenever you still need to sort or filter the rows below.</li>
                    <li>Before merging cells with data, copy the extra values somewhere safe first.</li>
                    <li>If pasting data seems to skip rows or misalign, check for hidden merged cells in that range.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Merge Cells combines multiple selected cells into a single larger cell.",
                    "Three variants exist: Merge & Center, Merge Across, and Merge Cells — each behaves slightly differently.",
                    "When merging cells with data in more than one of them, only the top-left value survives.",
                    "Center Across Selection gives a similar centered look without actually merging, keeping sorting and filtering safe.",
                    "Use merging sparingly, mainly for titles, and avoid it inside tables you plan to sort or filter.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}