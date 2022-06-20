const express = require('express')
const router = express.Router()
const Emparelhamentos = require('../models/emparelhamentos')
const Pneus = require('../models/pneus')
const Veiculos = require('../models/veiculos')
const Inspetores = require('../models/inspetores')






router.get('/emparelhamentos/:placa',(req,res)=>{   
    Pneus.findAll({order: [['nro_fogo','ASC']]}).then(        
        function(Pneus){
            var placa = req.params.placa
            res.render('cadastros/emparelhamentos',{Pneus:Pneus,placa})
        }
    )
})       
    
   

router.get('/motoristas',(req,res)=>{
    res.render('cadastros/motoristas')
})

router.get('/inspetores',(req,res)=>{
    res.render('cadastros/inspetores')
})


router.get('/pneus',(req,res)=>{
    Veiculos.findAll({attributes: ['placas'],order: [['placas','ASC']]}).then(
        function(Placas){
            res.render('cadastros/pneus',{Placas:Placas})
        }
    )    

})

router.get('/veiculos',(req,res)=>{
    res.render('cadastros/veiculos')
})

router.get('/locais',(req,res)=>{
    res.render('cadastros/locais')
})

router.post('/teste/:placas',(req,res)=>{
    Emparelhamentos.findAll({where: {'placas' : req.params.placas}
    }).then(function(Emparelhamentos){
      res.send(Emparelhamentos)  
    })  
})         












module.exports = router