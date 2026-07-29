import api from "./api";

export const startModule = async (
  module_slug: string,
  module_name: string
) => {
  const res = await api.post("/progress/start", {
    module_slug,
    module_name,
  });

  return res.data;
};

export const getProgress = async (): Promise<ModuleProgress[]> => {
  const res = await api.get("/progress");

  console.log("Progress Response:", res.data);
  console.log("Is Array:", Array.isArray(res.data));

  return res.data;
};

export const updateProgress = async (
  module_slug: string,
  progress: number
) => {
  const res = await api.put("/progress/update", {
    module_slug,
    progress,
  });

  return res.data;
};

export const getDashboard = async () => {
  const res = await api.get("/progress/dashboard");
  return res.data;
};

export interface LessonStatus {
  lesson_slug: string;
  completed: boolean;
}

export const getCompletedLessons = async (
  module_slug: string
): Promise<LessonStatus[]> => {

  const res = await api.get(
    `/lesson-progress/list/${module_slug}`
  );

  return res.data;
};


export interface ModuleProgress {
  module_slug: string;
  module_name: string;
  progress: number;
  status: "started" | "completed";
}

/* ===========================
   Lesson Progress
=========================== */

export interface CompleteLessonRequest {
  module_slug: string;
  lesson_slug: string;
  total_lessons: number;
}

export interface LessonProgressResponse {
  message?: string;   // optional
  progress: number;
  completed_lessons: number;
  total_lessons: number;
  module_completed: boolean;
}

export const completeLesson = async (
  data: CompleteLessonRequest
): Promise<LessonProgressResponse> => {
  const res = await api.post(
    "/lesson-progress/complete",
    data
  );

  return res.data;
};


export interface ModuleLessonProgressResponse {
  progress: number;
  completed_lessons: number;
  total_lessons: number;
  module_completed: boolean;
}

export const getModuleLessonProgress = async (
  module_slug: string,
  total_lessons: number
): Promise<ModuleLessonProgressResponse> => {
  const res = await api.get(
    `/lesson-progress/module/${module_slug}`,
    {
      params: {
        total_lessons,
      },
    }
  );

  return res.data;
};


