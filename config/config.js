module.exports = {
  development: {
    username: process.env.SEQUELIZE_USER || 'root',
    password: process.env.SEQUELIZE_PASSWORD || 'Threshmain',
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
