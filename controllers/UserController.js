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

  updateUserController = async (req, res) => {
    try {
      const { name, mail, pass } = req.body;
      const user = await this.userService.updateUserService(req.params.id, {
        name,
        mail,
        pass,
      });
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

  deleteUserController = async (req, res) => {
    try {
      const result = await this.userService.deleteUserService(req.params.id);

      if (result === 0) {
        return res.status(404).json({
          success: false,
          message: "Usuario no encontrado",
        });
      }

      res.status(200).json({
        success: true,
        message: "Usuario eliminado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  login = async (req, res) => {
    try {
      const { mail, pass } = req.body;
      const user = await this.userService.login({ mail, pass });

      res.cookie("token", user);
      res.status(200).send({
        success: true,
        message: "Usuario logueado",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  me = async (req, res) => {
    res.status(200).json({
      mensaje: "Usuario autenticado",
      user: req.user,
    });
  };
}

export default UserController;
