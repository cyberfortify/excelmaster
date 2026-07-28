// src/data/lessons/dataManagement.ts
import type { LessonCategoryWithSections } from "../lessonTypes";


export const dataManagement: LessonCategoryWithSections = {
  id: "data-management",

  level: 4,

  title: "Data Management",

  description:
    "Learn how to organize, clean, validate, and manage data efficiently in Excel.",

  difficulty: "Intermediate",

  duration: "4 Hours",

  color: "purple",

  icon: "Database",

  sections: [
    {
      title: "Sorting & Filtering",

      lessons: [
        {
          id: 1,
          title: "Sorting Data",
          slug: "sorting-data",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 2,
          title: "Multi-Level Sorting",
          slug: "multi-level-sorting",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 3,
          title: "Filtering Data",
          slug: "filtering-data",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 4,
          title: "Advanced Filter",
          slug: "advanced-filter",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },

    {
      title: "Cleaning Data",

      lessons: [
        {
          id: 5,
          title: "Remove Duplicates",
          slug: "remove-duplicates",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 6,
          title: "Text to Columns",
          slug: "text-to-columns",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 7,
          title: "Flash Fill (Advanced)",
          slug: "flash-fill-advanced",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },

    {
      title: "Validation & Organization",

      lessons: [
        {
          id: 8,
          title: "Data Validation",
          slug: "data-validation",
          duration: "20 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 9,
          title: "Creating Drop-down Lists",
          slug: "creating-dropdown-lists",
          duration: "20 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 10,
          title: "Group & Ungroup",
          slug: "group-and-ungroup",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 11,
          title: "Subtotal",
          slug: "subtotal",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 12,
          title: "Consolidate Data",
          slug: "consolidate-data",
          duration: "20 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },
  ],
};