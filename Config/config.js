import { env } from "process";
const SERVER_PORT = env.SERVER_PORT || 3000;
const SECRET = env.SECRET;

export { SERVER_PORT, SECRET };
