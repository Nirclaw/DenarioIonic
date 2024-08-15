import { Router } from "express";
import { Tareas } from "../Tareas.js";

export const AppTareas = Router()


AppTareas.get("/", Tareas.GetTareasAll)

AppTareas.post("/new", Tareas.CrearTarea)
AppTareas.put("/update", Tareas.ActualizarTarea)
AppTareas.delete("/delete", Tareas.EliminarTarea)