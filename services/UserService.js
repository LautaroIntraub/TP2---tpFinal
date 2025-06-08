import { User, Role } from "../models/index.js";

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
  getlUserServiceById = () => {
    return "Get all users Services";
  };

  createUserService = async (data) => {
    const user = await User.create(data);
    return user.name;
  };
}

export default UserService;
