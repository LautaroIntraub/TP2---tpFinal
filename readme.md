# 📚 Gestión de Biblioteca

Este proyecto es una API RESTful desarrollada con Node.js, Express y Sequelize, que permite gestionar usuarios, libros y roles.

## 🚀 Requisitos

- Node.js v18 o superior
- MySQL (o MariaDB)
- Git

## ⚙️ Instalación

1. Cloná el repositorio:

```
git clone https://github.com/LautaroIntraub/TP2---tpFinal.git

cd TP2---tpFinal

Instalá las dependencias:
npm install

Ejecutá las migraciones y modelos (si no usás migraciones explícitas, asegurate que el sync() esté en el código):
npm run dev
Esto iniciará el servidor y conectará con la base de datos.

🧪 Endpoints disponibles
📚 Libros
GET /libros: Listar todos los libros
GET /libros/:id: Obtener un libro por ID
POST /libros: Crear un nuevo libro
PUT /libros/:id: Actualizar un libro existente
DELETE /libros/:id: Eliminar un libro

👤 Usuarios
GET /users: Listar todos los usuarios
GET /users/:id: Obtener un usuario por ID
POST /users: Crear un nuevo usuario
PUT /users/:id: Actualizar un usuario
DELETE /users/:id: Eliminar un usuario

🛡️ Roles
GET /roles: Listar todos los roles
GET /roles/:id: Obtener un rol por ID
POST /roles: Crear un rol
PUT /roles/:id: Actualizar un rol
DELETE /roles/:id: Eliminar un rol

🧰 Tecnologías utilizadas
Node.js
Express
Sequelize
MySQL
Nodemon (modo desarrollo)

✅ Validaciones
Todas las rutas POST, PUT y DELETE están validadas para garantizar integridad de datos.
```
