import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}

Role.init(
  {
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [3, 30],
        is: /^[A-Za-zÀ-ÿ\s]+$/i,
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Roles",
  }
);

export default Role;
