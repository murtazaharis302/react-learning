import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-blue-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-indigo-500 to-rose-400 text-white font-bold">
              React
            </div>
            <div>
              <div className="text-lg font-semibold">Navbar</div>
              <div className="text-xs text- blue-500 -mt-1">Harris Murtaza</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="hover:text-indigo-600">
              Home
            </a>
            <a href="/about" className="hover:text-indigo-600">
              About
            </a>
            <a href="/contact" className="hover:text-indigo-600">
              Contact
            </a>
            <a href="/password" className="hover:text-indigo-600">
                Password
            </a>
             <a href="/input" className="hover:text-indigo-600">
                Input
            </a>
             <a href="/text" className="hover:text-indigo-600">
                Text
            </a>
            <button className="ml-2 px-4 py-2 rounded-md bg-indigo-600 text-white shadow hover:opacity-95">
              Get Started
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Open menu"
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a className="block" href="/">
                Home
              </a>
              <a className="block" href="/about">
                About
              </a>
              <a className="block" href="/contact">
                Contact
              </a>
              <a className="block" href="/password">
                Password
                </a>
                <a className="block" href="/input">
                Input
                </a>
                <a className="block" href="/text">
                Text
                </a>
              <button className="w-full mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

