import { SequelizeOptions } from 'sequelize-typescript';

const config: SequelizeOptions = {
    dialect: 'postgres',
    host: 'localhost', // Change to your PostgreSQL host
    port: 5432,        // Change to your PostgreSQL port
    username: 'postgres', // Change to your PostgreSQL username
    password: 'postgres', // Change to your PostgreSQL password
    database: 'postgres', // Change to your PostgreSQL database name
    models: [__dirname + '/**/*.model.ts'], // Path to your Sequelize model files
};

export default config;