const roomDomain = require("../../domain/index");
async function index(req, res) {
  try {
    const { id } = req.params;

    const data = await roomDomain.includeOrVerifyUser(id);

    if (data.user.status == "waiting") {
      if (data.status == "created") {
        res.redirect(`room/${data.user.id}`);
      }
      res.send("Sala de espera!");
    } else {
      res
        .writeHead(301, {
          Location: "https://www.google.com.br/",
        })
        .end();
    }
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
}

module.exports = { index };
