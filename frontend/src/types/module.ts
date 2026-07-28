import type { LucideIcon } from "lucide-react";

export interface Module {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  lessons: number;
  duration: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  color: string;
}