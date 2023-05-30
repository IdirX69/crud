const userManager = require("../models/readUserManager");
async function deleteUserController(req, res) {
  const { status, message } = await userManager.deleteUser(req.params.id);
  return res.status(status).json(message);
}
module.exports = deleteUserController;
