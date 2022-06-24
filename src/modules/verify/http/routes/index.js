const verifyController = require("../controllers/verifyController");

const verify = {
  scope: "waitingRoom",
  prefix: "/verify",
  routes: [
    {
      method: "POST",
      path: "/:id?",
      description: "verify user activity",
      middlewares: [],
      handler: verifyController.index,
    },
  ],
};

module.exports = {
  verify,
};
