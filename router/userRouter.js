import { Router } from "express";
import UserController from "../controllers/userController.js";
import validatePost from "../validations/userValidator.js";

const userController = new UserController();
const userRouter = Router();

userRouter.get("/", userController.getAllUserController);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.post("/", validatePost, userController.createUserController);
userRouter.put("/:id", userController.updateUserController);
userRouter.delete("/:id", userController.deleteUserController);


export default userRouter;
