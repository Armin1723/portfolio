"use client";
import React from "react";
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

  const { toast } = useToast()

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
    const formattedValues = { ...values }
    const result = await sendMessage(formattedValues);
    if (result) {
      toast({
        variant: "default",
        title: "Message Sent",
        description: "We will get back to you soon.",
        
      })
      form.reset()
    } else {
      toast({
        variant: 'destructive',
        title: "Message Failed",
        description: "Please try again later.",
      })
    }
  };
  return (
    <div className="flex flex-col gap-4 w-full md:w-3/5 p-5 rounded-lg bg-zinc-800">
      <p className="text-3xl text-neon-green">Contact Us</p>
      <p className="text-xs text-gray-400 leading-5 text-wrap">
        We would love to hear from you! Whether you have a question about our
        services, pricing, need a demo, or anything else, our team is ready to
        answer all your questions. Please provide your contact details and a
        brief message, and we will get back to you as soon as possible.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleMessageSent)}
          className="flex flex-wrap items-center justify-between gap-4"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full md:w-[48%]">
                <FormControl className="flex text-semibold text-neon-green text-xs font-extralight capitalize">
                  <Input
                    placeholder="First Name"
                    className="border border-gray-900 focus:border-neon-green focus:outline-neon-green focus:ring-neon-green focus:bg-[#01fe9810] bg-zinc-900 placeholder:text-gray-400 placeholder:text-xs no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-neon-green" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full md:w-[48%]">
                <FormControl className="flex text-semibold text-neon-green text-xs font-extralight capitalize">
                  <Input
                    placeholder="Last Name"
                    className="border border-gray-900 focus:border-neon-green focus:outline-neon-green focus:ring-neon-green focus:bg-[#01fe9810] bg-zinc-900 placeholder:text-gray-400 placeholder:text-xs no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-neon-green" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full md:w-[48%]">
                <FormControl className="flex text-semibold text-neon-green text-xs font-extralight">
                  <Input
                    placeholder="Email"
                    className="border border-gray-900 focus:border-neon-green focus:outline-neon-green focus:ring-neon-green focus:bg-[#01fe9810] bg-zinc-900 placeholder:text-gray-400 placeholder:text-xs no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-neon-green" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="w-full md:w-[48%]">
                <FormControl className="flex text-semibold text-neon-green text-xs font-extralight capitalize">
                  <Input
                    placeholder="Contact Number"
                    className="border border-gray-900 focus:border-neon-green focus:outline-neon-green focus:ring-neon-green focus:bg-[#01fe9810] bg-zinc-900 placeholder:text-gray-400 placeholder:text-xs no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-neon-green" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormControl className="flex text-semibold text-neon-green text-xs font-extralight capitalize">
                  <Input
                    placeholder="A short but descriptive subject"
                    className="border border-gray-900 focus:border-neon-green focus:outline-neon-green focus:ring-neon-green focus:bg-[#01fe9801] bg-zinc-900 placeholder:text-gray-400 placeholder:text-xs no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-neon-green" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormControl className="flex text-semibold text-neon-green text-xs font-extralight title">
                  <Textarea
                    placeholder="Enter your message."
                    autoComplete="on"
                    className="border border-gray-900 focus:border-neon-green focus:outline-neon-green focus:ring-neon-green focus:bg-[#01fe9802] bg-zinc-900 placeholder:text-gray-400 placeholder:text-xs no-focus"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-neon-green" />
              </FormItem>
            )}
          />

          <Button type="submit" className="max-lg:w-full w-1/3 border border-neon-green bg-neon-green/20 hover:before:z-[-1] hover:z-[10] text-black relative rounded-xl before:bg-neon-green hover:bg-neon-green/20 before:h-full before:w-0 hover:before:w-full before:absolute before:inset-0 before:rounded-xl before:transition-all before:duration-500 transition-all duration-500">Send Message</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
