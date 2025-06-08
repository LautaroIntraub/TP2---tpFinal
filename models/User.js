import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      mail: true,
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RoleId: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
  },
  {
    sequelize: connection,
    modelName: "User",
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  // console.log(`🚀 ~ User.beforeCreate ~ salt:`, salt);
  const hash = await bcrypt.hash(user.pass, salt);
  user.pass = hash;
});

export default User;
