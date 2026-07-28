// src/data/lessons/pivotTables.ts
import type { LessonCategoryWithSections } from "../lessonTypes";

export const pivotTables: LessonCategoryWithSections = {
  id: "pivot-tables",

  level: 7,

  title: "Pivot Tables & Pivot Charts",

  description:
    "Master Pivot Tables and Pivot Charts to summarize, analyze, and visualize large datasets efficiently.",

  difficulty: "Intermediate → Advanced",

  duration: "6 Hours",

  color: "amber",

  icon: "PieChart",

  sections: [
    {
      title: "Pivot Table Basics",

      lessons: [
        {
          id: 1,
          title: "Introduction to Pivot Tables",
          slug: "introduction-to-pivot-tables",
          duration: "10 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 2,
          title: "Creating Your First Pivot Table",
          slug: "creating-first-pivot-table",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 3,
          title: "Understanding Rows, Columns & Values",
          slug: "pivot-rows-columns-values",
          duration: "20 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 4,
          title: "Pivot Table Field List",
          slug: "pivot-table-field-list",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },

    {
      title: "Filtering & Sorting",

      lessons: [
        {
          id: 5,
          title: "Filtering Pivot Tables",
          slug: "filtering-pivot-tables",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 6,
          title: "Sorting Pivot Tables",
          slug: "sorting-pivot-tables",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 7,
          title: "Grouping Data",
          slug: "grouping-pivot-data",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 8,
          title: "Grouping Dates",
          slug: "grouping-dates",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },

    {
      title: "Calculations",

      lessons: [
        {
          id: 9,
          title: "Calculated Fields",
          slug: "calculated-fields",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 10,
          title: "Calculated Items",
          slug: "calculated-items",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 11,
          title: "Value Field Settings",
          slug: "value-field-settings",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 12,
          title: "Show Values As",
          slug: "show-values-as",
          duration: "18 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },

    {
      title: "Pivot Charts",

      lessons: [
        {
          id: 13,
          title: "Introduction to Pivot Charts",
          slug: "introduction-to-pivot-charts",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 14,
          title: "Creating Pivot Charts",
          slug: "creating-pivot-charts",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 15,
          title: "Formatting Pivot Charts",
          slug: "formatting-pivot-charts",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },

    {
      title: "Interactive Analysis",

      lessons: [
        {
          id: 16,
          title: "Using Slicers",
          slug: "using-slicers",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 17,
          title: "Using Timeline",
          slug: "using-timeline",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 18,
          title: "Connecting Multiple Pivot Tables",
          slug: "connecting-multiple-pivot-tables",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },

    {
      title: "Advanced Pivot Tables",

      lessons: [
        {
          id: 19,
          title: "Refreshing Pivot Tables",
          slug: "refreshing-pivot-tables",
          duration: "10 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 20,
          title: "Changing Data Source",
          slug: "changing-pivot-data-source",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 21,
          title: "Pivot Table Options",
          slug: "pivot-table-options",
          duration: "15 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 22,
          title: "Common Pivot Table Errors",
          slug: "pivot-table-errors",
          duration: "15 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 23,
          title: "Best Practices for Pivot Tables",
          slug: "pivot-table-best-practices",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },
  ],
};