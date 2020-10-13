const {db_conf} = require('../../configs')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            avatar: {
                type: DataTypes.STRING
            }
        },
        {
            tableName: db_conf.USERS,
            timestamps: false
        })

    return User
}
