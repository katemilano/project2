module.exports = {
  development: {
    username: process.env.SEQUELIZE_USER || 'root',
<<<<<<< HEAD
    password: process.env.SEQUELIZE_PASSWORD || 'Threshmain',
=======
    password: process.env.SEQUELIZE_PASSWORD || '12345678',
>>>>>>> 8e2f1f860df946681b2cf679b403712fbb45ed34
    database: 'project2_dev',
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
  },
  test: {
    username: process.env.TU || null,
    password: process.env.TP || null,
    database: 'project2_test',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    logging: false
  },
  production: {
    'use_env_variable': 'JAWSDB_URL',
    dialect: 'mysql'
  }
};
