import jwt from "jsonwebtoken";
import { SECRET } from "../Config/config.js";

export const gentoken = (data) => {
  const token = jwt.sign({ data }, SECRET, { expiresIn: "1h" });
  return token;
};

export const verifyToken = (token) => {
  //chequear esto
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded.data;
  } catch (error) {
    throw new Error("Token inválido o expirado");
  }
};
