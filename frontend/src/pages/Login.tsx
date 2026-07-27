import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Loader2, Sparkles } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await login(email, password);

      navigate("/dashboard");
    } catch (err: any) {
      console.log("LOGIN ERROR:", err);
      console.log("LOGIN RESPONSE:", err.response);
      console.log("LOGIN DATA:", err.response?.data);

      setError(err?.response?.data?.detail || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-8 sm:px-4 sm:py-12 dark:bg-[#0b0f0d]">
      <div className="w-full max-w-[380px] sm:max-w-[400px]">
        {/* Logo */}
        <div className="mb-6 flex justify-center sm:mb-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2fa866] to-[#175c37] text-sm font-bold text-white shadow-md shadow-emerald-900/20 sm:h-9 sm:w-9">
              E
              <Sparkles className="absolute -right-1 -top-1 h-3 w-3 text-emerald-300" />
            </div>
            <span className="text-sm font-semibold text-gray-900 sm:text-[16px] dark:text-white">
              Excel<span className="text-[#1e8449]">Master</span>
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm sm:rounded-2xl sm:p-8 dark:border-white/10 dark:bg-[#121614]">
          <div className="mb-5 text-center sm:mb-6">
            <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-white">
              Welcome back
            </h1>
            <p className="mt-1.5 text-xs text-gray-500 sm:text-[13px] dark:text-gray-400">
              Log in to continue your Excel journey
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-xs font-medium text-red-600 sm:mb-5 sm:px-3.5 sm:py-2.5 sm:text-[13px] dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-medium text-gray-700 sm:text-[13px] dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#1e8449] focus:ring-2 focus:ring-[#1e8449]/15 sm:px-3.5 sm:text-[14px] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-emerald-500/40 dark:focus:ring-emerald-500/10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-gray-700 sm:text-[13px] dark:text-gray-300"
                >
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-[11px] font-medium text-gray-500 hover:text-[#1e8449] sm:text-[12px] dark:text-gray-400 dark:hover:text-emerald-400"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 pr-10 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#1e8449] focus:ring-2 focus:ring-[#1e8449]/15 sm:px-3.5 sm:pr-11 sm:text-[14px] dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-emerald-500/40 dark:focus:ring-emerald-500/10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-0 top-0 flex h-full w-10 items-center justify-center text-gray-400 transition-colors hover:text-[#1e8449] sm:w-11 dark:hover:text-emerald-400"
                >
                  {showPassword ? <EyeOff size={16} className="sm:hidden" /> : <Eye size={16} className="sm:hidden" />}
                  {showPassword ? <EyeOff size={17} className="hidden sm:block" /> : <Eye size={17} className="hidden sm:block" />}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1e8449] py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition-colors hover:bg-[#166638] disabled:cursor-not-allowed disabled:opacity-60 sm:text-[14px]"
            >
              {loading && <Loader2 size={16} className="animate-spin" />}
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-gray-500 sm:mt-6 sm:text-[13px] dark:text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#1e8449] hover:underline dark:text-emerald-400"
            >
              Sign up
            </Link>
          </p>
        </div>

        <p className="mt-5 text-center text-[11px] text-gray-400 sm:mt-6 sm:text-[12px] dark:text-gray-500">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}