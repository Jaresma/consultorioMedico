require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

const usuarioRouter = require('./routes/usuarios')
const citasRouter = require('./routes/citas')
const medicosRouter = require('./routes/medicos')

app.use('/usuarios', usuarioRouter)
app.use('/citas', citasRouter)
app.use('/medicos', medicosRouter)

app.listen(PORT, () => {
  console.info(`App listening on port ${PORT}`)
})

module.exports = app
