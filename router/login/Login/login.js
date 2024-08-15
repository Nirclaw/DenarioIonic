import { Router } from "express";
import { TOKEN } from "../../../helpers/token.js";

export const AppCrearToken = Router()

const Token = new TOKEN()

AppCrearToken.post("/", (req, res) => {
    Token.CreateToken(req, res)
})