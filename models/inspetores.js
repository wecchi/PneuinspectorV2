const db = require('./db')
const Inspetores = db.sequelize.define('inspetores',{
    nome: {type: db.Sequelize.STRING},
    email: {type: db.Sequelize.STRING},
    contato: {type: db.Sequelize.STRING},
    matricula: {type: db.Sequelize.STRING}    
   
})

//Inspetores.sync({force:true})
module.exports = Inspetores