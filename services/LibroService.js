import Libro from "../models/Libro.js";

class LibrosService {
  getAllLibrosService = async () => {
    const libros = await Libro.findAll({
      attributes: ["id", "titulo", "autor", "editorial", "anio", "genero"],
      raw: true,
    });
    return libros;
  };

  getLibroServiceById = async (id) => {
    let libro = await Libro.findByPk(id, {
      attributes: ["id", "titulo", "autor", "editorial", "anio", "genero"],
      raw: true,
    });
    return libro;
  };

  createLibroService = async (data) => {
    const libroExistente = await Libro.findOne({
      where: { titulo: data.titulo },
    });
    if (libroExistente) {
      throw new Error("Ya existe un libro con ese título.");
    }
    const libro = await Libro.create(data);
    return libro;
  };

  updateLibroService = async (id, data) => {
    const libro = await Libro.update(data, {
      where: { id },
    });
    return libro;
  };

  deleteLibroService = async (id) => {
    const libro = await Libro.destroy({
      where: { id },
    });
    return libro;
  };
}

export default LibrosService;
