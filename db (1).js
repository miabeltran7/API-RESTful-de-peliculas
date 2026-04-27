import { Sequelize } from 'sequelize'

const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'peliculas.sqlite'
})

export default db