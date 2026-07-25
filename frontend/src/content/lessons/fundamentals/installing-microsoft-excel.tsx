import LessonSection from "../../../components/lesson/content/LessonSection";
import InfoBox from "../../../components/lesson/content/InfoBox";
import TipBox from "../../../components/lesson/content/TipBox";
import ExampleBox from "../../../components/lesson/content/ExampleBox";
import LessonTable from "../../../components/lesson/content/LessonTable";
import ImageCard from "../../../components/lesson/content/ImageCard";
import SummaryBox from "../../../components/lesson/content/SummaryBox";
import PracticeCard from "../../../components/lesson/content/PracticeCard";

const questions = [
    {
        question: "What is the best version of Excel for learning all features in this course?",
        options: [
            "Excel Mobile",
            "Excel Online",
            "Excel Desktop",
            "Google Sheets",
        ],
        answer: 2,
        explanation:
            "The Desktop version includes all Excel features such as Pivot Tables, Power Query, Charts, and VBA, making it the best choice for learning."
    },
    {
        question: "Which account is required to download and activate Microsoft Excel?",
        options: [
            "Google Account",
            "Microsoft Account",
            "Facebook Account",
            "Apple ID",
        ],
        answer: 1,
        explanation:
            "A Microsoft Account is required to download, install, and activate Microsoft Excel."
    },
    {
        question: "Which version of Excel can you use directly in a web browser without installing software?",
        options: [
            "Excel Desktop",
            "Excel Online",
            "Excel Mobile",
            "Excel VBA",
        ],
        answer: 1,
        explanation:
            "Excel Online runs directly in your browser, so you don't need to install any software."
    },
    {
        question: "What is the first thing you should do after installing Microsoft Excel?",
        options: [
            "Delete the workbook",
            "Open Excel and create a Blank Workbook",
            "Install Windows again",
            "Uninstall Microsoft Office",
        ],
        answer: 1,
        explanation:
            "After installation, you should open Excel and create your first Blank Workbook to ensure everything is working correctly."
    },
    {
        question: "If Excel shows an activation error, what is the most likely solution?",
        options: [
            "Restart the monitor",
            "Use the Microsoft account that owns the Office license",
            "Delete all Excel files",
            "Turn off the internet permanently",
        ],
        answer: 1,
        explanation:
            "Most activation problems occur because the wrong Microsoft account is being used. Sign in with the account that owns the license."
    },
    {
        question: "Which of the following is a recommended system requirement for Microsoft Excel?",
        options: [
            "Windows 10 or Windows 11",
            "512 MB RAM",
            "No internet connection",
            "No Microsoft Account",
        ],
        answer: 0,
        explanation:
            "Windows 10 or Windows 11, at least 4 GB RAM, internet for installation, and a Microsoft Account are recommended."
    },
    {
        question: "Rahul from the lesson couldn't properly practice Excel because:",
        options: [
            "His keyboard wasn't working",
            "Excel wasn't installed on his laptop",
            "His monitor was broken",
            "He forgot his password",
        ],
        answer: 1,
        explanation:
            "The real-world example explained that Rahul watched tutorials but couldn't practice because Excel wasn't installed."
    },
    {
        question: "Why is the Desktop version preferred over Excel Online in this course?",
        options: [
            "It uses less electricity",
            "It contains all Excel features including Power Query and VBA",
            "It doesn't require a keyboard",
            "It only works offline",
        ],
        answer: 1,
        explanation:
            "The Desktop version provides every Excel feature you'll learn throughout this course, including advanced tools that aren't fully available in Excel Online."
    },
];

export default function InstallingMicrosoftExcel() {
    return (
    <>
            {/* What You'll Learn */}

            <LessonSection title="What You'll Learn">

                <ul className="list-disc space-y-3 pl-6">
                    <li>Understand the different ways to use Microsoft Excel.</li>
                    <li>Learn how to install Excel on your computer.</li>
                    <li>Know the difference between Excel Desktop and Excel Online.</li>
                    <li>Learn the basic system requirements.</li>
                    <li>Open your first Excel workbook.</li>
                </ul>

            </LessonSection>

            {/* Introduction */}

            <LessonSection title="Installing Microsoft Excel">

                <p>
                    Before you can start creating spreadsheets, formulas, charts, and
                    dashboards, you first need Microsoft Excel on your computer.
                </p>

                <p>
                    Installing Excel only takes a few minutes, but doing it correctly
                    ensures you receive the latest updates, security fixes, and new
                    features from Microsoft.
                </p>

                <InfoBox>
                    <p>
                        Don't worry if you've never installed software before. In this
                        lesson, we'll go through every step in simple language.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Real World Story */}

            <LessonSection title="A Real World Scenario">

                <ExampleBox title="Meet Rahul">

                    <p>
                        Rahul wanted to learn Excel from YouTube videos. Every tutorial
                        started with formulas and tables, but he didn't even have Excel
                        installed on his laptop.
                    </p>

                    <p>
                        He tried using Notepad instead, but quickly realized he couldn't
                        practice anything. After installing Microsoft Excel, he was able
                        to follow every lesson, practice every formula, and improve much
                        faster.
                    </p>

                </ExampleBox>

                <TipBox>
                    <p>
                        Watching tutorials without practicing is like learning to drive by
                        only watching videos. You need Excel installed to practice every
                        lesson yourself.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Image */}

            <LessonSection title="Microsoft Excel">

                <ImageCard
                    src="/images/lessons/fundamentals/install-excel.png"
                    alt="Installing Microsoft Excel"
                    caption="Microsoft Excel can be installed using Microsoft 365 or used directly from a web browser."
                />

            </LessonSection>

            {/* Different Versions */}

            <LessonSection title="Different Ways to Use Excel">

                <p>
                    Microsoft provides Excel in different versions depending on your
                    needs. Some people prefer installing it on their computer, while
                    others use it directly in a web browser.
                </p>

                <LessonTable
                    headers={[
                        "Version",
                        "Internet Required",
                        "Best For",
                    ]}
                    rows={[
                        [
                            "Excel Desktop",
                            "Only during installation",
                            "Students, professionals and daily work",
                        ],
                        [
                            "Excel Online",
                            "Yes",
                            "Learning and basic editing",
                        ],
                        [
                            "Excel Mobile",
                            "Yes",
                            "Quick editing on phone",
                        ],
                    ]}
                />

            </LessonSection>

            {/* Which Version */}

            <LessonSection title="Which Version Should You Choose?">

                <p>
                    If you're serious about learning Excel, the Desktop version is the
                    best choice because it contains every feature you'll learn in this
                    course.
                </p>

                <TipBox>
                    <p>
                        If you don't have Microsoft Office yet, you can still start
                        learning using Excel Online for free and switch to the Desktop
                        version later.
                    </p>
                </TipBox>

            </LessonSection>

            {/* System Requirements */}

            <LessonSection title="Basic System Requirements">

                <LessonTable
                    headers={[
                        "Requirement",
                        "Recommended",
                    ]}
                    rows={[
                        ["Operating System", "Windows 10 or Windows 11"],
                        ["RAM", "4 GB or more"],
                        ["Storage", "At least 5 GB free space"],
                        ["Internet", "Required for download and activation"],
                        ["Microsoft Account", "Required"],
                    ]}
                />

                <InfoBox>
                    <p>
                        Most modern laptops easily meet these requirements, so installation
                        is usually smooth.
                    </p>
                </InfoBox>

            </LessonSection>
            {/* Step by Step Installation */}

            <LessonSection title="How to Install Microsoft Excel">

                <p>
                    Installing Microsoft Excel is very simple. Just follow these steps one
                    by one.
                </p>

                <ExampleBox title="Step 1: Open the Microsoft Website">

                    <p>
                        Open your web browser and visit the official Microsoft website.
                        Sign in using your Microsoft account. If you don't have one, create
                        a free account.
                    </p>

                </ExampleBox>

                <ExampleBox title="Step 2: Download Microsoft Office">

                    <p>
                        After signing in, click <strong>Install Office</strong> or
                        <strong> Install Apps</strong>. Microsoft will start downloading
                        the Office installer.
                    </p>

                </ExampleBox>

                <ExampleBox title="Step 3: Run the Installer">

                    <p>
                        Open the downloaded setup file and allow Windows to install
                        Microsoft Office. The installation process may take several
                        minutes depending on your internet speed.
                    </p>

                </ExampleBox>

                <ExampleBox title="Step 4: Open Excel">

                    <p>
                        After installation is complete, open the Start Menu, search for
                        <strong> Excel</strong>, and launch Microsoft Excel.
                    </p>

                </ExampleBox>

            </LessonSection>

            {/* First Launch */}

            <LessonSection title="Opening Excel for the First Time">

                <p>
                    When you open Excel for the first time, you'll see the Start Screen.
                    From here you can create a new workbook or open an existing file.
                </p>

                <LessonTable
                    headers={["Option", "Purpose"]}
                    rows={[
                        ["Blank Workbook", "Create a completely new Excel file"],
                        ["Templates", "Start with ready-made designs"],
                        ["Recent Files", "Open files you've recently worked on"],
                        ["Search", "Find workbooks quickly"],
                    ]}
                />

            </LessonSection>

            {/* Activation */}

            <LessonSection title="Do You Need to Activate Excel?">

                <p>
                    Yes. If you purchased Microsoft Office or subscribed to Microsoft
                    365, simply sign in using the same Microsoft account used during the
                    purchase. Excel will activate automatically.
                </p>

                <InfoBox>
                    <p>
                        If Excel isn't activated, you can still open it, but some features
                        like saving files or editing may be limited.
                    </p>
                </InfoBox>

            </LessonSection>

            {/* Common Problems */}

            <LessonSection title="Common Installation Problems">

                <LessonTable
                    headers={[
                        "Problem",
                        "Possible Solution",
                    ]}
                    rows={[
                        [
                            "Installation won't start",
                            "Restart your computer and download the installer again.",
                        ],
                        [
                            "Not enough storage",
                            "Free some disk space before installing Office.",
                        ],
                        [
                            "Activation failed",
                            "Sign in with the Microsoft account that owns the license.",
                        ],
                        [
                            "Excel won't open",
                            "Repair Microsoft Office from Windows Settings.",
                        ],
                        [
                            "Download is very slow",
                            "Check your internet connection and try again later.",
                        ],
                    ]}
                />

            </LessonSection>

            {/* Desktop vs Online */}

            <LessonSection title="Excel Desktop vs Excel Online">

                <p>
                    Both versions are useful, but they are designed for different
                    purposes.
                </p>

                <LessonTable
                    headers={[
                        "Excel Desktop",
                        "Excel Online",
                    ]}
                    rows={[
                        [
                            "Works without internet after installation",
                            "Requires internet connection",
                        ],
                        [
                            "All Excel features available",
                            "Limited advanced features",
                        ],
                        [
                            "Best for large projects",
                            "Best for quick editing and learning",
                        ],
                        [
                            "Supports VBA and Power Query",
                            "Limited automation features",
                        ],
                    ]}
                />

                <TipBox>
                    <p>
                        Throughout this course, we'll use the Desktop version because it
                        includes every feature you'll need, including Pivot Tables,
                        Power Query, and Macros.
                    </p>
                </TipBox>

            </LessonSection>

            {/* Before Next Lesson */}

            <LessonSection title="Before Moving to the Next Lesson">

                <p>
                    Before continuing, make sure you've completed these simple tasks.
                </p>

                <LessonTable
                    headers={["Task", "Status"]}
                    rows={[
                        ["Microsoft Excel installed", "✅"],
                        ["Excel opens successfully", "✅"],
                        ["Created a Blank Workbook", "✅"],
                        ["Saved your first workbook", "✅"],
                    ]}
                />

            </LessonSection>

            {/* Summary */}

            <SummaryBox
                points={[
                    "Microsoft Excel can be used as a Desktop application, Online, or on Mobile devices.",
                    "The Desktop version is recommended because it includes all Excel features.",
                    "Installing Excel only takes a few minutes and requires a Microsoft account.",
                    "The Start Screen lets you create a Blank Workbook or open recent files.",
                    "If installation fails, checking storage space, internet connection, or activation usually solves the problem.",
                    "Before continuing, make sure Excel is installed and opens correctly on your computer.",
                ]}
            />

            {/* Practice */}

            <PracticeCard
                questions={questions}
            />

    </>
    );
}
