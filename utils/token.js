import jwt from "jsonwebtoken";
import { SECRET } from "../Config/config.js";

export const gentoken = (data) => {
  const token = jwt.sign({ data }, SECRET, { expiresIn: "20" });
  return token;
};

export const verifyToken = (token) => {
  //chequear esto
  try {
    console.log(token);
    
    const decoded = jwt.verify(token, SECRET);
    console.log(decoded);
    return decoded.data;
  } catch (error) {
    throw new Error("Token inválido o expirado");
  }
};
