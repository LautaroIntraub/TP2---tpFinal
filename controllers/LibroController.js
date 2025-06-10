import LibroService from "../services/libroService.js";

class LibroController {
  userService = new LibroService();

  getAllLibroController = async (req, res) => {
    try {
      const libros = await this.userService.getAllLibroService();
      res.status(200).send({
        success: true,
        message: libros,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getLibroByIdController = async (req, res) => {
    try {
      const libro = await this.userService.getLibroServiceById(req.params.id);
      if (libro === null) {
        return res.status(404).send({
          success: false,
          message: "Libro no encontrado",
        });
      }
      res.status(200).send({
        success: true,
        message: libro,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
  

  createLibroController = async (req, res) => {
    try {
      const { titulo, autor, editorial, anio } = req.body;
      const libro = await this.userService.createLibroService({
        titulo,
        autor,
        editorial,
        anio,
      });
      res.status(201).send({
        success: true,
        message: libro,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}


updateLibroController = async (req, res) => {
  try {
    const { titulo, autor, editorial, anio } = req.body;
    const libro = await this.userService.updateLibroService(
      req.params.id,
      { titulo, autor, editorial, anio }
    );
    if (libro === null) {
      return res.status(404).send({
        success: false,
        message: "Libro no encontrado",
      });
    }
    res.status(200).send({
      success: true,
      message: libro,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};


deleteLibroController = async (req, res) => {
  try {
    const libro = await this.userService.deleteLibroService(req.params.id);
    if (libro === null) {
      return res.status(404).send({
        success: false,
        message: "Libro no encontrado",
      });
    }
    res.status(200).send({
      success: true,
      message: "Libro eliminado correctamente",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: error.message,
    });
  }
}

export default LibroController;
