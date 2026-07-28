// src/data/lessons/dataAnalysis.ts
import type { LessonCategoryWithSections } from "../lessonTypes";

export const dataAnalysis: LessonCategoryWithSections = {
  id: "data-analysis",

  level: 8,

  title: "Data Analysis",

  description:
    "Analyze data using Excel's powerful What-If Analysis tools, Solver, Forecasting, and Analysis ToolPak.",

  difficulty: "Advanced",

  duration: "5 Hours",

  color: "indigo",

  icon: "LineChart",

  sections: [
    {
      title: "What-If Analysis",

      lessons: [
        {
          id: 1,
          title: "Introduction to What-If Analysis",
          slug: "introduction-to-what-if-analysis",
          duration: "10 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 2,
          title: "Goal Seek",
          slug: "goal-seek",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 3,
          title: "Scenario Manager",
          slug: "scenario-manager",
          duration: "25 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 4,
          title: "One-Variable Data Table",
          slug: "one-variable-data-table",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 5,
          title: "Two-Variable Data Table",
          slug: "two-variable-data-table",
          duration: "25 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },

    {
      title: "Optimization",

      lessons: [
        {
          id: 6,
          title: "Introduction to Solver",
          slug: "introduction-to-solver",
          duration: "15 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 7,
          title: "Using Solver to Maximize Profit",
          slug: "solver-maximize-profit",
          duration: "25 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 8,
          title: "Using Solver with Constraints",
          slug: "solver-with-constraints",
          duration: "25 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },

    {
      title: "Forecasting",

      lessons: [
        {
          id: 9,
          title: "Forecast Sheet",
          slug: "forecast-sheet",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 10,
          title: "Moving Average Forecast",
          slug: "moving-average-forecast",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 11,
          title: "Trendlines & Predictions",
          slug: "trendlines-and-predictions",
          duration: "18 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },

    {
      title: "Analysis ToolPak",

      lessons: [
        {
          id: 12,
          title: "Enable Analysis ToolPak",
          slug: "enable-analysis-toolpak",
          duration: "8 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 13,
          title: "Descriptive Statistics",
          slug: "descriptive-statistics",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 14,
          title: "Histogram Analysis",
          slug: "histogram-analysis",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 15,
          title: "Correlation Analysis",
          slug: "correlation-analysis",
          duration: "18 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 16,
          title: "Regression Analysis",
          slug: "regression-analysis",
          duration: "30 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },

    {
      title: "Business Analysis",

      lessons: [
        {
          id: 17,
          title: "Break-Even Analysis",
          slug: "break-even-analysis",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 18,
          title: "Sensitivity Analysis",
          slug: "sensitivity-analysis",
          duration: "20 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 19,
          title: "Financial Modeling Basics",
          slug: "financial-modeling-basics",
          duration: "30 min",
          difficulty: "Advanced",
          completed: false,
        },
        {
          id: 20,
          title: "Business Case Study",
          slug: "business-analysis-case-study",
          duration: "40 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },
  ],
};