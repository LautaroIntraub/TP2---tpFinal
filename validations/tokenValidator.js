import { verifyToken } from "../utils/token.js";

const validateToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({ mensaje: "Token inexistente" });
  }
  try {
    if (!verifyToken(token.token)) {
      return res.status(400).json({ mensaje: "Token invalido" });
    }
  } catch (error) {
    console.log("aasd");
  }
  next();
};

export default validateToken;
