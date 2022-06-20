const express = require('express')
const router = express.Router()
const Inspecoes = require('../models/inspecoes')
const Emparelhamentos = require('../models/emparelhamentos')
const Motoristas = require('../models/motoristas')
const Pneus = require('../models/pneus')
const Veiculos = require('../models/veiculos')

router.get('/veiculos/:id', function(req,res){
    
    Veiculos.destroy({where: {'id' : req.params.id}
    }).then(function(){
        req.flash('success_msg', "Veiculo excluido com sucesso")
        res.redirect('/listagens/veiculos')
    }).catch(function(erro){  
        req.flash('error_msg', "Houve um erro na exclusão do veiculo")
        res.redirect('/listagens/veiculos')
    })
})

router.get('/pneus/:id', function(req,res){
    
    Pneus.destroy({where: {'id' : req.params.id}
    }).then(function(){
        req.flash('success_msg', "Pneus excluido com sucesso")
        res.redirect('/listagens/pneus')
    }).catch(function(erro){  
        req.flash('error_msg', "Houve um erro na exclusão do pneu")
        res.redirect('/listagens/pneus')
    })
})

router.get('/motoristas/:id', function(req,res){
    
    Motoristas.destroy({where: {'id' : req.params.id}
    }).then(function(){
        req.flash('success_msg', "Motorista excluido com sucesso")
        res.redirect('/listagens/motoristas')
    }).catch(function(erro){  
        req.flash('error_msg', "Houve um erro na exclusão do motorista")
        res.redirect('/listagens/motoristas')
    })
})


router.get('/emparelhamentos/:id', function(req,res){
    
    Emparelhamentos.destroy({where: {'id' : req.params.id}
    }).then(function(){
        req.flash('success_msg', "Emparelhamento excluido com sucesso")
        res.redirect('/listagens/emparelhamentos')
    }).catch(function(erro){  
        req.flash('error_msg', "Houve um erro na exclusão do emparelhamento")
        res.redirect('/listagens/emparelhamentos')
    })
})

module.exports = router