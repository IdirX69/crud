const qs = require("qs");
const readUserManager = require("../models/readUserManager");

async function readUserController(req, res) {
  const { status, message } = !req.query
    ? await readUserManager.fetchAllUser()
    : await readUserManager.fetchAllUser(qs.parse(req.query));
  return res.status(status).json(message);
}
module.exports = readUserController;
