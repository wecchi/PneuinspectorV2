const db = require('./db')
const Pneus = db.sequelize.define('pneus',{    
    nro_fogo: {type: db.Sequelize.STRING},
    dt_compra: {type: db.Sequelize.DATE},
    nota_fiscal: {type: db.Sequelize.STRING},
    fabricante: {type: db.Sequelize.STRING},
    modelo: {type: db.Sequelize.STRING},
    largura: {type: db.Sequelize.FLOAT},
    perfil: {type: db.Sequelize.FLOAT},
    tipo: {type: db.Sequelize.STRING},
    diametro: {type: db.Sequelize.FLOAT},
    carga_max: {type: db.Sequelize.FLOAT},
    pressao_max: {type: db.Sequelize.FLOAT},
    ind_carga: {type: db.Sequelize.STRING},
    ind_vel: {type: db.Sequelize.STRING},
    dot: {type: db.Sequelize.STRING},
    severidade: {type: db.Sequelize.STRING},
    local: {type: db.Sequelize.STRING},
    eixo: {type: db.Sequelize.STRING},    
    lado: {type: db.Sequelize.STRING},
    posicao: {type: db.Sequelize.STRING}

})

//Pneus.sync({force:true})
module.exports = Pneus