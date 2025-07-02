import { getSequelize } from '../database/db.js';
import models from '../models/index.js';

const sequelize = getSequelize();

const createDefaultAdmin = async () => {
  try {
    const existingAdmin = await models.User.findOne({
      where: { role: 'admin' }
    });

    if (existingAdmin) {
      console.log('* Usuario admin ya existe');
      return;
    }

    await models.User.create({
      nombre: 'admin',
      email: 'admin@gmail.com',
      password: 'admin',
      role: 'admin'
    });

    console.log('* Usuario admin creado automáticamente');
  } catch (error) {
    console.error('Error al crear usuario admin:', error);
  }
};

(async () => {
  try {
    await sequelize.sync();
    console.log('Modelos sincronizados con la base de datos');
    
    await createDefaultAdmin();
    
    console.log('🚀 Base de datos lista para usar');
    process.exit(0);
  } catch (err) {
    console.error('Error al sincronizar:', err);
    process.exit(1);
  }
})();
