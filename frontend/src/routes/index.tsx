import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Learn from "../pages/Learn/Learn";
import Lesson from "../pages/Lesson/Lesson";
import Practice from "../pages/Practice/Practice";
import Projects from "../pages/Projects/Projects";
import Interview from "../pages/Interview/Interview";
import Resources from "../pages/Resources/Resources";
import NotFound from "../pages/NotFound/NotFound";

import LessonLayout from "../components/lesson/LessonLayout";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Website Pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/lesson" element={<LessonLayout />}>
          <Route path=":slug" element={<Lesson />} />
        </Route>

      {/* Lesson Pages */}
      <Route path="*" element={<NotFound />} />


    </Routes>
  );
}