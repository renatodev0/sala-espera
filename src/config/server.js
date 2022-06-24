const express = require("express");
const { Router } = require("express");
const { routes } = require("../routes/index");
const database = require("../database/index");

const app = express();

app.use(express.json());

for (const group of routes.reverse()) {
  const router = Router();

  for (const route of group.routes) {
    route.middlewares = route.middlewares || [];

    const defaultHandler = (req, res) => res.status(501).send();

    router[route.method.toLowerCase()](
      route.path,
      ...route.middlewares,
      route.handler || defaultHandler
    );
  }

  const handlers = [router];
  if (group.prefix) handlers.unshift(group.prefix);

  app.use(...handlers);
}

module.exports = {
  app: app,
};
