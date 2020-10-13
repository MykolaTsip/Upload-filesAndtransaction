const jwt = require('jsonwebtoken')
const {token_conf} = require('../configs')



module.exports = () => {

    const access_token = jwt.sign({a: 'b'}, token_conf.ACCESS_SECRET_KEY, {expiresIn: '2m'})
    const refresh_token = jwt.sign({a: 'bc'}, token_conf.REFRESH_SECRET_KEY, {expiresIn: '1d'})

    return {
        access_token,
        refresh_token
    }
}
