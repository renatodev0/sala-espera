const Sequelize = require("sequelize");

const Queue = require("../models/Queue");
const Users = require("../models/User");

const databaseConfig = require("../config/database");

const models = [Queue, Users];

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.connection = new Sequelize(databaseConfig);

    const dbTest = await this.connection.query("SELECT 1 + 1 AS RESULT");
    if (dbTest) {
      console.log("Banco de dados conectado com sucesso!");
    }

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
