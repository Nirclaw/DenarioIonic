import dotenv from "dotenv"
dotenv.config()

export const CONFIG = JSON.parse(process.env.CONFIG)
export const SERVER = JSON.parse(process.env.SERVER)
export const KEY = process.env.KEY