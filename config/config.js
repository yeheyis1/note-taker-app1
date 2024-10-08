module.exports = {
    development: {
      username: process.env.DB_USER || 'yeheyis1',
      password: process.env.DB_PASSWORD || 'Forwork1',
      database: process.env.DB_NAME || 'note_taker_app1_db',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      port: process.env.DB_PORT || 5432
    },
    production: {
      use_env_variable: 'DATABASE_URL', // If you're using a single URL for production
      dialect: 'postgres'
    }
  };
  