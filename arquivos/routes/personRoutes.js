const router = require("express").Router()
const Person = require('../models/Person.js')
    //Criação de dados

router.get("/", async(req, res) => {
    res.json({ message: "Teste" })
    return
})
router.post("/", async(req, res) => {
        //req body
        //{name: "João Ricardo", salary: 5000, approved: false}
        const { name, salary, approved } = req.body
        const person = {
            name,
            salary,
            approved
        }
        if (!name) {
            res.status(422).json({ error: 'O nome é obrigantório!' })
            return
        }
        try {
            await Person.create(person)
            res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
        } catch (error) {
            res.status(500).json({ error: error })
        }
    })
    //Leitura de dados
router.get("/:id", async(req, res) => {
        //Extrair os dados da requisição pela url = req.params
        const id = req.params.id
        try {
            const person = await Person.findOne({ _id: id })
            if (!person) {
                res.status(422).json({ message: "O usuário não foi encontrado." })
                return
            }
            res.status(200).json(people)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    })
    //Atualização de dados
router.patch("/:id", async(req, res) => {
        const id = req.params.id
        const { name, salary, approved } = req.body
        const person = {
            name,
            salary,
            approved
        }
        try {
            const updaterPerson = await Person.updateOne({ _id: id }, person)
            res.status(200).json(person)
            if (updaterPerson.matchedCount === 0) {
                res.status(422).json({ message: "O usuário não foi encontrado." })
                return
            }
        } catch (error) {
            res.status(500).json({ error: error })
        }
    })
    //Deletar dados
router.delete("/:id", async(req, res) => {
    const id = req.params.id
    const person = await Person.findOne({ _id: id })
    if (!person) {
        res.status(422).json({ error: 'O nome é obrigatório!' })
        return
    }
    try {
        await Person.deleteOne({ _id: id })
        res.status(200).json({ message: "Usuário removido com sucesso!" })
    } catch (error) {
        res.status(422).json({ error: error })
        return
    }
})
module.exports = router