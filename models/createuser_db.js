const db = require('./db')
const Sequelize = require("sequelize")

//Nusuario = New usuario
const Nusuario = db.define("Usuarios", {
	nome:{
		type: Sequelize.STRING,
		allowNull:false
	},
	senha:{
		type: Sequelize.STRING,
		allowNull: false
	},
	idade:{
		type: Sequelize.INTEGER,
		allowNull:false
	}
})

module.exports = Nusuario 

Nusuario.sync({alter:true})