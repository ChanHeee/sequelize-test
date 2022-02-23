const Sequelize = require("sequelize")
const Item = require("./item")

const config = require("../config/config")["development"]
const db = {}

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

db.sequelize = sequelize

db.Item = Item

Item.init(sequelize)

module.exports = db
