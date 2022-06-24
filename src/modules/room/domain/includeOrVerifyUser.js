const User = require("../../../models/User");
const { v4 } = require("uuid");
const verifyQueueStatus = require("../../verify/domain/verifyQueue");
const incrementQueue = require("../../verify/domain/incrementeQueue");

async function includeOrVerifyUser(id = false) {
  try {
    let data = {};
    const status = await verifyQueueStatus();
    if (id) {
      const user = await User.findByPk(id);
      if (user) {
        const updatedUser = await User.update(
          { last_interaction: new Date().toISOString() },
          { where: { id: id }, returning: true }
        );

        data.user = updatedUser[1][0].dataValues;
        data.status = "updated";
      } else {
        throw new Error("erro ao verificar usuário");
      }
    } else {
      const createdUser = await User.create({
        id: v4(),
        status,
        last_interaction: new Date().toISOString(),
      });

      if (status == "online") {
        await incrementQueue({ online: 1, total: 1 });
      } else if (status == "waiting") {
        await incrementQueue({ total: 1 });
      }
      data.user = createdUser.dataValues;
      data.status = "created";
    }

    return data;
  } catch (err) {
    throw new Error("erro ao verificar usuário");
  }
}

module.exports = includeOrVerifyUser;
