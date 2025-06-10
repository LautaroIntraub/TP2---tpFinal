import Role from "./Role.js";
import User from "./User.js";
import Libro from "./Libro.js";

Role.hasMany(User);
User.belongsTo(Role);
User.hasMany(Libro);


export { Role, User, Libro };
