import RoleService from "../services/RoleService.js";

class RoleController {
  roleService = new RoleService();

  getAllRolesController = async (req, res) => {
    try {
      const roles = await this.roleService.getAllRolesService();
      res.status(200).send({
        success: true,
        message: roles,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  getRoleByIdController = async (req, res) => {
    try {
      const role = await this.roleService.getRoleServiceById(req.params.id);
      if (role === null) {
        return res.status(404).send({
          success: false,
          message: "Rol no encontrado",
        });
      }
      res.status(200).send({
        success: true,
        message: role,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  createRoleController = async (req, res) => {
    try {
      const { roleName } = req.body;
      const role = await this.roleService.createRoleService({ roleName });
      res.status(201).send({
        success: true,
        message: role,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  updateRoleController = async (req, res) => {
    try {
      const { roleName } = req.body;
      const role = await this.roleService.updateRoleService(req.params.id, {
        roleName,
      });
      if (role === null) {
        return res.status(404).send({
          success: false,
          message: "Rol no encontrado",
        });
      }
      res.status(200).send({
        success: true,
        message: role,
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };

  deleteRoleController = async (req, res) => {
    try {
      const deletedCount = await this.roleService.deleteRoleService(
        req.params.id
      );

      if (deletedCount === 0) {
        return res.status(404).send({
          success: false,
          message: "Rol no encontrado o ya fue eliminado.",
        });
      }

      res.status(200).send({
        success: true,
        message: "Rol eliminado correctamente",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message,
      });
    }
  };
}

export default RoleController;
