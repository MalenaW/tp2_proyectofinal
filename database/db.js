import { Sequelize } from 'sequelize';
import tedious from 'tedious';
import config from '../config/dotenv.config.js';

let sequelize;

// Patrón Singleton para la conexión a la base de datos
// Evita crear múltiples instancias de Sequelize

export const getSequelize = () => {
  if (!sequelize) {
    sequelize = new Sequelize(
      config.db.name,
      config.db.user,
      config.db.password,
      {
        dialect: 'mssql',
        dialectModule: tedious,
        host: config.db.host,     
        port: parseInt(config.db.port), 
        dialectOptions: {
          options: {
            encrypt: false,
            trustServerCertificate: true,
         
          }
        },
        logging: false
      }
    );
  }
  return sequelize;
};