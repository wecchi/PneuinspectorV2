const express = require('express')
const router = express.Router()
const Motoristas = require('../models/motoristas')
const Veiculos = require('../models/veiculos')
const Pneus = require('../models/pneus')
const Inspetores = require('../models/inspetores')
const Inspecoes = require('../models/inspecoes')


router.get('/inspecao',(req,res)=>{

  Pneus.findAll({order: [['nro_fogo','ASC']]}).then(function(Pneus){
    Veiculos.findAll({order: [['placas','ASC']]}).then(function(Veiculos){
      Motoristas.findAll({order: [['matricula','ASC']]}).then(function(Motoristas){
        Inspetores.findAll({order: [['matricula','ASC']]}).then(function(Inspetores){
          Inspecoes.findAll({order: [['id','ASC']]}).then(function(Inspecoes){
            res.render('admin/inspecao', {Pneus:Pneus,Veiculos:Veiculos,Motoristas:Motoristas,Inspetores:Inspetores,Inspecoes:Inspecoes})
          })  
        })   
      })  
    })
  })
})
module.exports = router
