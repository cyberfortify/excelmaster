// src/data/lessons/formulas.ts

export const formulas = {
  id: "formulas",

  level: 3,

  title: "Formulas & Functions",

  description:
    "Learn Excel formulas and functions from basic calculations to advanced lookups and dynamic arrays.",

  difficulty: "Beginner → Intermediate",

  duration: "10 Hours",

  color: "yellow",

  icon: "Calculator",

  sections: [
    {
      title: "Arithmetic Functions",

      lessons: [
        {
          id: 1,
          title: "SUM Function",
          slug: "sum-function",
          duration: "12 min",
          difficulty: "Beginner",
          completed: false,
        },
        {
          id: 2,
          title: "SUMIF Function",
          slug: "sumif-function",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 3,
          title: "SUMIFS Function",
          slug: "sumifs-function",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 4,
          title: "AVERAGE Function",
          slug: "average-function",
          duration: "10 min",
          difficulty: "Beginner",
          completed: false,
        },
        {
          id: 5,
          title: "AVERAGEIF Function",
          slug: "averageif-function",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 6,
          title: "MAX Function",
          slug: "max-function",
          duration: "8 min",
          difficulty: "Beginner",
          completed: false,
        },
        {
          id: 7,
          title: "MIN Function",
          slug: "min-function",
          duration: "8 min",
          difficulty: "Beginner",
          completed: false,
        },
        {
          id: 8,
          title: "COUNT Function",
          slug: "count-function",
          duration: "10 min",
          difficulty: "Beginner",
          completed: false,
        },
        {
          id: 9,
          title: "COUNTA Function",
          slug: "counta-function",
          duration: "10 min",
          difficulty: "Beginner",
          completed: false,
        },
        {
          id: 10,
          title: "COUNTIF Function",
          slug: "countif-function",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 11,
          title: "COUNTIFS Function",
          slug: "countifs-function",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },

    {
      title: "Logical Functions",

      lessons: [
        {
          id: 12,
          title: "IF Function",
          slug: "if-function",
          duration: "20 min",
          difficulty: "Beginner",
          completed: false,
        },
        {
          id: 13,
          title: "IFS Function",
          slug: "ifs-function",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 14,
          title: "AND Function",
          slug: "and-function",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 15,
          title: "OR Function",
          slug: "or-function",
          duration: "12 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 16,
          title: "NOT Function",
          slug: "not-function",
          duration: "10 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 17,
          title: "IFERROR Function",
          slug: "iferror-function",
          duration: "15 min",
          difficulty: "Intermediate",
          completed: false,
        },
      ],
    },

    {
      title: "Lookup Functions",

      lessons: [
        {
          id: 18,
          title: "VLOOKUP Function",
          slug: "vlookup-function",
          duration: "25 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 19,
          title: "HLOOKUP Function",
          slug: "hlookup-function",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 20,
          title: "XLOOKUP Function",
          slug: "xlookup-function",
          duration: "30 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 21,
          title: "INDEX Function",
          slug: "index-function",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 22,
          title: "MATCH Function",
          slug: "match-function",
          duration: "18 min",
          difficulty: "Intermediate",
          completed: false,
        },
        {
          id: 23,
          title: "INDEX + MATCH",
          slug: "index-match",
          duration: "30 min",
          difficulty: "Advanced",
          completed: false,
        },
      ],
    },

    {
      title: "Text Functions",

      lessons: [
        { id: 24, title: "LEFT Function", slug: "left-function", duration: "10 min", difficulty: "Beginner", completed: false },
        { id: 25, title: "RIGHT Function", slug: "right-function", duration: "10 min", difficulty: "Beginner", completed: false },
        { id: 26, title: "MID Function", slug: "mid-function", duration: "10 min", difficulty: "Beginner", completed: false },
        { id: 27, title: "LEN Function", slug: "len-function", duration: "8 min", difficulty: "Beginner", completed: false },
        { id: 28, title: "TRIM Function", slug: "trim-function", duration: "10 min", difficulty: "Beginner", completed: false },
        { id: 29, title: "UPPER Function", slug: "upper-function", duration: "8 min", difficulty: "Beginner", completed: false },
        { id: 30, title: "LOWER Function", slug: "lower-function", duration: "8 min", difficulty: "Beginner", completed: false },
        { id: 31, title: "PROPER Function", slug: "proper-function", duration: "10 min", difficulty: "Beginner", completed: false },
        { id: 32, title: "CONCAT Function", slug: "concat-function", duration: "10 min", difficulty: "Intermediate", completed: false },
        { id: 33, title: "TEXTJOIN Function", slug: "textjoin-function", duration: "15 min", difficulty: "Intermediate", completed: false },
        { id: 34, title: "SUBSTITUTE Function", slug: "substitute-function", duration: "12 min", difficulty: "Intermediate", completed: false },
        { id: 35, title: "REPLACE Function", slug: "replace-function", duration: "12 min", difficulty: "Intermediate", completed: false },
        { id: 36, title: "TEXT Function", slug: "text-function", duration: "15 min", difficulty: "Intermediate", completed: false },
      ],
    },

    {
      title: "Date & Time Functions",

      lessons: [
        { id: 37, title: "TODAY Function", slug: "today-function", duration: "8 min", difficulty: "Beginner", completed: false },
        { id: 38, title: "NOW Function", slug: "now-function", duration: "8 min", difficulty: "Beginner", completed: false },
        { id: 39, title: "DATE Function", slug: "date-function", duration: "12 min", difficulty: "Beginner", completed: false },
        { id: 40, title: "YEAR Function", slug: "year-function", duration: "8 min", difficulty: "Beginner", completed: false },
        { id: 41, title: "MONTH Function", slug: "month-function", duration: "8 min", difficulty: "Beginner", completed: false },
        { id: 42, title: "DAY Function", slug: "day-function", duration: "8 min", difficulty: "Beginner", completed: false },
        { id: 43, title: "WEEKDAY Function", slug: "weekday-function", duration: "12 min", difficulty: "Intermediate", completed: false },
        { id: 44, title: "NETWORKDAYS Function", slug: "networkdays-function", duration: "15 min", difficulty: "Intermediate", completed: false },
        { id: 45, title: "EDATE Function", slug: "edate-function", duration: "12 min", difficulty: "Intermediate", completed: false },
        { id: 46, title: "EOMONTH Function", slug: "eomonth-function", duration: "12 min", difficulty: "Intermediate", completed: false },
      ],
    },

    {
      title: "Dynamic Array Functions",

      lessons: [
        { id: 47, title: "FILTER Function", slug: "filter-function", duration: "20 min", difficulty: "Advanced", completed: false },
        { id: 48, title: "SORT Function", slug: "sort-function", duration: "15 min", difficulty: "Advanced", completed: false },
        { id: 49, title: "UNIQUE Function", slug: "unique-function", duration: "15 min", difficulty: "Advanced", completed: false },
        { id: 50, title: "SEQUENCE Function", slug: "sequence-function", duration: "15 min", difficulty: "Advanced", completed: false },
      ],
    },
  ],
};