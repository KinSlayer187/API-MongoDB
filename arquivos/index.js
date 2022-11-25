//config inicial
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
    //Forma de ler JSON / middleawers
app.use(morgan("dev"))
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
    //Rotas da API
const personRoutes = require("./routes/personRoutes.js")
app.use("/person", personRoutes)
    //Rota inicial / endpoint
app.get("/", (req, res) => {
        try {
            return res.json({ message: "Pão de queijo" }).status(200)
        } catch (error) {
            console.log(error)
        }
        return res.json({ message: 'Oi Express!' })
    })
    //Entregar uma porta
const DB_user = "KinSlayer11"
const DB_password = encodeURIComponent("metallica_86")
mongoose.connect(
        `mongodb+srv://${DB_user}:${DB_password}@cluster0.fqseyoi.mongodb.net/bancodaapi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        app.listen(3000)
    })
    .catch((err) => console.log(err))