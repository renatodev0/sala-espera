const { waitingRoom } = require("../modules/room/http/routes");
const { verify } = require("../modules/verify/http/routes");

const routes = [waitingRoom, verify];
module.exports = { routes };
