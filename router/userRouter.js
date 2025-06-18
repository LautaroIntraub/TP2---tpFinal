import { Router } from "express";
import UserController from "../controllers/userController.js";
import validatePost from "../validations/userValidator.js";
import validateToken from "../validations/tokenValidator.js";

const userController = new UserController();
const userRouter = Router();

userRouter.post("/login", userController.login);
userRouter.post("/", validatePost, userController.createUserController);

userRouter.get("/me", userController.me);
userRouter.get("/",validateToken, userController.getAllUserController);
userRouter.get("/:id", validateToken, userController.getUserByIdController);
userRouter.put("/:id", validateToken, userController.updateUserController);
userRouter.delete("/:id", validateToken, userController.deleteUserController);

export default userRouter;
