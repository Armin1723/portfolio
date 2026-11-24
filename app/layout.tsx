import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "@/Components/shared/Navbar";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/Components/ui/toaster";
import Script from "next/script";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uzairalam.vercel.app"),
  title: {
    default: "Uzair Alam | Full Stack Software Engineer",
    template: "%s | Uzair Alam",
  },
  description:
    "Versatile and performance-driven Full Stack Software Engineer specializing in MERN stack, Next.js, and Node.js ecosystems. Experienced in enterprise CRMs, fintech platforms, and scalable web architectures.",
  keywords: [
    "Uzair Alam",
    "Full Stack Software Engineer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React.js",
    "Node.js",
    "TypeScript",
    "Enterprise CRM",
    "Fintech Systems",
    "AI OCR Invoices",
    "Lucknow Developer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Uzair Alam", url: "https://uzairalam.vercel.app" }],
  creator: "Uzair Alam",
  icons: {
    icon: {
      url: "/assets/profile.png",
      sizes: "any",
      type: "image/png",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uzairalam.vercel.app",
    title: "Uzair Alam | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in MERN stack, Next.js, and Node.js ecosystems. Explore production projects, enterprise CRMs, technical skills, and architecture blogs.",
    siteName: "Uzair Alam Portfolio",
    images: [
      {
        url: "/assets/profile.png",
        width: 800,
        height: 800,
        alt: "Uzair Alam - Full Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uzair Alam | Full Stack Software Engineer",
    description:
      "Versatile Full Stack Software Engineer with deep expertise across MERN, Next.js, and Node.js ecosystems.",
    images: ["/assets/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://uzairalam.vercel.app/#person",
      name: "Uzair Alam",
      jobTitle: "Full Stack Software Engineer",
      url: "https://uzairalam.vercel.app",
      image: "https://uzairalam.vercel.app/assets/profile.png",
      email: "alam.airuz23@gmail.com",
      telephone: "+91-8858128030",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226022",
        addressCountry: "India",
      },
      worksFor: {
        "@type": "Organization",
        name: "Jamtech Technologies",
      },
      alumniOf: [
        {
          "@type": "Organization",
          name: "Khwaja Moinuddin Chishti Language University",
        },
        {
          "@type": "Organization",
          name: "University of Lucknow",
        },
      ],
      sameAs: [
        "https://linkedin.com/in/uzair1723",
        "https://github.com/Armin1723",
        "https://leetcode.com/uzair1723",
      ],
      knowsAbout: [
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "PostgreSQL",
        "Tailwind CSS",
        "Electron.js",
        "Microservices",
        "REST APIs",
        "Fintech Systems",
        "Enterprise CRMs",
        "AI OCR Document Processing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://uzairalam.vercel.app/#website",
      url: "https://uzairalam.vercel.app",
      name: "Uzair Alam Portfolio & Technical Blog",
      publisher: {
        "@id": "https://uzairalam.vercel.app/#person",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jetBrainsMono.className} flex flex-col items-center justify-between w-full min-h-screen bg-zinc-950 text-white selection:bg-[#78fdc8] selection:text-zinc-950 overflow-x-hidden`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MTX57QBKCB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MTX57QBKCB');
          `}
        </Script>
        <NextTopLoader color="#01fe98" height={2} showSpinner={false} />
        <Navbar />
        <main className="flex-grow w-full flex flex-col items-center justify-center">
          {children}
        </main>
        
        {/* Footer with exclusively placed Blogs link */}
        <footer className="w-full border-t border-white/5 bg-zinc-950/90 py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p>
                © {new Date().getFullYear()} <span className="text-white font-semibold">Uzair Alam</span>. Built with Next.js & Tailwind CSS.
              </p>
              <p className="text-[11px] text-gray-500 font-mono">
                Full Stack Software Engineer • Lucknow, India
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 font-mono">
              <Link href="/blogs" className="text-neon-green hover:underline font-semibold flex items-center gap-1">
                <i className="ri-article-line"></i>
                <span>Blogs</span>
              </Link>
              <Link href="/projects" className="hover:text-neon-green transition-colors">
                Projects
              </Link>
              <Link href="/resume/experience" className="hover:text-neon-green transition-colors">
                Experience
              </Link>
              <Link href="https://github.com/Armin1723" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                GitHub
              </Link>
              <Link href="https://linkedin.com/in/uzair1723" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                LinkedIn
              </Link>
              <Link href="https://leetcode.com/uzair1723" target="_blank" rel="noopener noreferrer" className="hover:text-neon-green transition-colors">
                LeetCode
              </Link>
              <a href="/assets/Resume.pdf" target="_blank" className="text-gray-300 hover:text-neon-green transition-colors">
                Resume PDF ↓
              </a>
            </div>
          </div>
        </footer>

        <Toaster />
      </body>
    </html>
  );
}
