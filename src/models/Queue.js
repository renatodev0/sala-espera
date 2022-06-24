const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class Queue extends Model {
  static init(sequelize) {
    super.init(
      {
        limit: Sequelize.INTEGER,
        online: Sequelize.INTEGER,
        time_update: Sequelize.INTEGER,
        total: Sequelize.INTEGER,
      },
      {
        sequelize,
        modelName: "queue",
      }
    );

    return this;
  }
}

module.exports = Queue;
