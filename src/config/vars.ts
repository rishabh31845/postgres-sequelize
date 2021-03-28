export const vars = {
  port: process.env.PORT || 8000,
  dbHost: process.env.DB_HOST || 'localhost',
  dbService: process.env.DB_SERVICE || 'johndoe',
  dbUserName: process.env.DB_USERNAME || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'postgres',
  dbPort: Number(process.env.DB_PORT) || 5432,
  dbSync: process.env.DB_SYNC == 'true',
  dbName: process.env.DB_SERVICE || 'john',
  dbSslModeRequire: process.env.DB_SSL_MODE_REQUIRE == 'true',
  dbDialect: process.env.DB_DIALECT || 'postgres',
  dbSchema: process.env.DB_SCHEMA || 'public',
  dbMaxPoolSize: Number(process.env.MAX_DB_POOL_SIZE) || 30,
  dbPoolAcquireTimeout: Number(process.env.DB_ACQUIRE_TIMEOUT) || 60000,
  dbPoolIdleConnectionTime: Number(process.env.DB_POOL_IDLE_CONNECTION_TIME) || 30000,
  dbLogging: process.env.DB_LOGGING === 'true'
};