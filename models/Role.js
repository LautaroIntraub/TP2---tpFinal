import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Role extends Model {}

Role.init(
  {
    roleName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    sequelize: connection,
    modelName: "Roles",
  }
);

export default Role;
