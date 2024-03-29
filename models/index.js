const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
    foreignKey: 'userId'
});

User.hasMany(Comment, {
    foreignKey: 'userId'
});

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, Post }; 
