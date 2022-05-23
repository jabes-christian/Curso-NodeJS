// Criando o servidor http na maquina e imprimindo o texto no nav

var http = require('http')

http.createServer(function(req, res){
    res.end("Gerenciador Financeiro")
}).listen(8080)