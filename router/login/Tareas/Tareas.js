
import { sql } from "../../../conect/database.js"

export class Tareas {


    static async GetTareasAll(req, res) {
        try {
            let query = `SELECT t.*,e.id as idtados, e.descripcion as desatado FROM Tareas as t  INNER JOIN estados as e on t.estado = e.id WHERE t.usuario_id = ${req.data.payload.id} order by t.id desc`;
            await sql.query(query).then((data) => {
                res.send({ status: 200, message: data.recordset });
            });
        } catch (error) {
            res.status(500).send({ status: 500, message: "An error occurred", error: error.message });
        }
    }
    static async CrearTarea(req, res) {
        const { titulo, descripcion, fecha_vencimiento } = req.body
        const estado = 1
        const fecha_inicio = new Date();

        const fechaSolo = fecha_inicio.toLocaleDateString('en-CA');


        await sql.query(`INSERT INTO Tareas (usuario_id, titulo, descripcion, estado, fecha_inicio,fecha_vencimiento)
                    VALUES (${req.data.payload.id}, '${titulo}', '${descripcion}', ${estado},'${fechaSolo}', '${fecha_vencimiento}')`).then((data) => {
            res.send({ status: 200, message: "creado exitosamente", data })
        }).catch((error) => {
            return res.send({ status: 200, message: error })
        })

    }
    static async ActualizarTarea(req, res) {
        const { id, titulo, descripcion, estado, fecha_vencimiento } = req.body
        const fecha = new Date(fecha_vencimiento);
        const fechaSolo = fecha.toLocaleDateString('en-CA');

        await sql.query(`UPDATE Tareas SET titulo ='${titulo}' , descripcion ='${descripcion}', estado = ${estado}, fecha_vencimiento ='${fechaSolo}' WHERE id = ${id}`)
            .then((data) => {
                res.send({ status: 200, message: "Actualizado exitosamente" })
            }).catch((error) => {
                return res.send({ status: 200, message: error })
            })

    }

    static async EliminarTarea(req, res) {
        const { id } = req.body

        await sql.query(`DELETE Tareas Where id = ${id}`).then((data) => {
            res.send({ status: 200, message: "Eliminado correctamente" })
        }).catch((error) => {
            return res.send({ status: 200, message: error })
        })
    }





}