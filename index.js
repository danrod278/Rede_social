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
		if(req.body.nome!="" && req.body.idade!="" && req.body.senha!="" && req.body.username!=""){
			console.log('Nao esta vazio')
		}else{
			
		}
	}
})

app.listen(400, function(){
	console.log("No ar")
})