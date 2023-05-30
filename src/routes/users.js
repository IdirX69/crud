const express = require("express");
const router = express.Router();
const readUserController = require("../controller/readUserController");
const insertuserManager = require("../controller/insertUserController");
const updatetuserManager = require("../controller/updateUserController");
const deletetuserManager = require("../controller/deleteUserController");

/* GET : fetch all users . */
router.get("/", readUserController);

router.post("/", insertuserManager);
router.put("/", updatetuserManager);
router.delete("/:id", deletetuserManager);

module.exports = router;
