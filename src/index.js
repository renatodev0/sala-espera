const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

app.get("/", (req, res) => {
  res.send("Inicio da sala de espera!");
});

app.listen(port, host, () => {
  console.log("\n");
  console.log(`${process.env.APP_NAME}`);
  console.log(`Rodando em http://${host}:${port}`);
  console.log(`Versão ${process.env.APP_VERSION}`);
});
