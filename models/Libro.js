import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Libro extends Model {}

Libro.init(
  {
    titulo: DataTypes.STRING,
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
    genero: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: "Libros",
  }
);

export default Libro;
