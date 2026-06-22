"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-lg font-semibold text-gray-900 tracking-tight">
          Taiwo<span className="text-emerald-600">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#work" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Work</a>
          <a href="#skills" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
          <a href="#about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          <a href="/taiwo-emmanuel-cv.pdf" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors">Download CV</a>
        </div>
        <button className="md:hidden text-gray-600" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          <a href="#work" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-gray-900">Work</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-gray-900">Skills</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-gray-900">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
          <a href="/taiwo-emmanuel-cv.pdf" className="text-sm bg-emerald-600 text-white px-4 py-2 rounded-full text-center hover:bg-emerald-700">Download CV</a>
        </div>
      )}
    </nav>
  );
}



