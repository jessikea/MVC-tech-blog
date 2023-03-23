const {sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}

Post.init(
    {
        title: DataTypes.String,
        content: DataTypes.String,
        user_id: DataTypes.Integer
    },
    {
        sequelize
    }
);

module.exports = Post;