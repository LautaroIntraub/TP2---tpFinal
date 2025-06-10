const validatePost = (req, res, next) => {
    const { name, mail, pass } = req.body;
    if (!name || !mail || !pass || name.trim() === "" || mail.trim() === "" || pass.trim() === "") {
      return res.status(400).json({ mensaje: "El nombre, mail y contraseña son obligatorios" });
    }
    next();
  };

  
export default validatePost;