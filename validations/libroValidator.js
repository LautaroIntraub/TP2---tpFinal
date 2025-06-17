const validatePost = (req, res, next) => {
  const { titulo, autor, editorial, anio, genero } = req.body;
  const anioActual = new Date().getFullYear();

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
      mensaje: `El título, autor y editorial son obligatorios. El año debe ser un número entero entre 1450 y el ${anioActual}`,
    });
  }

  if (
    !anio ||
    isNaN(anio) ||
    parseInt(anio) < 1450 ||
    parseInt(anio) > anioActual
  ) {
    return res.status(400).json({
      mensaje: `El año debe ser un número entero entre 1450 y el ${anioActual}.`,
    });
  }

  next();
};

const validatePut = (req, res, next) => {
  const { id } = req.params;
  const { titulo, autor, editorial, anio, genero } = req.body;

  if (!id || isNaN(id) || id < 0) {
    return res.status(400).json({
      mensaje:
        "El ID del libro es obligatorio y debe ser un número entero mayor o igual a 0 válido.",
    });
  }

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
        "No se puede actualizar el libro ya que alguno de los campos obligatorios está vacío o no es válido. El año debe ser un número entero entre 1450 y el año actual.",
    });
  }

  if (anio && (isNaN(anio) || anio < 1450 || anio > new Date().getFullYear())) {
    return res.status(400).json({
      mensaje: "El año debe ser un número entero entre 1450 y el año actual.",
    });
  }
  next();
};

const validateDelete = (req, res, next) => {
  const { id } = req.params;
  const idNum = Number(id);

  if (!id || isNaN(idNum) || !Number.isInteger(idNum) || idNum <= 0) {
    return res.status(400).json({
      mensaje:
        "El ID del libro es obligatorio y debe ser un número entero positivo",
    });
  }

  next();
};
export { validatePost, validatePut, validateDelete };
