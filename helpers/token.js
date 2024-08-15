import { SignJWT, jwtVerify } from "jose";
import { KEY } from "../config/config.js";
import { sql } from "../conect/database.js";

export class TOKEN {

    async CreateToken(req, res) {
        const { email, contraseña } = req.body;



        try {
            const result = await sql.query(`SELECT * FROM Usuarios WHERE email = '${email}' AND contraseña = '${contraseña}'`);
            const data = result.recordset;

            if (data.length > 0) {
                const encoder = new TextEncoder();
                const info = data[0];

                const jwCreateToken = await new SignJWT(info)
                    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
                    .setExpirationTime("3H")
                    .setIssuedAt()
                    .sign(encoder.encode(KEY));

                return res.status(200).send({ status: 200, message: jwCreateToken });
            } else {
                return res.status(401).send({ status: 401, message: "El usuario no existe" });
            }
        } catch (error) {
            return res.status(500).send({ status: 500, message: "Error interno del servidor" });
        }
    }

    static async AuthenticateToken(req, res, next) {
        try {
            if (!req.headers?.authorization) {
                return res.status(400).send({ status: 400, message: "Debes iniciar sesión" });
            }

            const encoder = new TextEncoder();
            const data = await jwtVerify(req.headers.authorization, encoder.encode(KEY));
            req.data = data;

            next();
        } catch (error) {
            return res.status(400).send({ status: 400, message: "Credenciales incorrectas" });
        }
    }
}
