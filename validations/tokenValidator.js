import { verifyToken } from "../utils/token.js";

const validateToken = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(400).json({ mensaje: "Token inexistente" });
  }

  try {
    const userData = verifyToken(token);
    req.user = userData;
    next();
  } catch (error) {
    console.error("ERROR AL VERIFICAR TOKEN:", error.message);
    return res.status(401).json({ mensaje: "Token inválido" });
  }
};

export default validateToken;
