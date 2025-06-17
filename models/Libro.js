import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Libro extends Model {}

Libro.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [3, 130],
      },
    },
    autor: DataTypes.STRING,
    editorial: DataTypes.STRING,
    anio: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 1450,
        max: new Date().getFullYear(),
      },
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
  },
  {
    sequelize: connection,
    modelName: "Libros",
  }
);

export default Libro;
