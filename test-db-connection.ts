// test-db-connection.ts (TypeScript example)

import { Sequelize } from 'sequelize';
import config from './database.config'; // Import your database configuration

async function testDatabaseConnection() {
  const sequelize = new Sequelize(config);

  try {
    await sequelize.authenticate();
    console.log(
      'Connection to the database has been established successfully.',
    );
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  } finally {
    await sequelize.close(); // Close the connection
  }
}

testDatabaseConnection();
