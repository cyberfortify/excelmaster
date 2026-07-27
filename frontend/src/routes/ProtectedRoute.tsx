import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const { loading, isAuthenticated } = useAuth();

  // Wait until authentication check finishes
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-lg font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  // Redirect if user is not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Allow access
  return <>{children}</>;
}