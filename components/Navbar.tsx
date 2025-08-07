"use client";
import { useState, useEffect } from "react";

const sections = [
  { name: "Hero", id: "hero" },
  { name: "Features", id: "features" },
  { name: "Pricing", id: "pricing" },
  { name: "FAQ", id: "faq" },
  { name: "About", id: "about" },     // ✅ NEW
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur shadow-md dark:bg-gray-900/90"
          : "bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <h1
          className={`text-xl font-bold tracking-wide ${
            scrolled ? "text-gray-800 dark:text-white" : "text-white"
          }`}
        >
          ADmy<span className="text-yellow-300">BRAND</span>
        </h1>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-xl focus:outline-none transition-colors duration-300 dark:text-yellow-400 text-indigo-900"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden text-2xl ${
              scrolled ? "text-indigo-700 dark:text-white" : "text-white"
            }`}
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`transition duration-300 hover:text-yellow-300 ${
                  scrolled ? "text-gray-800 dark:text-white" : "text-white"
                }`}
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white dark:bg-gray-900 px-6 pb-4">
          {sections.map((section) => (
            <li key={section.id} className="py-2 border-b border-gray-200 dark:border-gray-700">
              <a
                href={`#${section.id}`}
                onClick={() => setOpen(false)}
                className="block text-indigo-700 dark:text-white hover:text-pink-700 transition duration-300"
              >
                {section.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
