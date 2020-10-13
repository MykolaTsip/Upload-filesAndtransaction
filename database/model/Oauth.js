const path = require('path')

const {db_conf} = require('../../configs')

module.exports = (sequelize, DataTypes) => {
    const Oauth = sequelize.define('Oauth', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        access_token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        refresh_token: {
          type: DataTypes.STRING,
          allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.STRING,
            default: new Date().toISOString()
        }
    },
        {
            tableName: db_conf.OAUTH,
            timestamps: false
        }
    )

    const  User = (require(path.join(process.cwd(), 'database', 'model', 'User')))(sequelize, DataTypes)
    Oauth.belongsTo(User, {foreignKey: 'user_id'})

    return Oauth
}
