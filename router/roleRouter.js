import { Router } from "express";
import RoleController from "../controllers/roleController.js";
import {
  validatePost,
  validatePut,
  validateDelete,
} from "../validations/roleValidator.js";

const roleController = new RoleController();
const roleRouter = Router();

roleRouter.get("/", roleController.getAllRolesController);
roleRouter.get("/:id", roleController.getRoleByIdController);
roleRouter.post("/", validatePost, roleController.createRoleController);
roleRouter.put("/:id", validatePut, roleController.updateRoleController);
roleRouter.delete("/:id", validateDelete, roleController.deleteRoleController);

export default roleRouter;
