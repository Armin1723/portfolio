import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { navbarLinks } from "@/public/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HamMenu = () => {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href.startsWith('http')) return false;
    if (href === '/resume') return pathname === '/resume';
    return pathname.startsWith(href);
  };

  return (
    <div className="md:hidden flex items-center">
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Open navigation menu"
            className="p-2 rounded-lg bg-zinc-800/80 border border-white/10 text-white hover:text-neon-green hover:border-neon-green/40 transition-colors"
          >
            <svg
              className="w-6 h-6 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-zinc-950/95 border-l border-white/10 backdrop-blur-xl p-6">
          <SheetHeader className="flex flex-col items-start gap-8">
            <SheetTitle className="text-2xl font-bold text-white tracking-wide">
              <SheetClose asChild>
                <Link href="/" className="hover:opacity-80 transition-opacity">
                  Uzair <span className="text-neon-green">.</span>
                </Link>
              </SheetClose>
            </SheetTitle>

            <nav className="flex flex-col gap-3 w-full">
              {navbarLinks.map((link, index) => {
                const active = isLinkActive(link.href);
                const isHireMe = link.name === "Hire Me";

                if (isHireMe) {
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 px-4 py-3 rounded-xl bg-neon-green text-zinc-950 font-bold text-center text-sm shadow-md shadow-neon-green/20 hover:bg-neon-green/90 transition-all"
                    >
                      {link.name}
                    </a>
                  );
                }

                return (
                  <SheetClose key={index} asChild>
                    <Link
                      href={link.href}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                        active
                          ? "bg-zinc-800 text-neon-green border border-neon-green/40"
                          : "text-gray-300 hover:text-neon-green hover:bg-zinc-900"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamMenu;
