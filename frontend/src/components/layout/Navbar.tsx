import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, LogOut, LayoutDashboard } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
import { Sparkles } from "lucide-react";

const navItems = [
  { label: "Learn", path: "/learn" },
  { label: "Practice", path: "/practice" },
  { label: "Projects", path: "/projects" },
  { label: "Interview", path: "/interview" },
  { label: "Resources", path: "/resources" },
];

function getInitials(name = "") {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        menuRef.current &&
        e.target instanceof Node &&
        !menuRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0b0f0d]/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2fa866] to-[#175c37] text-sm font-bold text-white shadow-md shadow-emerald-900/20 sm:h-9 sm:w-9">
            E
            <Sparkles className="absolute -right-1 -top-1 h-3 w-3 text-emerald-300" />
          </div>
          <span className="text-[15px] font-semibold text-gray-900 dark:text-white">
            ExcelMaster
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-0.5 rounded-full bg-gray-100/80 p-1 lg:flex dark:bg-white/5">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${isActive
                  ? "bg-white text-gray-900 shadow-sm dark:bg-white/10 dark:text-white"
                  : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <div className="relative hidden lg:block" ref={menuRef}>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2.5 transition-colors hover:bg-gray-100 dark:hover:bg-white/5"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                  {getInitials(user?.name)}
                </div>
                <span className="text-[13px] font-medium text-gray-700 dark:text-gray-200">
                  {user?.name?.split(" ")[0]}
                </span>
                <ChevronDown
                  size={14}
                  className={`text-gray-400 transition-transform ${menuOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white py-1 shadow-lg dark:border-white/10 dark:bg-[#121614]"
                  >
                    <Link
                      to="/dashboard"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-[13px] font-medium text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/5"
                    >
                      <LayoutDashboard size={15} />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2.5 px-3.5 py-2 text-left text-[13px] font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
                    >
                      <LogOut size={15} />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="hidden rounded-full px-3.5 py-2 text-[13px] font-medium text-gray-600 transition-colors hover:text-gray-900 lg:inline-block dark:text-gray-300 dark:hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="hidden rounded-full bg-gray-900 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-gray-800 lg:inline-block dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                Sign up
              </Link>
            </>
          )}

          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden dark:text-gray-300 dark:hover:bg-white/10"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
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
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden dark:border-white/10 dark:bg-[#0b0f0d]"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-sm font-medium ${isActive
                      ? "bg-gray-100 text-gray-900 dark:bg-white/10 dark:text-white"
                      : "text-gray-600 dark:text-gray-300"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="mt-3 border-t border-gray-100 pt-3 dark:border-white/10">
                {isAuthenticated ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2.5 px-2 py-1.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-50 text-[12px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                        {getInitials(user?.name)}
                      </div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {user?.name}
                      </span>
                    </div>
                    <Link
                      to="/dashboard"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-full bg-gray-900 px-5 py-2.5 text-center text-sm font-semibold text-white dark:bg-white dark:text-gray-900"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setMobileOpen(false);
                      }}
                      className="rounded-full border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-600 dark:border-red-500/30"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <Link
                      to="/login"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-full border border-gray-200 px-5 py-2.5 text-center text-sm font-semibold text-gray-700 dark:border-white/10 dark:text-gray-200"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-full bg-gray-900 px-5 py-2.5 text-center text-sm font-semibold text-white dark:bg-white dark:text-gray-900"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}