'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/team', label: 'Team' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-black border-b border-yellow-500 z-50 shadow-md"
    >
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-4 group">
          <Image src="/logo.jpeg" alt="MM Logo" width={60} height={60} className="rounded-full group-hover:scale-105 transition-transform" />
          <span className="text-yellow-400 font-bold text-xl tracking-wide group-hover:underline">MM Consultant</span>
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`block h-0.5 w-6 bg-yellow-400 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-yellow-400 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-yellow-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Links for desktop/tablet */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-yellow-300 hover:text-yellow-500 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-yellow-500 px-6 pb-4">
          <div className="flex flex-col space-y-4 mt-2">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-yellow-300 hover:text-yellow-500 transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}