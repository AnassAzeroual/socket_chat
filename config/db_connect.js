var Sequelize = require('sequelize');
var db = {}
var connection = (app) =>
{
    // Option 1: Passing parameters separately
    const sequelize = new Sequelize('bd_chat', 'root', '',
        {
            host: 'localhost',
            dialect: mysql,
            operatorsAliases: false,
            pool:
            {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        }
    );

}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = connection;
