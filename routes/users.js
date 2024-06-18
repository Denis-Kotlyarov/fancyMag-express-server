var express = require("express");
var router = express.Router();

const userController = new (require("../controllers/UserController"))();

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
