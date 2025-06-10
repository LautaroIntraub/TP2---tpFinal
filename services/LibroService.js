import { User } from "../models/index.js";

class LibrosService {

    getAllLibrosService = async () => {
        const libros = await User.findAll({
            attributes: ["id", "nombre", "autor", "editorial", "año", "genero"],
            raw: true
        });
        return libros;
    }}
  
    
    getLibroServiceById = async (id ) => {
        let libro = await User.findByPk(id, {
            attributes: ["id", "nombre", "autor", "editorial", "año", "genero"],
            raw: true
        });
        return libro;
    }