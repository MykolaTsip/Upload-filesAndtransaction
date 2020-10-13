const {Router} = require('express')

const {userController} = require('../controllers')
const {userMiddleware, loginUserMiddleware, refreshTokenMiddleware, accessTokenMiddleware, file} = require('../middleware')

const userRouter = Router()

userRouter.get('/', userController.AllUser)
userRouter.post('/new', userMiddleware, file.checkUserFileMiddleware, userController.CreateUser)
userRouter.post('/login', loginUserMiddleware, userController.Login)
userRouter.post('/refresh', refreshTokenMiddleware, userController.RefreshToken)
userRouter.post('/delete', accessTokenMiddleware, userController.DeleteUser)
userRouter.post('/update', accessTokenMiddleware, file.checkUserFileMiddleware, userController.UpdateUserPhoto)

module.exports = userRouter
