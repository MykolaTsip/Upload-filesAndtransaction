const {Sequelize, DataTypes} = require('sequelize')
const path = require('path')
const fs = require('fs')

const {db_conf} = require('../configs')

module.exports = (() => {
    let instance;

    function initCommit() {
  const client = new Sequelize(db_conf.DB_NAME, db_conf.DB_USER, db_conf.DB_PASS, {
      host: 'localhost',
      dialect: 'mysql'
  })

        let models = {}
        
        function getModel() {
            fs.readdir(path.join(process.cwd(), 'database', 'model'), (err, files) => {
                files.forEach( file => {
                    const [modelName] = file.split('.')
                    models[modelName] = (require(path.join(process.cwd(), 'database', 'model', modelName)))(client, DataTypes)
                })
            })
        }


return {
      setModel: () => getModel(),
    getModels:  (modelName) => models[modelName],
   transactionInstance: () => client.transaction()
}
    }
    
    return {
        getInstance: () => {
            if (!instance) {
                instance = initCommit()
            }
            return instance
        }
    }
})()
