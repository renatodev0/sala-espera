"use strict";
const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("queue", {
      limit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      online: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      time_update: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("queue");
  },
};
