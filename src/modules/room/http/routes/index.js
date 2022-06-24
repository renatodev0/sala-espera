const roomController = require("../controllers/roomController");

const waitingRoom = {
  scope: "waitingRoom",
  prefix: "/room",
  routes: [
    {
      method: "GET",
      path: "/:id?",
      description: "Include or verify user in queue",
      middlewares: [],
      handler: roomController.index,
    },
  ],
};

module.exports = {
  waitingRoom,
};
