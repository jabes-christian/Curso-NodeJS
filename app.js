// Criando rotas com Express 

const express = require("express")

const app = express()

app.get("/", function(req, res){
    res.sendFile(__dirname + "/src/index.html")
})

app.get("/sobre-empresa", function(req, res){
    res.sendFile(__dirname + "/src/sobre-empresa.html")
})

app.get("/blog", function(req, res){
    res.sendFile(__dirname + "/src/blog.html")
})

app.get("/contato", function(req, res){
    res.sendFile(__dirname + "/src/contato.html")
})

// localhost:3000
app.listen(3000)