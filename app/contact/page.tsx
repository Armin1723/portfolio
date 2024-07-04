import Stairs from "@/Components/shared/Stairs";
import ContactForm from "@/Components/forms/ContactForm";
import React from "react";
import { contactPageLinks } from "@/public/utils";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-[100vw] lg:w-[70vw] flex flex-col md:flex-row items-center h-[80vh] overflow-y-scroll custom-scrollbar max-lg:px-6 gap-4">
      <Stairs />
      <ContactForm />
      <div className="flex flex-col gap-4 max-lg:w-full items-start md:h-full justify-center ">
        {contactPageLinks.map((link) => (
          <Link href={link.href} target="_blank" key={link.name} className="flex items-start gap-4">
            <i
              className={`${link.icon} text-3xl text-neon-green bg-zinc-800 p-4 rounded-md border-neon-green hover:border`}
            />
            <div className="flex flex-col gap-2 justify-center h-full cursor-pointer">
              <p className="text-gray-500 text-xs">{link.name}</p>
              <p className="text-gray-300 text-sm">{link.value}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
