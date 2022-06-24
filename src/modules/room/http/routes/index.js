const roomController = require("../controllers/roomController");

const waitingRoom = {
  scope: "waitingRoom",
  prefix: "/",
  routes: [
    {
      method: "GET",
      path: "/",
      description: "Include or verify user in queue",
      middlewares: [],
      handler: roomController.index,
    },
  ],
};

module.exports = {
  waitingRoom,
};
