import express from "express";
import cors from "cors";
import { SERVER } from "./config/config.js";
import { AppTareas } from "./router/login/Tareas/TareasClas/ClassTareas.js";
import { AppCrearToken } from "./router/login/Login/login.js";
import { TOKEN } from "./helpers/token.js";
const Appexpresss = express()
Appexpresss.use(cors());
Appexpresss.use(express.json())



Appexpresss.use("/tareas", TOKEN.AuthenticateToken, AppTareas)
Appexpresss.use("/login", AppCrearToken)

Appexpresss.listen((SERVER), () => {
    console.log(`http://${SERVER.hostname}:${SERVER.port}`);
})