export interface RoadmapStep {
  id: number;
  title: string;
  description: string;
  duration: string;
  slug: string;
}

export const roadmapSteps: RoadmapStep[] = [
  {
    id: 1,
    title: "Introduction to Excel",
    description: "Learn what Microsoft Excel is and where it is used.",
    duration: "5 min",
    slug: "introduction-to-excel",
  },
  {
    id: 2,
    title: "Excel Interface",
    description: "Understand the Ribbon, Toolbar, Workbook and Worksheet.",
    duration: "8 min",
    slug: "excel-interface",
  },
  {
    id: 3,
    title: "Rows & Columns",
    description: "Learn how Excel organizes data.",
    duration: "6 min",
    slug: "rows-and-columns",
  },
  {
    id: 4,
    title: "Cells & Ranges",
    description: "Work with cells, ranges and selections.",
    duration: "8 min",
    slug: "cells-and-ranges",
  },
  {
    id: 5,
    title: "Formatting Basics",
    description: "Format worksheets professionally.",
    duration: "10 min",
    slug: "formatting-basics",
  },
  {
    id: 6,
    title: "Formula Basics",
    description: "Write your first Excel formulas.",
    duration: "12 min",
    slug: "formula-basics",
  },
];