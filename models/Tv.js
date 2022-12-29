const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tv extends Model {}

// creating Tv model with an id, a title, a season and a format
Tv.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tv_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tv_season: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tv_format: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'tv'
    }
);

module.exports = Tv;