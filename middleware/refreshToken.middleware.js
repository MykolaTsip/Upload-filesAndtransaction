const jwt = require('jsonwebtoken')

const {constants, token_conf} = require('../configs')
const {ErrorEnum, ErrorStatusEnum, ErrorHandle} = require('../errors')
const {oauthService} = require('../services')

module.exports = async (req, res, next) => {
    try {
        const token = req.get(constants.AUTHORIZATION)

        if (!token) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_TOKEN.message,
                ErrorStatusEnum.NOT_VALID_TOKEN,
                ErrorEnum.NOT_VALID_TOKEN.customCode
            ))
        }

        jwt.verify(token, token_conf.REFRESH_SECRET_KEY, err => {
            if (err) {
                return next(new ErrorHandle(
                    ErrorEnum.NOT_VALID_TOKEN.message,
                    ErrorStatusEnum.NOT_VALID_TOKEN,
                    ErrorEnum.NOT_VALID_TOKEN.customCode
                ))
            }
        })


        const refToken = await oauthService.getByParams({refresh_token: token})

        if (!refToken) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_TOKEN.message,
                ErrorStatusEnum.NOT_VALID_TOKEN,
                ErrorEnum.NOT_VALID_TOKEN.customCode
            ))
        }



        req.user = refToken.User
        next()
    } catch (e) {
        next(e)
    }
}
