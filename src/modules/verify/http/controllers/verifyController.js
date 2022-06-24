const verifyDommain = require("../../domain/index");
async function index(req, res) {
  try {
    const { id } = req.params;
    await verifyDommain.verifyUserActivity(id);
    res.status(200).send({ status: "success" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
}

module.exports = { index };
