import express from "express";
import userRouter from "./router/userRouter.js";
import libroRouter from "./router/libroRouter.js";
import roleRouter from "./router/roleRouter.js";
import connection from "./connection/connection.js";
import { SERVER_PORT } from "./Config/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/libros", libroRouter);
app.use("/roles", roleRouter);

await connection.sync({ force: false });

app.listen(SERVER_PORT, () => {
  console.log(`🚀 ~ app.listen ~ ${SERVER_PORT}`);
});
