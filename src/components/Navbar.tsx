"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", index: "01" },
  { href: "/about", label: "About", index: "02" },
  { href: "/projects", label: "Work", index: "03" },
  { href: "/blog", label: "Journal", index: "04" },
  { href: "/contact", label: "Contact", index: "05" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-paper-300 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-352 px-6 lg:px-10">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="group flex items-center">
              <img
                src="/csl-vanguard-logo.svg"
                alt="CSL Vanguard — Web Studio"
                className="h-11 w-auto"
              />
            </Link>

            <div className="hidden items-center gap-9 lg:flex">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group relative py-1 font-body text-sm font-medium"
                  >
                    <span
                      className={`transition-colors duration-300 ${
                        active
                          ? "text-ink-900"
                          : "text-ink-500 group-hover:text-ink-900"
                      }`}
                    >
                      {link.label}
                    </span>
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-cobalt-600 transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            <div className="hidden lg:block">
              <Link href="/contact" className="btn-primary text-sm">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <button
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center border border-ink-900 text-ink-900 lg:hidden"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-900/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="absolute right-0 top-0 bottom-0 w-[78%] max-w-sm bg-paper-50 p-8 pt-24 shadow-2xl"
            >
              <div className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-baseline gap-4 border-b border-paper-300 py-4 ${
                        pathname === link.href
                          ? "text-cobalt-600"
                          : "text-ink-900"
                      }`}
                    >
                      <span className="font-mono text-xs text-ink-400">
                        {link.index}
                      </span>
                      <span className="font-display text-2xl font-medium">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Link
                    href="/contact"
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Start a project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
