'use client'
import Stairs from "@/Components/shared/Stairs";
import Link from "next/link";
import { resumeNavLinks } from "@/public/utils";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: Props) {
  const pathname = usePathname();

  return (
    <div className="w-full max-w-5xl px-4 md:px-8 py-6 md:py-10 flex flex-col gap-6">
      <Stairs />
      
      {/* Resume Navigation Tabs */}
      <div className="w-full flex items-center justify-start sm:justify-center border-b border-white/10 pb-2 overflow-x-auto custom-scrollbar gap-2 md:gap-4">
        {resumeNavLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? "bg-neon-green text-zinc-950 shadow-md shadow-neon-green/20"
                  : "text-gray-300 hover:text-neon-green hover:bg-zinc-800/60"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* Main Tab Content */}
      <div className="w-full min-h-[60vh] flex flex-col">
        {children}
      </div>
    </div>
  );
}
