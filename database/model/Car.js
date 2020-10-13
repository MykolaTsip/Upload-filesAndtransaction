const {db_conf} = require('../../configs')

module.exports = (sequelize, DataTypes) => {
  const Car =  sequelize.define('Car', {
        idcars: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER
        }
    },
        {
            tableName: db_conf.CARS,
            timestamps: false
        })

    return Car
}
