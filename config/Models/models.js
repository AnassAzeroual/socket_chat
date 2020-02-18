var Sequelize = require('sequelize');
var connect   = require('../db_connect');

var userModel = connect.Sequelize.define(
    'user',
    {
        id :
        {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fullName :
        {
            type:Sequelize.STRING
        },
        email :
        {
            type:Sequelize.STRING
        },
        password :
        {
            type:Sequelize.STRING
        },
        created :
        {
            type:Sequelize.DATE,
            defaultValue:Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)

var convModel = connect.Sequelize.define(
    'conv',
    {
        id :
        {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fullName :
        {
            type:Sequelize.STRING
        },
        email :
        {
            type:Sequelize.STRING
        },
        password :
        {
            type:Sequelize.STRING
        },
        created :
        {
            type:Sequelize.DATE,
            defaultValue:Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)

var conv_replayModel = connect.Sequelize.define(
    'conv_replay',
    {
        id :
        {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        fullName :
        {
            type:Sequelize.STRING
        },
        email :
        {
            type:Sequelize.STRING
        },
        password :
        {
            type:Sequelize.STRING
        },
        created :
        {
            type:Sequelize.DATE,
            defaultValue:Sequelize.NOW
        }
    },
    {
        timestamps: false
    }
)
