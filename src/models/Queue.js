const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Queue extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        limit: Sequelize.INTEGER,
        online: Sequelize.INTEGER,
        time_update: Sequelize.INTEGER,
        total: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: "queue",
        timestamps: false,
      }
    );

    return this;
  }
}

module.exports = Queue;
