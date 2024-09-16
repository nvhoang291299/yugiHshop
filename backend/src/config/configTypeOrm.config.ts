import { config } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

config({ path: '.env.database' });

export const dataSourceOption: DataSourceOptions = {
  name: 'default',
  type: 'mysql',
  database: process.env.MYSQL_NAME,
  host: process.env.MYSQL_HOST,
  port: +(process.env.MYSQL_PORT ?? 3306),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  synchronize: false,
  entities: ['dist/database/entities/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsTransactionMode: 'each',
  subscribers: [],
  migrationsRun: true,
  ssl: process.env.MYSQL_SSL_ENABLED ? { rejectUnauthorized: false } : false,
};

export default new DataSource(dataSourceOption);
