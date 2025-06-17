import Role from "../models/Role.js";

class RoleService {
  getAllRolesService = async () => {
    const roles = await Role.findAll({
      attributes: ["id", "roleName"],
      raw: true,
    });
    return roles;
  };

  getRoleServiceById = async (id) => {
    let role = await Role.findByPk(id, {
      attributes: ["id", "roleName"],
      raw: true,
    });
    return role;
  };

  createRoleService = async (data) => {
    const existe = await Role.findOne({ where: { roleName: data.roleName } });
    if (existe) {
      throw new Error("Ya existe un rol con ese nombre");
    }
    const role = await Role.create(data);
    return role.roleName;
  };

  updateRoleService = async (id, data) => {
    const role = await Role.findByPk(id);
    if (!role) return null;
    await role.update(data);
    return role;
  };

  deleteRoleService = async (id) => {
    const role = await Role.findByPk(id);
    if (!role) return null;

    await role.destroy();
    return role;
  };
}

export default RoleService;
