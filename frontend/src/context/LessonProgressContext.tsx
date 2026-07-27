import {
  createContext,
  useContext,
  ReactNode,
} from "react";

import useLessonProgress from "../hooks/useLessonProgress";

type LessonProgressContextType =
  ReturnType<typeof useLessonProgress>;

const LessonProgressContext =
  createContext<LessonProgressContextType | null>(null);

interface ProviderProps {
  children: ReactNode;
  value: LessonProgressContextType;
}

export function LessonProgressProvider({
  children,
  value,
}: ProviderProps) {
  return (
    <LessonProgressContext.Provider value={value}>
      {children}
    </LessonProgressContext.Provider>
  );
}

export function useLessonProgressContext() {
  const context = useContext(LessonProgressContext);

  if (!context) {
    throw new Error(
      "useLessonProgressContext must be used inside LessonProgressProvider"
    );
  }

  return context;
}