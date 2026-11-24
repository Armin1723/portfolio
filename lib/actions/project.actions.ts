'use server'

import { connectToDB } from "../db/db";
import Project from "../models/project.model";
import { defaultProjects } from "../constants/projects";

export const seedResumeProjects = async () => {
    try {
        await connectToDB();
        for (const p of defaultProjects) {
            await Project.findOneAndUpdate(
                { title: p.title },
                { $set: p },
                { upsert: true, new: true }
            );
        }
        return true;
    } catch (error: any) {
        console.log('Error syncing resume projects:', error.message);
        return false;
    }
};

export const fetchProjects = async (page: number = 1, pageSize: number = 4) => {
    try {
        await connectToDB();
        const totalInDb = await Project.countDocuments();
        if (totalInDb > 0) {
            const projects = await Project.find()
                .sort({ start_date: -1 })
                .skip((page - 1) * pageSize)
                .limit(pageSize)
                .lean();
            const hasMore = totalInDb > page * pageSize;
            return {
                hasMore,
                projects: JSON.parse(JSON.stringify(projects))
            };
        }
    } catch (error: any) {
        console.log('DB error in fetchProjects, falling back to default projects:', error.message);
    }

    // Fallback if DB query returned 0 or errored
    const startIndex = (page - 1) * pageSize;
    const paginated = defaultProjects.slice(startIndex, startIndex + pageSize);
    const hasMore = defaultProjects.length > page * pageSize;
    return {
        hasMore,
        projects: JSON.parse(JSON.stringify(paginated))
    };
};
