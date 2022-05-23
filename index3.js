// Criando rotas com Express 

const express = require("express")

const app = express()

app.get("/", function(req, res){
    res.send("Gerenciador Financeiro")
})

app.get("/sobre-empresa", function(req, res){
    res.send("Pagina sobre empresa")
})

app.get("/blog", function(req, res){
    res.send("Pagina do blog")
})

app.get("/contato", function(req, res){
    res.send("Pagina de contato")
})

// localhost:3000
app.listen(3000)