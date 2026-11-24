'use client'
import { navbarLinks } from '@/public/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import HamMenu from './HamMenu'

const Navbar = () => {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href.startsWith('http')) return false;
    if (href === '/resume') return pathname === '/resume';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-900/80 border-b border-white/5 transition-all">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 md:px-8 h-16 md:h-20">
        <Link
          href="/"
          className="hover:opacity-85 flex items-center font-bold text-2xl tracking-wide text-white group"
        >
          Uzair <span className="text-neon-green ml-0.5 group-hover:scale-125 transition-transform inline-block">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navbarLinks.map((link, index) => {
            const active = isLinkActive(link.href);
            const isHireMe = link.name === 'Hire Me';

            if (isHireMe) {
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-3 px-4 py-2 rounded-full bg-neon-green text-zinc-950 text-xs font-bold hover:bg-neon-green/90 transition-all duration-300 shadow-md shadow-neon-green/20"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <Link
                key={index}
                href={link.href}
                className={`text-xs lg:text-sm font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  active
                    ? 'text-neon-green bg-zinc-800/80 border border-neon-green/30'
                    : 'text-gray-300 hover:text-neon-green hover:bg-zinc-800/40'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <HamMenu />
      </div>
    </header>
  );
};

export default Navbar;
