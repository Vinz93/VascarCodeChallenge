import path from 'path';

export const dbConfig = {
  db: 'mongodb://localhost/node_redux',
};

export const appConfig = {
  env: 'development',
  host: process.env.HOST || 'http://127.0.0.1',
  path: '/',
  basePath: '/',
  port: 3333,
  basePort: 3333,
  root: path.join(__dirname, '../../../'),
};
