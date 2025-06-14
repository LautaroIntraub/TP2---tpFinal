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

const validatePut = (req, res, next) => {
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
        "No se puede actualizar el libro ya que alguno de los campos obligatorios está vacío o no es válido. El año debe ser un número entero entre 1450 y el año actual",
    });
  }
  next();
};

const validateDelete = (req, res, next) => {
  const { id } = req.params;
  if (!id || isNaN(id)) {
    return res.status(400).json({
      mensaje: "El ID del libro es obligatorio y debe ser un número entero",
    });
  }
  next();
};
