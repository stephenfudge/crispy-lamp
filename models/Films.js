const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Films extends Model {}


// creating Films model with an id, a title and a format
Films.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        film_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        film_format: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'films'
    }
);

module.exports = Films;