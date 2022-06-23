const express = require('express')
const router = express.Router()
const Inspecoes = require('../models/inspecoes')

router.get('/inspecoes/:nrofogo',(req,res)=>{
    Inspecoes.findAll({where: {'nrofogo' : req.params.nrofogo}}).then(
        function(Inspecoes){
            res.redirect({Inspecoes:Inspecoes})  
        }
    )  
})         




module.exports = router