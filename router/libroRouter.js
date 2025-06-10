import { Router } from "express";
import LibroController from "../controllers/libroController.js";
import validatePost from "../validations/libroValidator.js";

const libroController = new LibroController();
const libroRouter = Router();

libroRouter.get("/", libroController.getAllLibroController);
libroRouter.get("/:id", libroController.getLibroByIdController);
libroRouter.post("/", validatePost, libroController.createLibroController);
libroRouter.put("/:id", libroController.updateLibroController);
libroRouter.delete("/:id", libroController.deleteLibroController);



export default libroRouter;
