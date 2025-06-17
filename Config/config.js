import { env } from "process";
const SERVER_PORT = env.SERVER_PORT || 3000;
const DB_NAME = env.DB_NAME || "martes";
const DB_USER = env.DB_USER || "root";
const DB_PASS = env.DB_PASS || "root";
const DB_HOST = env.DB_HOST || "localhost";
const DB_PORT = env.DB_PORT || 3306;
const DB_DIALECT = env.DB_DIALECT || "mysql";

export { SERVER_PORT, DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_DIALECT };
