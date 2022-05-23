console.log("Gerenciador Financeiro")

var cliente = "Jabes Christian"

console.log("Cliente: " + cliente)

var valProduto = 100
var valDisconto = 37

var discontoFunc = require("./modules/calcDisconto")

var finalValue = discontoFunc(valProduto, valDisconto)

console.log("O valor final do produto R$ " + finalValue)
