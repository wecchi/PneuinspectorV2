const express = require('express')
const router = express.Router()

router.get('/main',(req,res)=>{
    res.render('menus/mainMenu')
})

router.get('/cadastros',(req,res)=>{
    res.render('menus/cadMenu')
})

router.get('/listagens',(req,res)=>{
    res.render('menus/listaMenu')
})
module.exports = router