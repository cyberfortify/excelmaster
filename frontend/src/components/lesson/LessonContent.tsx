import type { ComponentType } from "react";

import IntroductionToExcel from "../../content/lessons/fundamentals/what-is-microsoft-excel";
import InstallingMicrosoftExcel from "../../content/lessons/fundamentals/installing-microsoft-excel";
import ExcelInterfaceOverview from "../../content/lessons/fundamentals/excel-interface-overview";
import RibbonAndTabs from "../../content/lessons/fundamentals/ribbon-tabs";
import QuickAccessToolbar from "../../content/lessons/fundamentals/quick-access-toolbar";
import WorkbookVsWorksheet from "../../content/lessons/fundamentals/workbook-vs-worksheet";
import RowsColumnsCells from "../../content/lessons/fundamentals/rows-columns-cells";
import CellReferences from "../../content/lessons/fundamentals/cell-references";
import EnteringEditingData from "../../content/lessons/fundamentals/entering-editing-data";
import SaveOpenCloseWorkbook from "../../content/lessons/fundamentals/save-open-close-workbook";
import NavigationShortcuts from "../../content/lessons/fundamentals/navigation-shortcuts";
import FreezePanes from "../../content/lessons/fundamentals/freeze-panes";
import SplitWindow from "../../content/lessons/fundamentals/split-window";
import ZoomAndViewOptions from "../../content/lessons/fundamentals/zoom-view-options";
import PracticeExercise from "../../content/lessons/fundamentals/practice-exercise";

interface LessonContentProps {
  slug: string;
}

const lessonContent: Record<string, ComponentType> = {
  "what-is-microsoft-excel": IntroductionToExcel,
  "installing-microsoft-excel": InstallingMicrosoftExcel,
  "excel-interface-overview": ExcelInterfaceOverview,
  "ribbon-and-tabs": RibbonAndTabs,
  "quick-access-toolbar": QuickAccessToolbar,
  "workbook-vs-worksheet": WorkbookVsWorksheet,
  "rows-columns-and-cells": RowsColumnsCells,
  "cell-references": CellReferences,
  "entering-and-editing-data": EnteringEditingData,
  "save-open-close-workbook": SaveOpenCloseWorkbook,
  "navigation-shortcuts": NavigationShortcuts,
  "freeze-panes": FreezePanes,
  "split-window": SplitWindow,
  "zoom-and-view-options": ZoomAndViewOptions,
  "excel-fundamentals-practice": PracticeExercise,
};

export default function LessonContent({
  slug,
}: LessonContentProps) {


  // console.log(slug);


  const Content =
    lessonContent[slug as keyof typeof lessonContent];

  if (!Content) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center dark:border-amber-700 dark:bg-amber-900/20">
        <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-200">
          Lesson Coming Soon
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          We're currently preparing this lesson.
          Please check back later.
        </p>
      </div>
    );
  }

  return (
    <article className="prose prose-lg max-w-none dark:prose-invert ">
      <Content />
    </article>
  );
}