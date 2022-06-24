"use strict";
const sequelize = require("sequelize");
const { v4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: v4(),
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      last_interaction: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
