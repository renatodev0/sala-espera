const Queue = require("../../../models/Queue");

async function verifyQueueStatus() {
  try {
    const queue = await Queue.findAll();
    const queueData = queue[0].dataValues;

    if (queueData.online >= queueData.limit) {
      return "waiting";
    } else {
      return "online";
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = verifyQueueStatus;
