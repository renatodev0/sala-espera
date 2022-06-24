const Queue = require("../../../models/Queue");

async function incrementeQueue(params) {
  try {
    const queue = await Queue.findOne();

    await queue.increment(params);
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = incrementeQueue;
