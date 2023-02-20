
const fs = require('fs')
const dados = fs.readFileSync('./comunicacao.json')
console.log(dados.erro_cad)
const Json_dados = JSON.parse(dados)
Json_dados.erro_cad = true
fs.writeFileSync('./comunicacao.json', JSON.stringify(Json_dados)) 

