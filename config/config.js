module.exports = {
    development: {
      username: process.env.DB_USER || 'yourUsername',
      password: process.env.DB_PASSWORD || 'yourPassword',
      database: process.env.DB_NAME || 'yourDatabase',
      host: process.env.DB_HOST || 'localhost',
      dialect: 'postgres',
      port: process.env.DB_PORT || 5432
    },
    production: {
      use_env_variable: 'DATABASE_URL', // If you're using a single URL for production
      dialect: 'postgres'
    }
  };
  