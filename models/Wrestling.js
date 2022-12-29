const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Wrestling extends Model {}

// creating Wrestling model with an id, a title, a promotion, a presentation and a format
Wrestling.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        wrestling_title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        wrestling_promotion:{
            type: DataTypes.STRING,
        },
        wrestling_presentation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        wrestling_format: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'wrestling'
    }
);

module.exports = Wrestling;