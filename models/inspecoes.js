const db = require('./db')
const Inspecoes = db.sequelize.define('inspecoes',{
    timestampStart: {type: db.Sequelize.STRING},
    matriculaInspt: {type: db.Sequelize.STRING},
    nomeInsp: {type: db.Sequelize.STRING},
    matriculaMot: {type: db.Sequelize.STRING},
    nomeMot: {type: db.Sequelize.STRING},
    placas: {type: db.Sequelize.STRING},
    descVeic: {type: db.Sequelize.STRING},
    quilometragem: {type: db.Sequelize.FLOAT},
    nroFogo: {type: db.Sequelize.STRING},    
    eixo: {type: db.Sequelize.STRING},
    lado: {type: db.Sequelize.STRING},
    posicao: {type: db.Sequelize.STRING},
    sulco: {type: db.Sequelize.FLOAT},
    pressao: {type: db.Sequelize.FLOAT},
    resultado: {type: db.Sequelize.STRING},
    classificacao: {type: db.Sequelize.STRING},    
    observacoes: {type: db.Sequelize.STRING}
   
})

//Inspecoes.sync({force:true})
module.exports = Inspecoes