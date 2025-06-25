import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model {
  static compare = async (paintextPassword, hash) => {
    const comparePass = await bcrypt.compare(paintextPassword, hash);
    return comparePass;
  };
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2, 50],
      },
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [8, 20],
      },
    },
    RoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        isInt: true,
        min: 1,
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Users",
  }
);

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.pass, salt);
  user.pass = hash;
});

export default User;
