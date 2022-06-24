const Queue = require("../../../models/Queue");
const User = require("../../../models/User");
const incrementQueue = require("./incrementeQueue");

async function verifyUserActivity(id = null) {
  try {
    const queue = await Queue.findAll();
    const queueData = queue[0].dataValues;

    const user = await User.findByPk(id);
    const userData = user.dataValues;

    const now = new Date();
    const lastInteraction = new Date(userData.last_interaction);

    const secondsDiff = Math.abs(now - lastInteraction) / 1000;

    if (secondsDiff > queueData.time_update) {
      await User.destroy({ where: { id: id } });
      if (userData.status == "online") {
        const oldUser = await User.findOne({
          where: { status: "waiting" },
          order: [["last_interaction", "ASC"]],
        });

        if (oldUser) {
          await incrementQueue({ total: -1 });

          await User.update(
            { status: "online" },
            { where: { id: oldUser.dataValues.id } }
          );
        } else {
          await incrementQueue({ online: -1, total: -1 });
        }
      } else if (userData.status == "waiting") {
        await incrementQueue({ total: -1 });
      }
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = verifyUserActivity;
