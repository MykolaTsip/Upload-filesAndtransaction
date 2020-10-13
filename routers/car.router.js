const {Router} = require('express')

const {carController} = require('../controllers')

const carRouter = Router()

carRouter.get('/', carController.AllCars)

module.exports = carRouter
