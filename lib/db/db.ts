import mongoose from "mongoose"

let isConnected = false

export const connectToDB = async () => {
    try {
        mongoose.set('strictQuery', true)

        if (!process.env.MONGO_URI) return console.log("Missing Mongo DB URI")

        if (isConnected) return console.log('Already connected to DB')

        await mongoose.connect(process.env.MONGO_URI)
        isConnected = true
        console.log('Connected to DB')

    } catch (error: any) {
        console.log('Error connecting to DB', error.message)
    }
}
