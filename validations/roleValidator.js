const validatePost = (req, res, next) => {
  const { roleName } = req.body;

  if (!roleName || roleName.trim() === "") {
    return res.status(400).json({
      mensaje: "El nombre del rol es obligatorio y no puede estar vacío.",
    });
  }

  next();
};

const validatePut = (req, res, next) => {
  const { roleName } = req.body;

  if (!roleName || roleName.trim() === "") {
    return res.status(400).json({
      mensaje: "El nombre del rol es obligatorio y no puede estar vacío.",
    });
  }

  next();
};

const validateDelete = (req, res, next) => {
  const { id } = req.params;

  if (!id || isNaN(id)) {
    return res.status(400).json({
      mensaje: "El ID del rol es obligatorio y debe ser un número válido.",
    });
  }

  next();
};

export { validatePost, validatePut, validateDelete };
