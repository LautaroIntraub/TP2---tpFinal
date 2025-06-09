import UserService from "../services/UserService.js";

class UserController {
  userService = new UserService();

  getAllUserController = async (req, res) => {
    try {
      const users = await this.userService.getAllUserService();
      res.status(200).send({
        success: true,
        message: users,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getUserByIdController = async (req, res) => {
    try {
      const user = await this.userService.getUserServiceById(req.params.id);
      if (user === null) {
        return res.status(404).send({
          success: false,
          message: "Usuario no encontrado",
        });
      }
      res.status(200).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createUserController = async (req, res) => {
    try {
      const { name, mail, pass } = req.body;
      const user = await this.userService.createUserService({
        name,
        mail,
        pass,
      });
      res.status(201).send({
        success: true,
        message: user,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default UserController;
