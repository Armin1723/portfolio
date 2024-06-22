import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { navbarLinks } from "@/public/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HamMenu = () => {
  const pathname = usePathname();
  return (
    <div className="ham hidden max-sm:flex flex-col ">
      <Sheet>
        <SheetTrigger>
          <div className="ham hidden max-sm:flex flex-col items-end items-right opacity-80">
            <p className="translate-y-4 scale-x-[5]">-</p>
            <p className="scale-x-[3] translate-x-1">-</p>
            <p className="-translate-y-4 translate-x-[0.15rem] scale-x-[4]">
              -
            </p>
          </div>
        </SheetTrigger>
        <SheetContent className="font-[jet_brains_mono] bg-zinc-900/40 border-none backdrop-blur-md">
          <SheetHeader className="flex flex-col h-screen justify-start gap-20 mx-8">
            <SheetTitle className="text-white font-3xl">
              <SheetClose asChild>
                <Link href="/" className="">
                  Uzair <span className="text-neon-green">.</span>
                </Link>
              </SheetClose>
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-8">
              {navbarLinks.map((link, index) => {
                const isActive = pathname.includes(link.href)
                  ? "text-neon-green border-b-2 border-neon-green"
                  : "";
                const specialButton =
                  link.name === "Hire Me"
                    ? "bg-neon-green text-zinc-900 rounded-2xl hover:text-zinc-600 hover:border-b-0 font-semibold mt-12"
                    : "";
                return (
                  <SheetClose key={index} asChild>
                    <Link
                      key={index}
                      href={link.href}
                      className={`text-xs md:mx-3 ${isActive} p-2 ${
                        !specialButton && "hover:text-neon-green"
                      } ${specialButton} transition-all`}
                    >
                      {link.name}
                    </Link>
                  </SheetClose>
                );
              })}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HamMenu;
