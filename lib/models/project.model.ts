import mongoose, { Schema, Document } from 'mongoose';

const projectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code_link: {
        type: String,
        required: true
    },
    live_link: {
        type: String,
        required: true
    },
    techs: [{
        type: String,
    }],
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
});

// Define the project interface
interface IProject extends Document {
    title: string;
    description: string;
    code_link: string;
    live_link: string;
    techs: string[];
    start_date: Date;
    end_date: Date;
}

const Project = mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);

export default Project;