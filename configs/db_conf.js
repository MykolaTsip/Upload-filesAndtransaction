const dotenv = require('dotenv')
dotenv.config({})

module.exports = {
    // DB setting
    DB_NAME: 'auto_shop',
    DB_USER: process.env.DB_USER,
    DB_PASS:  process.env.DB_PASS,

    // DB table name
    USERS: 'users',
    CARS: 'cars',
    OAUTH: 'oauth'
}
