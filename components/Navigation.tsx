'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img 
              src="/kys_logo.png" 
              alt="Kennedy Yard Services Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-jd-green font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-jd-green font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-jd-green text-white px-6 py-2.5 rounded-md font-semibold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              href="/"
              className="block text-gray-700 hover:text-jd-green font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-jd-green font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-jd-green text-white px-6 py-2.5 rounded-md font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

