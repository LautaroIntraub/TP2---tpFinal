import { Router } from "express";
import LibroController from "../controllers/libroController.js";
import {validatePost, validatePut, validateDelete} from "../validations/libroValidator.js";

const libroController = new LibroController();
const libroRouter = Router();

libroRouter.get("/libros", libroController.getAllLibroController);
libroRouter.get("/:id", libroController.getLibroByIdController);
libroRouter.post("/", validatePost, libroController.createLibroController);
libroRouter.put("/:id", validatePut, libroController.updateLibroController);
libroRouter.delete("/:id", validateDelete, libroController.deleteLibroController);

export default libroRouter;
