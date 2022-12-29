const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Music extends Model {}

// creating Music model with an id, an artist, a title and a format
Music.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        music_artist:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        music_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        music_format: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'music'
    }
);

module.exports = Music;