import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Search, Moon, Sun, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Learn", path: "/learn" },
  { label: "Practice", path: "/practice" },
  { label: "Projects", path: "/projects" },
  { label: "Interview", path: "/interview" },
  { label: "Resources", path: "/resources" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0f0d]/70">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#2fa866] to-[#175c37] text-lg font-bold text-white shadow-lg shadow-emerald-900/20 transition-transform group-hover:scale-105">
            E
            <Sparkles className="absolute -right-1.5 -top-1.5 h-4 w-4 text-emerald-300" />
          </div>
          <div>
            <h1 className="text-[15px] font-bold leading-tight text-gray-900 dark:text-white">
              Excel<span className="text-[#1e8449]">Master</span>
            </h1>
            <p className="text-[11px] font-medium tracking-wide text-gray-400">
              LEARN · PRACTICE · MASTER
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-gray-200/70 bg-gray-50/60 p-1 lg:flex dark:border-white/10 dark:bg-white/5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-[#1e8449] shadow-sm dark:bg-white/10 dark:text-emerald-400"
                    : "text-gray-600 hover:text-[#1e8449] dark:text-gray-300 dark:hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <button className="hidden items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-400 transition hover:border-gray-300 sm:flex dark:border-white/10">
            <Search size={16} />
            <span>Search</span>
            <kbd className="rounded border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[10px] dark:border-white/10 dark:bg-white/5">
              ⌘K
            </kbd>
          </button>

          <button
            onClick={() => setDark((d) => !d)}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/learn"
            className="hidden rounded-full bg-[#1e8449] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-900/20 transition hover:bg-[#166638] lg:inline-block"
          >
            Start Free
          </Link>

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden dark:hover:bg-white/10"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-gray-200 bg-white lg:hidden dark:border-white/10 dark:bg-[#0b0f0d]"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-medium ${
                      isActive
                        ? "bg-emerald-50 text-[#1e8449] dark:bg-white/10 dark:text-emerald-400"
                        : "text-gray-600 dark:text-gray-300"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/practice"
                className="mt-2 rounded-full bg-[#1e8449] px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Start Free
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}