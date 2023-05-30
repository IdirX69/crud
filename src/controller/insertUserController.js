const userManager = require("../models/readUserManager");

async function insertUserManager(req, res) {
  const { status, message } = await userManager.createUser(req.body);
  return res.status(status).json(message);
}
module.exports = insertUserManager;
