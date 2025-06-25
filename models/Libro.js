import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Libro extends Model {}

const anioActual = new Date().getFullYear();

Libro.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [3, 100],
      },
    },
    editorial: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [2, 100],
      },
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
        min: 1450,
        max: anioActual,
      },
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 50],
      },
    },
  },
  {
    sequelize: connection,
    modelName: "Libros",
  }
);

export default Libro;
