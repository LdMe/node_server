import dotenv from "dotenv";
console.log(dotenv.config()); // Cargamos las variables de entorno

import { Sequelize } from "sequelize";
console.log(process.env.MYSQL_HOST);
const sequelize = new Sequelize('petanca', 'root', 'mi-contraseña', {
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql'
  });
  
export default sequelize;