import { getSequelize } from '../database/db.js';
import '../models/index.js';

const sequelize = getSequelize();

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Modelos sincronizados con la base de datos');
    process.exit(0);
  } catch (err) {
    console.error('Error al sincronizar:', err);
    process.exit(1);
  }
})();
