const userManager = require("../models/readUserManager");
async function updateUserController(req, res) {
  const { status, message } = await userManager.updateUser(req.body);
  return res.status(status).json(message);
}

module.exports = updateUserController;
