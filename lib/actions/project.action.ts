'use server'

import { connectToDB } from "../db/db"
import Project from "../models/project.model"

export const createProject = async () => {
    await connectToDB()
    const title = 'Weatherizy'
    const project1 = await Project.findOne({ title: title })
    if(project1) return console.log("Project already exists")
    const project = await Project.create({
        title: title,
        description: "A React based Weather web app that uses OpenWeatherMap API to fetch weather data combined with dynamic styling and use of geolocation API.",
        code_link: "https://github.com/Armin1723/weather-to-go.git",
        live_link: "https://weatherizy.netlify.app",
        techs: ["ReactJS", "NodeJS", "OpenWeatherAPI", "MongoDB", "Express", "TailwindCSS","Geolocation API"],
        start_date: new Date("2023-02-10"),
        end_date: new Date("2023-03-01")
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