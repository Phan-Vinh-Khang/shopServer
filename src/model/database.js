import mysql from 'mysql2/promise'
import { Logger } from 'sass';
import { Sequelize } from 'sequelize';
// create the connection to database
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'testdbNodeJS'
});
// Host: sql12.freesqldatabase.com
// Database name: sql12664061
// Database user: sql12664061
// Database password: M7Z2kFV5XP
// Port number: 3306
const connect_db = new Sequelize('sql12664174', 'sql12664174', '8v71UFIVEW', {
    host: 'sql12.freesqldatabase.com',
    dialect: 'mysql',
    logging: false,
    port: 3306
});
const check_connect = async (sequelize) => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default db
export { connect_db, check_connect }