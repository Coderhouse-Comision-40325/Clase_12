import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index',{}) // Por ahora solo vamos a renderizar la vista sin pasarle objetos
})

export default router