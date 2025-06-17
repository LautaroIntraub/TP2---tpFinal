import LibroService from "../services/libroService.js";

class LibroController {
  libroService = new LibroService();

  getAllLibroController = async (req, res) => {
    try {
      const libros = await this.libroService.getAllLibrosService();
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
      const libro = await this.libroService.getLibroServiceById(req.params.id);
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
      const libro = await this.libroService.createLibroService({
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

  updateLibroController = async (req, res) => {
    try {
      const { titulo, autor, editorial, anio } = req.body;
      const libro = await this.libroService.updateLibroService(req.params.id, {
        titulo,
        autor,
        editorial,
        anio,
      });
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
      const libro = await this.libroService.deleteLibroService(req.params.id);

      if (libro === 0) {
        return res.status(404).json({
          success: false,
          message: "No existe un libro con ese ID",
        });
      }

      res.status(200).json({
        success: true,
        message: "Libro eliminado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
}
export default LibroController;
