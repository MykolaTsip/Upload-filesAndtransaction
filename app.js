const express = require('express')
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')
const path = require('path')

const {userRouter, carRouter} = require('./routers')
const instance = require('./database').getInstance()
instance.setModel()

dotenv.config({})

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.json())
server.use(fileUpload({}))

server.use(express.static(path.join(process.cwd(), 'public')))

server.use('/users', userRouter)
server.use('/cars', carRouter)

server.use('*', (err, req, res, next) => {
    res.status(err.status)
        .json({
            message: err.message,
            code: err.customCode
        })
})

server.listen(5001, (e) => {
    if (e) {
        console.log(e)
    }

    console.log('host 5001 is work! --- !')
})
