const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Skills extends Model {}

Skills.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        
        acrobatics: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        
        animalHandling: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        arcana: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        athletics: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        deception: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        history: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        insight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        intimidation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        investigation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        medicine: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        nature: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        perception: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        performance: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        persuasion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        religion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        sleightOfHand: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        stealth: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        survival: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        character_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'character',
                key: 'id'
            }
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
        modelName: 'skills'
    }
)

module.exports = Skills;