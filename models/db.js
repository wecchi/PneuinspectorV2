//conexao Mysql Sequelize//
const Sequelize = require('sequelize')
const sequelize = new Sequelize('pneuinspectordb','root','android',{
  host: 'localhost',
  dialect: 'mysql'

 })
 
 module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
 }