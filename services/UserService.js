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
    const user = await User.findByPk(id);
    if (!user) throw new Error("Usuario no encontrado");
    if (data.name !== undefined) {
      user.name = data.name;
    }
    if (data.mail !== undefined) {
      user.mail = data.mail.toLowerCase();
    }
    if (data.pass !== undefined) {
      if (data.pass.length < 8 || data.pass.length > 20) {
        throw new Error("La contraseña debe tener entre 8 y 20 caracteres");
      }
      user.pass = data.pass;
    }
    if (data.RoleId !== undefined) {
      user.RoleId = data.RoleId;
    }
    await user.save();
    const { pass, ...userSafe } = user.toJSON();
    return userSafe;
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
        mail: mail.toLowerCase(),
      },
    });

    if (!user) throw new Error("Usuario no encontrado");

    const comparePass = await User.compare(pass, user.pass);
    if (!comparePass) throw new Error("Contraseña incorrecta");

    const payload = {
      id: user.id,
      mail: user.mail,
      role: user.RoleId,
    };

    const token = gentoken(payload);

    return token;
  };

  me = async (req, res) => {
    try {
      return res.status(200).json(req.user);
    } catch (error) {
      return res.status(500).json({ mensaje: "Error al obtener usuario" });
    }
  };
}

export default UserService;
