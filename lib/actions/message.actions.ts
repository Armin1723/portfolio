'use server'

import { connectToDB } from "../db/db";
import Message from "../models/message.model";

interface messageType{
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export const sendMessage = async (message: messageType) => {
    try {
        await connectToDB();
        await Message.create(message);
        return true;
    } catch (error: any) {
        console.log("Error in sendMessage:", error.message );
        return false;
    }
}