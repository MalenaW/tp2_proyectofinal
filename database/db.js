import { Sequelize } from 'sequelize';
import tedious from 'tedious';

let sequelize;

// Patrón Singleton para la conexión a la base de datos
// Evita crear múltiples instancias de Sequelize

export const getSequelize = () => {
  if (!sequelize) {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: process.env.DB_HOST,
      dialect: 'mssql',
      dialectModule: tedious,
      dialectOptions: {
        options: {
          encrypt: false,
          trustServerCertificate: true
        }
      },
       logging: false
    });
  }
  return sequelize;
};
