import { Router } from "express";
import UserController from "../controllers/userController.js";
import validatePost from "../validations/userValidator.js";

const userController = new UserController();
const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.post("/", validatePost, userController.createUserController);

userRouter.get("/me", userController.me);
userRouter.get("/", userController.getAllUserController);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.put("/:id", userController.updateUserController);
userRouter.delete("/:id", userController.deleteUserController);

export default userRouter;
