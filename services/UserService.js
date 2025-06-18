import { User, Role } from "../models/index.js";
import { gentoken, verifyToken } from "../utils/token.js";

class UserService {
  getAllUserService = async () => {
    const users = await User.findAll({
      attributes: ["id", "name", "mail", "RoleId"],
      include: {
        model: Role,
        attributes: ["roleName"],
      },
    });
    return users;
  };
  getUserServiceById = async (id) => {
    let user = await User.findByPk(id, {
      attributes: ["id", "name", "mail", "RoleId"],
      raw: true,
    });
    return user;
  };

  createUserService = async (data) => {
    const user = await User.create(data);
    return user.name;
  };

  updateUserService = async (id, data) => {
    const user = await User.update(data, {
      where: { id },
    });
    return user;
  };

  deleteUserService = async (id) => {
    const user = await User.destroy({
      where: { id },
    });
    return user;
  };

  login = async (data) => {
    const { mail, pass } = data;
    const user = await User.findOne({
      where: {
        mail,
      },
    });
    if (!user) throw new Error("User no encontrado");
    const comparePass = await User.compare(pass, user.pass);
    if (!comparePass) throw new Error("User no encontrado");

    const payload = {
      id: user.id,
      mail: user.mail,
      role: user.RoleId,
    };

    const token = gentoken(payload);

    return {
      token,
    };
  };

  me = async (token) => {
    //to do
    let data = verifyToken(token)
    return data
  };
}

export default UserService;
