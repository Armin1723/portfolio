'use server'

import { connectToDB } from "../db/db"
import Project from "../models/project.model"

export const createProject = async () => {
    await connectToDB()
    const title = 'Task-Venture'
    const project1 = await Project.findOne({ title: title })
    if(project1) return console.log("Project already exists")
    const project = await Project.create({
        title: title,
        description: "A React project that demonstrates the use of pdfme library for PDF manipulation in React",
        code_link: "https://github.com/Armin1723/task-venture.git",
        live_link: "https://task-venture.netlify.app/",
        techs: ["ReactJS", "NodeJS", "pdfme", "React Loaders", "TailwindCSS"],
        start_date: new Date("2024-03-24"),
        end_date: new Date("2024-03-26")
    })
}

export const fetchProjects = async (page: number) => {
    try {
        await connectToDB()
        const projects = await Project.find().limit(4).skip((page - 1) * 4)
        const totalProject = await Project.countDocuments()
        const hasMore = totalProject > page * 4
        return { hasMore, projects }
    } catch (error: any) {
        console.log('Error in fetchProjects', error.message)
    }
}