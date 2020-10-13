const {constants} = require('../../configs')

module.exports = (req, res, next) => {
    try {
        if (!req.files) {
            next()
        }


        let photos = []

        const files = Object.values(req.files)

        for (let i = 0; i < files.length; i++) {
            const {size, name, mimetype} = files[i]

            if (constants.BYTE_TO_MB * 5 > size) {
                    console.log(2222222)

                if (constants.PHOTOS_MIMETYPE.includes(mimetype)) {
                    photos.push(files[i])
                }
            } else {
                console.log(`file not validity: ${name}`)
            }

        }
            req.avatar = photos[0]

        console.log(req.avatar)
        console.log('==========================_____++++++++')
        next()
    } catch (e) {
        next(e)
    }
}
