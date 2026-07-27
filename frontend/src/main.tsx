import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";

import App from "./App";

import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          duration: 3500,
          style: {
            background: "#111613",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "14px",
            fontWeight: 500,
            boxShadow:
              "0 10px 30px -5px rgba(0,0,0,0.3), 0 4px 10px -4px rgba(0,0,0,0.2)",
            maxWidth: "380px",
          },
          success: {
            iconTheme: {
              primary: "#1e8449",
              secondary: "#fff",
            },
            style: {
              border: "1px solid rgba(30,132,73,0.3)",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
            style: {
              border: "1px solid rgba(239,68,68,0.3)",
            },
          },
          loading: {
            iconTheme: {
              primary: "#1e8449",
              secondary: "#fff",
            },
          },
        }}
      />
    </AuthProvider>
  </StrictMode>
);