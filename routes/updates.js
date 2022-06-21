const express = require('express')
const router = express.Router()
const Inspecoes = require('../models/inspecoes')
const Inspetores = require('../models/inspetores')
const Motoristas = require('../models/motoristas')
const Pneus = require('../models/pneus')
const Veiculos = require('../models/veiculos')



router.post('/emparelhamentos',
    function (req,res){
        Pneus.findOne({where: {'id': req.body.id}}).then(
            function(pneu){        
                pneu.local=req.body.local,
                pneu.eixo=req.body.eixo,
                pneu.lado=req.body.lado,
                pneu.posicao=req.body.posicao
                pneu.save().then(
                    function(){
                        req.flash('success_msg', "Emparelhamento registrado com sucesso")                        
                        Pneus.findAll({order: [['id','DESC']]}).then(
                            function(Pneus){Veiculos.findAll({attributes: ['placas'],order: [['placas','ASC']]}).then(
                                function(Placas){res.render('listagens/listaPne', {Pneus:Pneus,Placas:Placas})
                                })})}
                ).catch(
                    function(erro){req.flash('error_msg', "Houve um erro na registro do emparelhamento")
                        Pneus.findAll({order: [['id','DESC']]}).then(
                            function(Pneus){Veiculos.findAll({attributes: ['placas'],order: [['placas','ASC']]}).then(
                                function(Placas){res.render('listagens/listaPne', {Pneus:Pneus,Placas:Placas})
                                })})}
                )})}    
)


router.post('/motoristas',
    function (req,res){
        Motoristas.findOne({where: {'id': req.body.id}}).then(
            function(motorista){        
                motorista.nome=req.body.nome,
                motorista.email=req.body.email,
                motorista.contato=req.body.contato,
                motorista.matricula=req.body.matricula,
                motorista.desc_cargo=req.body.desc_cargo,
                motorista.desc_local=req.body.desc_local,
                motorista.tipo=req.body.tipo,
                motorista.categoria_cnh=req.body.categoria_cnh,
                motorista.validade=req.body.validade
                motorista.save().then(
                    function(){
                        req.flash('success_msg', "Edição de motorista registrado com sucesso") 
                        Motoristas.findAll({order: [['id','DESC']]}).then(
                            function(Motoristas){
                                res.render('listagens/listaMot', {Motoristas : Motoristas})
                            }
                        )    
                    }        
                ).catch(
                    function(erro){
                        req.flash('error_msg', "Houve um erro na registro da edição de motorista")
                        Motoristas.findAll({order: [['id','DESC']]}).then(
                            function(Motoristas){
                                res.render('listagens/listaMot', {Motoristas : Motoristas})
                            }
                        )      
                    }
                )
            }
        )
    }    
)

router.post('/pneus',
    function (req,res){
        Pneus.findOne({where: {'id': req.body.id}}).then(
            function(pneu){       
                
                pneu.id=req.body.id,
                pneu.nro_fogo=req.body.nro_fogo,
                pneu.dt_compra=req.body.dt_compra,
                pneu.nota_fiscal=req.body.nota_fiscal,
                pneu.fabricante=req.body.fabricante,
                pneu.modelo=req.body.modelo,
                pneu.largura=req.body.largura,
                pneu.perfil=req.body.perfil,
                pneu.tipo=req.body.tipo,
                pneu.diametro=req.body.diametro,
                pneu.carga_max=req.body.carga_max,
                pneu.pressao_max=req.body.pressao_max,
                pneu.ind_carga=req.body.ind_carga,
                pneu.ind_vel=req.body.ind_vel,
                pneu.dot=req.body.dot,
                pneu.severidade=req.body.severidade
                pneu.local=req.body.local,
                pneu.eixo=req.body.eixo,
                pneu.lado=req.body.lado,
                pneu.posicao=req.body.posicao
                
                pneu.save().then(
                    function(){
                        req.flash('success_msg', "Edição de pneus registrado com sucesso") 
                        Pneus.findAll({order: [['id','DESC']]}).then(
                            function(Pneus){
                                res.render('listagens/listaPne', {Pneus : Pneus})
                            }
                        )    
                    }        
                ).catch(
                    function(erro){
                        req.flash('error_msg', "Houve um erro no registro da edição do pneu")
                        Pneus.findAll({order: [['id','DESC']]}).then(
                            function(Pneus){
                                res.render('listagens/listaPne', {Pneus : Pneus})
                            }
                        )      
                    }
                )
            }
        )
    }    
)

router.post('/veiculos',
    function (req,res){
        Veiculos.findOne({where: {'id': req.body.id}}).then(
            function(veiculo){    

                veiculo.id=req.body.id,
                veiculo.placas=req.body.placas,
                veiculo.tipo=req.body.tipo,
                veiculo.modelo=req.body.modelo,
                veiculo.fabricante=req.body.fabricante,
                veiculo.ano_fabr=req.body.ano_fabr,
                veiculo.prefixo=req.body.prefixo,
                veiculo.qteeixors=req.body.qteeixors,
                veiculo.qteeixord=req.body.qteeixord,
                veiculo.qteeixos=req.body.qteeixos,
                veiculo.qtepneus=req.body.qtepneus,
                veiculo.qteestepes=req.body.qteestepes,
                veiculo.modelo=req.body.modelo,
                veiculo.base=req.body.base
                
                veiculo.save().then(
                    function(){
                        req.flash('success_msg', "edição de veículo registrada com sucesso") 
                        Veiculos.findAll({order: [['id','DESC']]}).then(
                            function(Veiculos){
                                res.render('listagens/listaVei', {Veiculos : Veiculos})
                            }
                        )    
                    }        
                ).catch(
                    function(erro){
                        req.flash('error_msg', "Houve um erro na registro da edição de veículo")
                        Veiculos.findAll({order: [['id','DESC']]}).then(
                            function(Veiculos){
                                res.render('listagens/listaVei', {Veiculos : Veiculos})
                            }
                        )      
                    }
                )
            }
        )
    }    
)

router.post('/inspetores',
    function (req,res){
        Inspetores.findOne({where: {'id': req.body.id}}).then(
            function(inspetor){ 
                
                inspetor.id=req.body.id,
                inspetor.nome=req.body.nome,
                inspetor.email=req.body.email,
                inspetor.contato=req.body.contato,
                inspetor.matricula=req.body.matricula

                inspetor.save().then(
                    function(){
                        req.flash('success_msg', "Edição de inspetor(a) registrado com sucesso") 
                        Inspetores.findAll({order: [['id','DESC']]}).then(
                            function(Inspetores){
                                res.render('listagens/listaInspt', {Inspetores : Inspetores})
                            }
                        )    
                    }        
                ).catch(
                    function(erro){
                        req.flash('error_msg', "Houve um erro na registro da edição do(a) inspetor(a)")
                        Inspetores.findAll({order: [['id','DESC']]}).then(
                            function(Inspetores){
                                res.render('listagens/listaInspt', {Inspetores : Inspetores})
                            }
                        )      
                    }
                )
            }
        )
    }    
)

router.post('/motoristas',
    function (req,res){
        Motoristas.findOne({where: {'id': req.body.id}}).then(
            function(motorista){        
                motorista.nome=req.body.nome,
                motorista.email=req.body.email,
                motorista.contato=req.body.contato,
                motorista.matricula=req.body.matricula,
                motorista.desc_cargo=req.body.desc_cargo,
                motorista.desc_local=req.body.desc_local,
                motorista.tipo=req.body.tipo,
                motorista.categoria_cnh=req.body.categoria_cnh,
                motorista.validade=req.body.validade
                motorista.save().then(
                    function(){
                        req.flash('success_msg', "Emparelhamento registrado com sucesso") 
                        Motoristas.findAll({order: [['id','DESC']]}).then(
                            function(Motoristas){
                                res.render('listagens/listaMot', {Motoristas : Motoristas})
                            }
                        )    
                    }        
                ).catch(
                    function(erro){
                        req.flash('error_msg', "Houve um erro na registro do emparelhamento")
                        Motoristas.findAll({order: [['id','DESC']]}).then(
                            function(Motoristas){
                                res.render('listagens/listaMot', {Motoristas : Motoristas})
                            }
                        )      
                    }
                )
            }
        )
    }    
)


module.exports = router

