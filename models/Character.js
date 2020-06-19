const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}

Character.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        charName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        charRace: {
            type: DataTypes.STRING,
            allowNull: false
        },
        charClass: {
            type: DataTypes.STRING,
            allowNull: false
        },
        charStr: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        charDex: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        charCon: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        charInt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        charWis: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        charCha: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'character'
    }
)

module.exports = Character;