import { Sequelize } from "sequelize";

const sequelize = new Sequelize('petanca', 'root', 'mi-contraseña', {
    host: process.env.MYSQL_HOST || 'mysql-petanca',
    port: process.env.MYSQL_PORT || 3306,
    dialect: 'mysql'
  });
  
export default sequelize;