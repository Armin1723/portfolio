"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { contactFormSchema } from "@/lib/validations/contactFormValidation";
import { Textarea } from "../ui/textarea";
import { sendMessage } from "@/lib/actions/message.actions";
import { useToast } from "../ui/use-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const handleMessageSent = async (values: z.infer<typeof contactFormSchema>) => {
    try {
      setIsSubmitting(true);
      const formattedValues = { ...values };
      const result = await sendMessage(formattedValues);
      if (result) {
        toast({
          variant: "default",
          title: "Message Sent Successfully",
          description: "Thank you for reaching out! I will get back to you as soon as possible.",
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: "Message Failed",
          description: "Something went wrong. Please email me directly at alam.airuz23@gmail.com.",
        });
      }
    } catch (err: any) {
      toast({
        variant: 'destructive',
        title: "Submission Error",
        description: err.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full md:w-3/5 p-6 md:p-8 rounded-2xl bg-zinc-800/80 border border-white/10 shadow-xl">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl md:text-3xl font-extrabold text-neon-green">Let's Connect</h2>
        <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed">
          Whether you are looking to hire a full-stack engineer, need enterprise CRM architecture, or want to build high-performance web solutions, feel free to reach out.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleMessageSent)}
          className="flex flex-wrap items-center justify-between gap-4 mt-2"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full sm:w-[48%]">
                <FormControl>
                  <Input
                    placeholder="First Name *"
                    className="border border-white/10 focus:border-neon-green bg-zinc-900 text-white placeholder:text-gray-500 text-sm rounded-xl py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full sm:w-[48%]">
                <FormControl>
                  <Input
                    placeholder="Last Name"
                    className="border border-white/10 focus:border-neon-green bg-zinc-900 text-white placeholder:text-gray-500 text-sm rounded-xl py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full sm:w-[48%]">
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    className="border border-white/10 focus:border-neon-green bg-zinc-900 text-white placeholder:text-gray-500 text-sm rounded-xl py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full sm:w-[48%]">
                <FormControl>
                  <Input
                    placeholder="Phone / WhatsApp"
                    className="border border-white/10 focus:border-neon-green bg-zinc-900 text-white placeholder:text-gray-500 text-sm rounded-xl py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Subject *"
                    className="border border-white/10 focus:border-neon-green bg-zinc-900 text-white placeholder:text-gray-500 text-sm rounded-xl py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Your message... *"
                    className="border border-white/10 focus:border-neon-green bg-zinc-900 text-white placeholder:text-gray-500 text-sm rounded-xl resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-red-400" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-2.5 rounded-xl bg-neon-green text-zinc-950 font-bold hover:bg-neon-green/90 transition-all duration-300 shadow-lg shadow-neon-green/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <i className="ri-loader-4-line animate-spin text-base"></i>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
                <i className="ri-send-plane-fill text-base"></i>
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
