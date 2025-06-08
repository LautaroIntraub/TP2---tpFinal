import { Router } from "express";
import UserController from "../controllers/userController.js";

const userController = new UserController();

const userRouter = Router();


userRouter.get("/", userController.getAllUserController);
userRouter.get("/:id", userController.getUserByIdController);
userRouter.post("/", userController.createUserController);
// userRouter.put("/:id", (req, res) => {
//   res.status(200).send("update router");
// });
// userRouter.delete("/:id", (req, res) => {
//   res.status(200).send("delete router");
// });

export default userRouter;
