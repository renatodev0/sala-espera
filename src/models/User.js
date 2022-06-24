const Sequelize = require("sequelize");
const { Model } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        last_interaction: Sequelize.DATE,
        status: Sequelize.STRING,
      },
      {
        sequelize,
        modelName: "user",
        timestamps: false,
      }
    );

    return this;
  }
}

module.exports = User;
