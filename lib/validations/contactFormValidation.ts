"use client"
 
import { z } from "zod"
 
export const contactFormSchema = z.object({
  firstName: z.string().min(2,{message: "First Name must be at least 2 chars"}).max(50,{message: "First Name must be less than 50 chars"}),
  lastName: z.string().min(2,{message: "Last Name must be at least 2 chars"}).max(50,{message: "Last Name must be less than 50 chars"}),
  email: z.string().email({message: "Invalid email address"}),
  subject: z.string().min(2,{message: "Subject must be at least 2 chars"}).max(50,{message: "Subject must be less than 50 chars"}),
  message: z.string().min(1,{message: "Message must be at least 1 character"}).max(1000,{message: "Message must be less than 1000 chars"}),
  phone: z.string().min(10,{message: "Phone number must be 10 chars"}).max(10,{message: "Phone number must be 10 chars"}),
})
