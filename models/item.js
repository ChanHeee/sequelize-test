const Sequelize = require("sequelize")

module.exports = class Item extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        quantity: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: false,
        modelName: "Item",
        tableName: "items",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    )
  }
}
