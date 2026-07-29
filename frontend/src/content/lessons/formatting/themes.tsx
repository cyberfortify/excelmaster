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
        question: "What does an Excel Theme control?",
        options: [
            "Only the font size",
            "A coordinated set of colors, fonts, and effects applied across the whole workbook",
            "Only chart data",
            "Only the header row",
        ],
        answer: 1,
        explanation:
            "A Theme is a coordinated bundle of colors, fonts, and effects that applies consistently across an entire workbook, not just one cell.",
    },
    {
        question: "Which Ribbon tab contains the Themes gallery?",
        options: ["Home", "Page Layout", "Data", "Formulas"],
        answer: 1,
        explanation:
            "Themes are found on the Page Layout tab, in the Themes group.",
    },
    {
        question: "If you switch a workbook's Theme, what happens to Cell Styles like 'Good' or 'Heading 1' that were already applied?",
        options: [
            "Nothing changes at all",
            "Their colors and fonts automatically update to match the new theme",
            "They get deleted",
            "They turn into plain text",
        ],
        answer: 1,
        explanation:
            "Cell Styles are linked to the workbook's theme, so switching themes automatically updates the colors and fonts of every style-based cell.",
    },
    {
        question: "What are the three components that make up an Excel Theme?",
        options: [
            "Colors, Fonts, and Effects",
            "Rows, Columns, and Cells",
            "Formulas, Charts, and Tables",
            "Borders, Fill, and Alignment",
        ],
        answer: 0,
        explanation:
            "A Theme bundles three elements together: a color palette, a pair of fonts (heading and body), and a set of visual effects for shapes/charts.",
    },
    {
        question: "A company wants every report across the organization to automatically use its brand colors and fonts, without each employee manually setting fonts and colors every time. What's the best solution?",
        options: [
            "Ask every employee to manually match colors each time",
            "Create and share a Custom Theme with the company's brand colors and fonts",
            "Use Find and Replace",
            "Use Freeze Panes",
        ],
        answer: 1,
        explanation:
            "A saved Custom Theme can be shared across the organization, so every workbook instantly uses consistent brand colors and fonts without manual effort.",
    },
    {
        question: "Which of these directly benefits from a Theme change without being individually reformatted?",
        options: [
            "A cell manually colored with a random custom hex color",
            "A cell formatted using a built-in Cell Style like 'Good' or 'Heading 1'",
            "A cell with a border only",
            "An empty cell",
        ],
        answer: 1,
        explanation:
            "Cell Styles are theme-aware — they pull their colors and fonts from the active theme, so a theme switch updates them automatically. Manually picked custom colors don't respond to theme changes.",
    },
];

export default function Themes() {
    return (
        <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">
                <ul className="list-disc pl-6 space-y-3">
                    <li>Understand what a Theme is and what it controls.</li>
                    <li>Learn the three parts of a Theme: Colors, Fonts, and Effects.</li>
                    <li>Switch between built-in Themes in one click.</li>
                    <li>Create and save a Custom Theme for consistent branding.</li>
                    <li>Understand how Themes connect to Cell Styles.</li>
                </ul>
            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Introduction">

                <p>
                    In the last lesson, we saw how Cell Styles bundle formatting
                    together for one-click consistency. But what if you want to
                    change the <em>entire look</em> of a workbook — every color,
                    every font — in a single click, without touching individual
                    cells at all? That's exactly what a <strong>Theme</strong> does.
                </p>

                <p className="mt-3">
                    A Theme is like an outfit for your whole workbook — switch it,
                    and every themed element (fonts, colors, chart styles) changes
                    together, instantly, while keeping everything visually
                    coordinated.
                </p>

                <InfoBox>
                    <p>
                        Themes work at the workbook level, while Cell Styles and
                        manual formatting work at the cell level — Themes are the
                        "big picture" setting behind the scenes.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Where Do You Find Themes?">

                <ImageCard
                    src="/images/lessons/formatting/themes-page-layout-tab.png"
                    alt="Themes gallery on the Page Layout tab"
                    caption="Themes are found on the Page Layout tab, in the Themes group."
                />

            </LessonSection>

            {/* Three parts of a theme */}

            <LessonSection title="The Three Parts of a Theme">

                <p>
                    Every Excel Theme is actually a bundle of three separate
                    settings working together:
                </p>

                <LessonTable
                    headers={["Component", "What It Controls", "Example"]}
                    rows={[
                        ["Theme Colors", "The palette used by Cell Styles, charts, and SmartArt", "A blue-based theme vs a green-based theme"],
                        ["Theme Fonts", "The heading font and body font used across the workbook", "A modern sans-serif pair vs a traditional serif pair"],
                        ["Theme Effects", "Shadow, border, and fill styles for shapes and charts", "Flat, minimal look vs a more 3D, shadowed look"],
                    ]}
                />

                <ExampleBox title="Example">
                    <p>
                        Two workbooks with identical data can look completely
                        different just by applying different themes — one might use
                        cool blues with a clean sans-serif font, while another uses
                        warm greens with a more traditional serif font.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Switching themes */}

            <LessonSection title="Switching Between Built-in Themes">

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Go to the Page Layout tab."],
                        ["2", "Click 'Themes' to open the gallery."],
                        ["3", "Hover over a theme to preview it live on your worksheet."],
                        ["4", "Click a theme to apply it across the entire workbook."],
                    ]}
                />

                <TipBox>
                    <p>
                        Hovering over each theme option shows a live preview directly
                        on your sheet — a fast way to compare several looks before
                        deciding.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Theme colors and fonts separately */}

            <LessonSection title="Changing Just the Colors or Just the Fonts">

                <p>
                    You don't always need to switch the entire theme — Excel lets
                    you swap just the color palette or just the fonts, while keeping
                    everything else the same.
                </p>

                <LessonTable
                    headers={["Option", "What It Changes"]}
                    rows={[
                        ["Theme Colors (dropdown)", "Only the color palette, keeping fonts and effects unchanged"],
                        ["Theme Fonts (dropdown)", "Only the heading/body fonts, keeping colors and effects unchanged"],
                        ["Theme Effects (dropdown)", "Only shape and chart visual effects"],
                    ]}
                />

                <ExampleBox title="Real-Life Example">
                    <p>
                        A company likes the current theme's fonts but wants a
                        different color scheme for an upcoming festive report. Using
                        just the <strong>Theme Colors</strong> dropdown swaps the
                        palette to something warmer, without disturbing the fonts
                        already chosen.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Custom theme */}

            <LessonSection title="Creating a Custom Theme">

                <p>
                    Organizations often want their reports to always use specific
                    brand colors and fonts. Instead of resetting this manually every
                    time, you can build and save a Custom Theme.
                </p>

                <LessonTable
                    headers={["Step", "Action"]}
                    rows={[
                        ["1", "Set your preferred Theme Colors, Fonts, and Effects individually."],
                        ["2", "Go to Page Layout → Themes → Save Current Theme."],
                        ["3", "Name your theme, like 'Company Brand.'"],
                        ["4", "The saved theme now appears under 'Custom' in the Themes gallery for future workbooks."],
                    ]}
                />

                <InfoBox>
                    <p>
                        A saved Custom Theme can also be shared with colleagues, so
                        an entire team's reports stay visually consistent without
                        each person manually recreating the same colors and fonts.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Themes and cell styles connection */}

            <LessonSection title="How Themes Connect to Cell Styles">

                <p>
                    This is the real power of Themes: Cell Styles (like{" "}
                    <strong>Good</strong>, <strong>Heading 1</strong>, or{" "}
                    <strong>Total</strong>, covered in the previous lesson) don't use
                    fixed colors — they pull their colors and fonts directly from
                    the active Theme.
                </p>

                <ExampleBox title="Example">
                    <p>
                        A worksheet uses the "Heading 1" style with the default blue
                        theme, making headers appear blue. Switching the workbook's
                        theme to a green-based one instantly turns those same
                        headers green — without touching a single cell manually.
                    </p>
                </ExampleBox>

                <TipBox>
                    <p>
                        Manually picked custom colors (via Fill Color's "More
                        Colors") do <strong>not</strong> update with theme changes —
                        only theme-linked colors and Cell Styles respond
                        automatically.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Real world example */}

            <LessonSection title="Real-World Example">

                <p>
                    Suppose your company rebrands, switching its official colors
                    from blue to a deep teal. If every report across the
                    organization used Cell Styles built on the company's Custom
                    Theme, updating just the theme's color palette instantly
                    refreshes every report — no need to manually recolor hundreds
                    of cells across dozens of files.
                </p>

                <ExampleBox title="Office Scenario">
                    <p>
                        A marketing team maintains a shared Custom Theme file. Every
                        new campaign report starts by applying this theme, instantly
                        matching the brand's colors and fonts without any manual
                        setup each time.
                    </p>
                </ExampleBox>

            </LessonSection>

            {/* Common mistakes */}

            <LessonSection title="Common Mistakes">

                <ul className="list-disc pl-6 space-y-3">
                    <li>Manually picking colors instead of using theme-linked colors, losing consistency when themes change.</li>
                    <li>Assuming Theme changes affect charts and shapes only, forgetting they also affect Cell Styles.</li>
                    <li>Not saving a Custom Theme after carefully choosing brand colors and fonts, losing the setup later.</li>
                    <li>Mixing multiple themes across different workbooks meant to look consistent as a set.</li>
                    <li>Confusing Theme Colors with regular Fill Color — they behave differently when themes change.</li>
                </ul>

            </LessonSection>

            {/* Professional tips */}

            <TipBox>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Set up a Custom Theme once for your organization, and reuse it across every future report.</li>
                    <li>Prefer theme-linked colors (from the top row of the color picker) over custom colors for consistency.</li>
                    <li>Use Cell Styles together with Themes for the most flexible, easily updatable formatting.</li>
                    <li>Preview themes by hovering before applying, to avoid repeatedly undoing changes.</li>
                </ul>

            </TipBox>

            {/* Summary */}

            <SummaryBox
                points={[
                    "A Theme is a coordinated bundle of Colors, Fonts, and Effects applied across an entire workbook.",
                    "Themes are found on the Page Layout tab, and can be previewed live before applying.",
                    "You can change just the colors, just the fonts, or the entire theme independently.",
                    "Cell Styles are theme-aware — switching themes automatically updates their colors and fonts.",
                    "Custom Themes can be saved and shared to keep an organization's reports visually consistent.",
                ]}
            />

            {/* Practice */}

            <PracticeCard questions={questions} />

        </>
    );
}