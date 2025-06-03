'use client'
import Stairs from "@/Components/shared/Stairs";
import Link from "next/link";
import { resumeNavLinks } from "@/public/utils";
import { usePathname } from "next/navigation";

interface prop {
  children: React.ReactNode;
}

export default function ResumeLayout({
  children
}: prop) {
  return (
    <div className="w-[100vw] lg:w-[70vw] container ">
      <Stairs />
      <div className="resumeContainer h-[90vh] w-full md:w-[70vw] md:py-8 flex flex-col items-center justify-evenly md:gap-4">
        <div className="links w-full flex items-center gap-4">
          {resumeNavLinks.map((link, index) => {
            const pathname = usePathname();
            const isActive = pathname === (link.href)
              ? "text-neon-green border-b border-neon-green"
              : "";
            return (
              <Link
                className={`text-lg font-semibold  hover:text-neon-green flex items-center justify-center w-full md:w-4/5 py-1 transition-all duration-300 ${isActive}`}
                href={link.href}
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="content w-full md:w-3/5 h-[80vh] max-lg:overflow-y-scroll custom-scrollbar ">{children}</div>
      </div>
    </div>
  );
}
