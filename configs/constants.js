const dotenv = require('dotenv')
dotenv.config({})

module.exports = {
    AUTHORIZATION: 'Authorization',

    ROOT_EMAIL: process.env.ROOT_EMAIL,
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD,

    BYTE_TO_MB: 1024 * 1024,

    PHOTOS_MIMETYPE: [
        'image/gif', 'image/jpeg', 'image/png', 'image/webp'
    ],

    DOCS_MIMETYPE: [
        'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]
}
