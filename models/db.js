const Sequelize = require("sequelize")

const sequelize = new Sequelize("Users", "root", "qsc278279wdv",{
	host:"localhost",
	dialect: "mysql"
})
sequelize.authenticate().then(()=>{
	console.log("Conectado ao banco de dados com sucesso")
}).catch((err)=>{
	console.log('A conexao nao foi realizada com sucesso :'+err)
})

module.exports = sequelize

