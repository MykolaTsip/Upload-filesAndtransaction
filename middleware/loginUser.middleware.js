const {userService} = require('../services')
const {ErrorHandle, ErrorStatusEnum, ErrorEnum} = require('../errors')

module.exports = async (req, res, next) => {
    try {
        const {email} = req.body

        const user = await userService.findByEmail({email})

        if (!user) {
            return next(new ErrorHandle(
                ErrorEnum.NOT_VALID_USER.message,
                ErrorStatusEnum.NOT_VALID_USER,
                ErrorEnum.NOT_VALID_USER.customCode
            ))
        }

        req.user = user
        next()

    }
    catch (e) {
        next(e)
    }
}
