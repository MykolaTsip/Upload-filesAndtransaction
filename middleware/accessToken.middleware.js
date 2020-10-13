const jwt = require('jsonwebtoken')

const {ErrorHandle, ErrorStatusEnum, ErrorEnum} = require('../errors')
const  {constants, token_conf} =require('../configs')
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

         jwt.verify(token ,token_conf.ACCESS_SECRET_KEY, err => {
            if (err) {
                return next(new ErrorHandle(
                    ErrorEnum.NOT_VALID_TOKEN.message,
                    ErrorStatusEnum.NOT_VALID_TOKEN,
                    ErrorEnum.NOT_VALID_TOKEN.customCode
                ))
            }
        })

        const ref = await oauthService.getByParams({access_token: token})

        if (!ref) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_TOKEN.message,
                ErrorStatusEnum.NOT_VALID_TOKEN,
                ErrorEnum.NOT_VALID_TOKEN.customCode
            ))
        }

        // console.log(ref)
        req.user = ref.User
        next()
    }
    catch (e) {
        next(e)
    }
}
