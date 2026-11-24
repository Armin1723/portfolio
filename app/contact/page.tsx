import Stairs from "@/Components/shared/Stairs";
import ContactForm from "@/Components/forms/ContactForm";
import React from "react";
import { contactPageLinks } from "@/public/utils";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Uzair Alam - Full Stack Software Engineer",
  description: "Get in touch with Uzair Alam for full-stack web and desktop engineering opportunities, freelance consulting, or technical collaborations.",
};

const ContactPage = () => {
  return (
    <section className="w-full max-w-5xl px-4 md:px-8 py-6 md:py-10 flex flex-col md:flex-row items-start justify-between gap-8 min-h-[80vh]">
      <Stairs />
      
      {/* Contact Form */}
      <ContactForm />

      {/* Direct Contact Info */}
      <div className="flex flex-col gap-4 w-full md:w-2/5 justify-center pt-2">
        <div className="flex flex-col gap-1 mb-2">
          <h2 className="text-xl md:text-2xl font-bold text-white">Direct Information</h2>
          <p className="text-xs text-gray-400">Reach out directly via phone, email, or social networks.</p>
        </div>

        <div className="flex flex-col gap-3">
          {contactPageLinks.map((link) => (
            <Link
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : undefined}
              rel="noopener noreferrer"
              key={link.name}
              className="flex items-center gap-4 p-3 rounded-xl bg-zinc-800/60 border border-white/5 hover:border-neon-green/40 hover:bg-zinc-800 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-neon-green text-xl group-hover:bg-neon-green group-hover:text-zinc-950 transition-colors flex-shrink-0">
                <i className={link.icon} />
              </div>
              <div className="flex flex-col overflow-hidden">
                <p className="text-gray-400 text-xs font-mono">{link.name}</p>
                <p className="text-gray-200 text-sm font-medium truncate group-hover:text-neon-green transition-colors">
                  {link.value}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
