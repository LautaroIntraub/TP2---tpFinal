import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Libro extends Model {}

Libro.init(
  {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    editorial: DataTypes.STRING,
    año: {
      type: DataTypes.INTEGER,
      validate: {
        esInt: true,
        min: 1450,
        max: new Date().getFullYear(),
      },
    },
    genero: DataTypes.STRING,
  },
  {
    sequelize: connection,
    modelName: "Libro",
  }
);

export default Libro;
