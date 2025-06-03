import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    lastName: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    subject: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    message: { 
        type: String, 
        required: true 
    },
    unread: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.models.Message || mongoose.model("Message", messageSchema);