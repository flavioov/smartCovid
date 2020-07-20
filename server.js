//iniciando modulos node.js - npm
const express = require('express')
const nunjucks = require('nunjucks')
// variável que vai renderizar as páginas
const server = express()

//local onde as rotas foram definidas - importação
const routes = require("./routes")

//utilizar a pasta public
/*
* o método 'use' é um midware: intercepta
* a reta entre o ponto A e o Ponto B e insere
* coisas no meio.
*
* */
server.use(express.static("public"))
server.use(routes)

// a engine vai ver os aquivos *.njk
server.set("view engine", "njk")

nunjucks.configure("views",{
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () {
    console.log("Server is runing !!")
})
