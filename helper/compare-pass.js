const bcrypt = require('bcrypt')

module.exports = (pass, heshPass) => {
    const p = bcrypt.compare(pass, heshPass)

    if (!p) {
        throw new Error('bad password')
    }

    return p
}
