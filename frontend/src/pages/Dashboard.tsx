import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  LogOut,
  BookOpen,
  CheckCircle2,
  Award,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";

import { useAuth } from "../context/AuthContext";
import { getDashboard } from "../api/progress";

interface ProgressRecord {
  id: number;
  module_slug: string;
  module_name: string;
  progress: number;
  status: string;
}

interface DashboardData {
  courses_started: number;
  courses_completed: number;
  courses_in_progress: number;
  progress: ProgressRecord[];
}

function getInitials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getGreeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";

  if (hour < 17) return "Good afternoon";

  return "Good evening";
}

export default function Dashboard() {

  const { user, logout } = useAuth();

  const [dashboard, setDashboard] = useState<DashboardData | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    const loadDashboard = async () => {

      try {

        const data = await getDashboard();

        setDashboard(data);

      } catch (err) {

        console.error(err);

        setError("Unable to load dashboard.");

      } finally {

        setLoading(false);

      }

    };

    loadDashboard();

  }, []);

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-[#0b0f0d]">

        <div className="text-center">

          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-emerald-500"></div>

          <p className="text-sm text-gray-500 dark:text-gray-400">

            Loading Dashboard...

          </p>

        </div>

      </div>

    );

  }

  if (error) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-[#0b0f0d]">

        <div className="rounded-xl bg-red-500/10 p-6 text-center">

          <p className="font-medium text-red-500">

            {error}

          </p>

        </div>

      </div>

    );

  }

  const stats = [

    {
      label: "Courses Started",
      value: dashboard?.courses_started ?? 0,
      icon: BookOpen,
    },

    {
      label: "Completed",
      value: dashboard?.courses_completed ?? 0,
      icon: CheckCircle2,
    },

    {
      label: "In Progress",
      value: dashboard?.courses_in_progress ?? 0,
      icon: Award,
    },

  ];

  return (
  <div className="min-h-screen bg-gray-50 dark:bg-[#0b0f0d]">
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[13px] font-semibold text-white dark:bg-white dark:text-gray-900">
            {getInitials(user?.name)}
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {getGreeting()}
            </p>

            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {user?.name}
            </h1>
          </div>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm transition hover:bg-red-50 hover:text-red-600 dark:border-white/10 dark:hover:bg-red-500/10"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-3">

        {stats.map(({ label, value, icon: Icon }) => (

          <div
            key={label}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#121614]"
          >

            <div className="flex items-center justify-between">

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {label}
              </span>

              <div className="rounded-full bg-emerald-500/10 p-2">

                <Icon
                  size={18}
                  className="text-emerald-500"
                />

              </div>

            </div>

            <p className="mt-5 text-4xl font-bold text-gray-900 dark:text-white">
              {value}
            </p>

          </div>

        ))}

      </div>

      {/* Continue Learning */}

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#121614]">

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-emerald-500/10 p-3">

              <Sparkles
                size={22}
                className="text-emerald-500"
              />

            </div>

            <div>

              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">

                Continue Learning

              </h2>

              {dashboard?.courses_started ? (

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">

                  You have{" "}
                  <span className="font-semibold">
                    {dashboard.courses_in_progress}
                  </span>{" "}
                  course(s) in progress.

                </p>

              ) : (

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">

                  Start your Excel learning journey and master spreadsheets step by step.

                </p>

              )}

            </div>

          </div>

          <Link
            to="/learn"
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition hover:bg-emerald-700"
          >

            {dashboard?.courses_started
              ? "Continue Learning"
              : "Start Learning"}

            <ArrowRight size={16} />

          </Link>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#121614]">

        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">

          Recent Activity

        </h2>

        {dashboard?.progress?.length ? (

          <div className="mt-6 space-y-4">

            {dashboard.progress.map((item) => (

              <div
                key={item.id}
                className="flex items-center justify-between rounded-xl border border-gray-100 p-4 dark:border-white/10"
              >

                <div>

                  <h3 className="font-semibold text-gray-900 dark:text-white">

                    {item.module_name}

                  </h3>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">

                    {item.progress}% completed

                  </p>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "completed"
                      ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-400"
                  }`}
                >

                  {item.status}

                </span>

              </div>

            ))}

          </div>

        ) : (

          <div className="flex flex-col items-center justify-center py-12">

            <div className="rounded-full bg-gray-100 p-4 dark:bg-white/5">

              <Clock
                size={24}
                className="text-gray-400"
              />

            </div>

            <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">

              No activity yet

            </h3>

            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">

              Once you start learning, your progress will appear here.

            </p>

          </div>

        )}

      </div>

    </div>
  </div>
)};