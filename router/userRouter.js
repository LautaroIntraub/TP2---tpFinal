import { Router } from "express";
import UserController from "../controllers/userController.js";
import validatePost from "../validations/userValidator.js";

const userController = new UserController();
const userRouter = Router();

userRouter.get("/", userController.getAllUserController);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.post("/", validatePost, userController.createUserController);
userRouter.put("/:id", userController.updateUserController); //faltan agregarlos en el controller
userRouter.delete("/:id", userController.deleteUserController);//faltan agregarlos en el controller



// userRouter.put("/:id", (req, res) => {
//   res.status(200).send("update router");
// });
// userRouter.delete("/:id", (req, res) => {
//   res.status(200).send("delete router");
// });

export default userRouter;