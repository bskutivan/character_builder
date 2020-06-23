const User = require('./User');
const Character = require('./Character');
const Skills = require('./Skills');

User.hasMany(Character, {
    foreignKey: 'user_id'
});

Character.belongsTo(User, {
    foreignKey: 'user_id'
});

Character.hasOne(Skills, {
    foreignKey: 'character_id'
});

Skills.belongsTo(Character, {
    foreignKey: 'character_id'
})

module.exports = { User, Character, Skills }