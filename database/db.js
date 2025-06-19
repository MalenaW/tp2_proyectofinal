import dotenv from 'dotenv';
dotenv.config();


import { Sequelize } from 'sequelize';
import tedious from 'tedious';

let sequelize;

// Patrón Singleton para la conexión a la base de datos
// Evita crear múltiples instancias de Sequelize

export const getSequelize = () => {
  console.log("Valor de DB_HOST:", process.env.DB_HOST);

  if (!sequelize) {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        dialect: 'mssql',
        dialectModule: tedious,
        host: process.env.DB_HOST,      // 
        port: parseInt(process.env.DB_PORT), // 
        dialectOptions: {
          options: {
            encrypt: false,
            trustServerCertificate: true,
            instanceName: process.env.DB_INSTANCE,
          }
        },
        logging: false
      }
    );
  }
  return sequelize;
};