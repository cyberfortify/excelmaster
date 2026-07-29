import type { ComponentType } from "react";
import { useRef, useEffect } from "react";
import { useLessonProgressContext } from "../../context/LessonProgressContext";

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

// Formatting
import CopyCutPaste from "../../content/lessons/formatting/copy-cut-paste";
import AutoFill from "../../content/lessons/formatting/autofill";
import FlashFill from "../../content/lessons/formatting/flash-fill";
import FindReplace from "../../content/lessons/formatting/find-and-replace";
import FontFormatting from "../../content/lessons/formatting/font-formatting";
import CellAlignment from "../../content/lessons/formatting/cell-alignment";
import Borders from "../../content/lessons/formatting/borders";
import FillColors from "../../content/lessons/formatting/colors-and-fill";
import NumberFormats from "../../content/lessons/formatting/number-formats";
import DateTimeFormats from "../../content/lessons/formatting/date-time-formats";
import FormatPainter from "../../content/lessons/formatting/format-painter";
import CellStyles from "../../content/lessons/formatting/cell-styles";
import Themes from "../../content/lessons/formatting/themes";
import ConditionalFormattingBasics from "../../content/lessons/formatting/conditional-formatting-basics";
import ClearFormatting from "../../content/lessons/formatting/clear-formatting";
import WrapText from "../../content/lessons/formatting/wrap-text";
import MergeCells from "../../content/lessons/formatting/merge-cells";
import FormattingPractice from "../../content/lessons/formatting/formatting-practice-exercise";

interface LessonContentProps {
  slug: string;
}

const lessonContent: Record<string, ComponentType> = {
  // fundamentals
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

  // Formatting
  "copy-cut-paste": CopyCutPaste,
  "autofill": AutoFill,
  "flash-fill": FlashFill,
  "find-and-replace": FindReplace,
  "font-formatting": FontFormatting,
  "cell-alignment": CellAlignment,
  "borders": Borders,
  "colors-and-fill": FillColors,
  "number-formats": NumberFormats,
  "date-time-formats": DateTimeFormats,
  "format-painter": FormatPainter,
  "cell-styles": CellStyles,
  "themes": Themes,
  "conditional-formatting-basics": ConditionalFormattingBasics,
  "clear-formatting": ClearFormatting,
  "wrap-text": WrapText,
  "merge-cells": MergeCells,
  "formatting-practice-exercise": FormattingPractice,
};

export default function LessonContent({
  slug,
}: LessonContentProps) {


  const articleRef = useRef<HTMLElement>(null);

  const {
    setReadingProgress,
  } = useLessonProgressContext();

  useEffect(() => {
    setReadingProgress(0);

    const article = articleRef.current;
    if (!article) return;

    const handleScroll = () => {
      const rect = article.getBoundingClientRect();

      const articleTop = window.scrollY + rect.top;
      const articleHeight = article.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const totalScrollable = articleHeight - viewportHeight;

      if (totalScrollable <= 0) {
        setReadingProgress(0);
        return;
      }

      const current = scrollY - articleTop;

      const percent = Math.max(
        0,
        Math.min(100, (current / totalScrollable) * 100)
      );

      setReadingProgress(Math.round(percent));
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slug, setReadingProgress]);

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
    <article
      ref={articleRef}
      className="prose prose-lg max-w-none dark:prose-invert"
    >
      <Content />
    </article>
  );
}