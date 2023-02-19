const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const Nusuario = require('./models/createuser_db')
var URLencodesParser = bodyParser.urlencoded({extended:false})


app.get("/login", function(req, res){
	res.sendFile(__dirname+"/html/login.html")
})

app.get('/createaccount', function(req, res){
	res.sendFile(__dirname+"/html/create_account.html")
	
})

app.post('/checar/:tipo', URLencodesParser, function(req, res){
	if(req.params.tipo=="login"){
		console.log("login")
	}
	if(req.params.tipo=="cadastro"){
		Nusuario.create({
			nome:req.body.nome,
			senha: req.body.senha,
			idade:parseInt(req.body.idade)
		})

		console.log(req.body.nome+", "+req.body.senha+", "+req.body.idade)
	}
})

app.listen(400, function(){
	console.log("No ar")
})