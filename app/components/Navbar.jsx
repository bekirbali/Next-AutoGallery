"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/cars", label: "Cars" },
  { path: "/contact", label: "Contact" },
  { path: "/admin", label: "Admin" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleScroll = () => {
      // Get height of hero section (approximate)
      const heroHeight =
        document.querySelector("main")?.firstElementChild?.offsetHeight || 600;

      if (window.scrollY > heroHeight - 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        ref={navbarRef}
        className={`w-full py-4 px-6 md:px-8 lg:px-12 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-50 bg-[#111827] shadow-lg transition-transform duration-300"
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold flex flex-col">
            <span className="">ÖZAK</span>
            <span className="text-[#3b82f6] text-sm mx-auto">otomotiv</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <Link key={link.path} href={link.path} className="relative">
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#3b82f6]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white hover:text-[#3b82f6] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden py-4 bg-[#111827]"
          >
            <nav className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative ${
                      isActive ? "text-[#3b82f6] font-medium" : "text-white"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </header>
      {isSticky && <div style={{ height: `${navbarHeight}px` }} />}
    </>
  );
}
