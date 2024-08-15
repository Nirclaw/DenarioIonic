import mssql from "mssql";
import { CONFIG } from "../config/config.js";



const sqlConfig = {
    user: CONFIG.user,
    password: CONFIG.password,
    database: CONFIG.database,
    server: CONFIG.server,
    connectionTimeout: 10000,
    requestTimeout: 10000,
    port: 1433,
    options: {
        encrypt: false,
        trustServerCertificate: false,
    },
};

export const sql = await mssql.connect(sqlConfig)
