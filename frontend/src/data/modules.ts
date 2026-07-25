import {
  BookOpen,
  Calculator,
  Palette,
  Table2,
  BarChart3,
  Database,
  Sparkles,
} from "lucide-react";

import type { Module } from "../types/module";

export const modules: Module[] = [
  {
    id: 1,
    slug: "excel-basics",
    title: "Excel Basics",
    description:
      "Learn Excel from scratch including workbooks, cells, rows and columns.",
    icon: BookOpen,
    lessons: 8,
    duration: "45 mins",
    difficulty: "Beginner",
    color: "from-emerald-500 to-green-600",
  },
  {
    id: 2,
    slug: "formatting",
    title: "Formatting",
    description:
      "Create professional spreadsheets using formatting tools.",
    icon: Palette,
    lessons: 10,
    duration: "1.5 hrs",
    difficulty: "Beginner",
    color: "from-sky-500 to-cyan-600",
  },
  {
    id: 3,
    slug: "formulas-functions",
    title: "Formulas & Functions",
    description:
      "Master Excel formulas and powerful built-in functions.",
    icon: Calculator,
    lessons: 18,
    duration: "3 hrs",
    difficulty: "Beginner",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    slug: "tables",
    title: "Tables",
    description:
      "Organize data with Excel tables and structured references.",
    icon: Table2,
    lessons: 9,
    duration: "2 hrs",
    difficulty: "Intermediate",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 5,
    slug: "charts",
    title: "Charts & Dashboards",
    description:
      "Build beautiful charts and interactive dashboards.",
    icon: BarChart3,
    lessons: 12,
    duration: "2.5 hrs",
    difficulty: "Intermediate",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 6,
    slug: "data-analysis",
    title: "Data Analysis",
    description:
      "Analyze, filter and summarize business datasets.",
    icon: Database,
    lessons: 14,
    duration: "3 hrs",
    difficulty: "Intermediate",
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: 7,
    slug: "advanced-excel",
    title: "Advanced Excel",
    description:
      "Become an advanced Excel professional with real-world skills.",
    icon: Sparkles,
    lessons: 20,
    duration: "4 hrs",
    difficulty: "Advanced",
    color: "from-yellow-500 to-orange-500",
  },
];