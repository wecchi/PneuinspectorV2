const db = require('./db')
const Emparelhamentos = db.sequelize.define('emparelhamentos',{    
    placas: {type: db.Sequelize.STRING},
    eixo: {type: db.Sequelize.STRING},    
    lado: {type: db.Sequelize.STRING},
    posicao: {type: db.Sequelize.STRING},
    
   })
//Emparelhamentos.sync({force:true})
module.exports = Emparelhamentos