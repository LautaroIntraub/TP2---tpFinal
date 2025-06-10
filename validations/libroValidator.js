const validatePost = (req, res, next) => {
  const { titulo, autor, editorial, año, genero } = req.body;
  if (
    !titulo ||
    !autor ||
    !editorial ||
    titulo.trim() === "" ||
    autor.trim() === "" ||
    editorial.trim() === "" ||
    (genero && genero.trim() === "")
  ) {
    return res.status(400).json({
      mensaje:
        "El título, autor y editorial son obligatorios. El año debe ser un número entero entre 1450 y el año actual",
    });
  }
  next();
};
