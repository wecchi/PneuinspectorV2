const db = require('./db')
const Motoristas = db.sequelize.define('motoristas',{
    nome: {type: db.Sequelize.STRING},
    email: {type: db.Sequelize.STRING},
    contato: {type: db.Sequelize.STRING},
    matricula: {type: db.Sequelize.STRING},
    desc_cargo: {type: db.Sequelize.STRING},
    desc_local: {type: db.Sequelize.STRING},
    tipo: {type: db.Sequelize.STRING},
    categoria_cnh: {type: db.Sequelize.STRING},
    validade: {type: db.Sequelize.DATE}
   
})

//Motoristas.sync({force:true})
module.exports = Motoristas