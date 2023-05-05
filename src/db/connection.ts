
require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('hotel','2pgx8bqc7a54k86seeeo','pscale_pw_bzXxF41BSV4xgkk9POGyzr6pl55aHSZgw4wGjT8Ar2o', {
    host: 'aws.connect.psdb.cloud',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,        
        }
    }
 });

sequelize.authenticate();

export default sequelize; 

