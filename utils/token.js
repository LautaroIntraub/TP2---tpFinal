import jwt from "jsonwebtoken";
import { SECRET } from "../Config/config.js";

export const gentoken = (data) => {
  return jwt.sign({ data }, SECRET, { expiresIn: "1d" });
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded.data;
  } catch (error) {
    throw new Error("Token inválido o expirado");
  }
};
