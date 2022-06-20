const db = require('./db')
const Veiculos = db.sequelize.define('veiculos',{
    placas: {type: db.Sequelize.STRING},
    tipo: {type: db.Sequelize.STRING},
    modelo: {type: db.Sequelize.STRING},
    fabricante: {type: db.Sequelize.STRING},
    ano_fabr: {type: db.Sequelize.STRING},
    prefixo: {type: db.Sequelize.STRING},
    qteeixors: {type: db.Sequelize.STRING},
    qteeixord: {type: db.Sequelize.STRING},
    qteeixos: {type: db.Sequelize.STRING},    
    qtepneus: {type: db.Sequelize.STRING},
    qteestepes: {type: db.Sequelize.STRING},
    modelo: {type: db.Sequelize.STRING},
    base: {type: db.Sequelize.STRING}
})

//Veiculos.sync({force:true})
module.exports = Veiculos