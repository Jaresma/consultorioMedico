const factoryGirl = require('factory-girl')
const adapter = new factoryGirl.SequelizeAdapter()
const factory = factoryGirl.factory
factory.setAdapter(adapter)

factory.cleanUp()

const db = require('../../src/models')

factory.define('Usuarios', db.Usuarios, async () => {
  const attrs = {
    id: factory.seq('Usuarios.id'),
    correo: factory.seq('User.email', (n) => `user${n}@ymail.com`),
    clave: factory.chance('sentence', { words: 5 }),
  }
  return attrs
})
//citas
factory.define('Citas', db.Citas, async () => {
  const attrs = {
    id: factory.seq('Citas.id'),
    title: factory.seq('Citas.title'),
    pacient_id: factory.seq('Citas.pacient_id'),
  }
  return attrs
})
//medicos
factory.define('Medicos', db.Citas, async () => {
  const attrs = {
    id: factory.seq('Medicos.id'),
    lastname: factory.seq('Medicos.lastname'),
    is_active: factory.seq('Medicos.is_active'),
  }
  return attrs
})
module.exports = factory
