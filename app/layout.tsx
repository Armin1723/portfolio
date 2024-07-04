import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "@/Components/shared/Navbar";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/Components/ui/toaster";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio of Uzair Alam",
  description: "Portfolio of Uzair Alam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.className} flex flex-col items-center justify-between w-screen min-h-screen bg-zinc-900 text-white selection:bg-[#78fdc8] selection:text-zinc-900`}
      >
        <NextTopLoader color="#01fe98" height={2} />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Toaster/>
      </body>
    </html>
  );
}
