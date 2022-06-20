  //MODULOS
  const express = require('express')
  const app = express()  
  
  //TRABALHAR COM HTML
  const handlebars = require('express-handlebars')
  
  //TRABALHAR COM HTML-DATABASE
  const bodyParser = require('body-parser')  
  
  //TRABALHAR COM ROTAS  
  const admin = require('./routes/admin')
  const cadastros = require('./routes/cadastros')
  const listagens = require('./routes/listagens') 
  const menus = require('./routes/menus')
  const posts = require('./routes/posts')
  const dels = require('./routes/dels')
  const edits = require('./routes/edits')

   //TRABALHAR COM DIALOG
  const dialog = require('dialog-node');




  //TRABALHAR COM DIRETORIOS
  const path = require('path')
  

  //TRABALHAR COM SESSOES
  const session = require('cookie-session')
  
  //TRABALHAR COM COOOKIES
  const flash = require('connect-flash')
  
  //CONFIGURACOES    
  
    //SESSÃO
    app.use(session({
    secret: 'pneuinspector',
    resave: true,
    saveUninitialized: true
    })) 
    app.use(flash())      
    
    //MIDDLEWARE
    
    app.use(function(req,res,next){
      res.locals.success_msg = req.flash('success_msg')
      res.locals.error_msg = req.flash('error_msg')
      next()
    })
    
    //TEMPLATE ENGINE HANDLEBARS
      app.engine('handlebars', handlebars.engine({defaultLayout: 'main',
        runtimeOptions: {
          allowProtoPropertiesByDefault: true,
          allowProtoMethodsByDefault: true,
        },
      }))   
      app.set('view engine','handlebars')
    
      //PUBLIC
      app.use(express.static(path.join(__dirname,'public')))
      
      //BODY-PARSER  
      app.use(bodyParser.urlencoded({extended: false}))
      app.use(bodyParser.json())
      
    
      //ROUTER 
      app.use('/admin',admin) 
      app.use('/cadastros',cadastros) 
      app.use('/listagens',listagens) 
      app.use('/menus',menus) 
      app.use('/posts',posts) 
      app.use('/dels',dels) 
      app.use('/edits',edits) 
      
      //ROUTER MENU
      app.get('/',(req,res)=>{
      res.render('menus/logo')
    })   
  //
    
  app.listen(3306, function(){
  console.log('servidor conectado')
})