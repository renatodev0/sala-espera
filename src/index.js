const { app } = require("./config/server");
const dotenv = require("dotenv");
dotenv.config();

const host = process.env.APP_HOST;
const port = process.env.APP_PORT;

app.listen(port, host, () => {
  console.log("\n");
  console.log(`${process.env.APP_NAME}`);
  console.log(`Rodando em http://${host}:${port}`);
  console.log(`Versão ${process.env.APP_VERSION}`);
});
