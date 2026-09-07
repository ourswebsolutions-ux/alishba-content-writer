
"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#pricing", label: "Pricing Plans" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black">
      <nav className="flex h-[66px] w-full items-center justify-between px-7">
        {/* Logo + Name */}
        <Link href="#home" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
            >
              <path
                d="M4 28V4H10.5L16 16.5L21.5 4H28V28H22V14L16.5 26H15.5L10 14V28H4Z"
                fill="#F5C518"
              />
            </svg>
          </div>

          <span className="text-[21px] font-medium tracking-tight text-white">
            Alishba Siddiq
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-normal text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            aria-label="Search"
            className="ml-1 text-white transition-opacity hover:opacity-80"
          >
            <Search className="h-[21px] w-[21px]" strokeWidth={2} />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex items-center justify-center text-white md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-800 bg-black px-7 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileClick}
                className="text-[16px] font-normal text-gray-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <button
              type="button"
              aria-label="Search"
              className="flex items-center gap-2 text-white"
            >
              <Search className="h-[21px] w-[21px]" strokeWidth={2} />
              <span className="text-[16px]">Search</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
