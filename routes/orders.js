const express = require("express");
const router = express.Router();
const OrdersController = new (require("../controllers/OrdersController"))();
//подключение валидатора
const validator = require ("../middleware/validator")

router.get("/:id(\\d+)", OrdersController.getOrders);
router.post("/", validator.orders, OrdersController.postOrders);
router.patch("/:id(\\d+)", validator.orders, OrdersController.patchOrders);
router.delete("/:id(\\d+)", OrdersController.deleteOrders);

module.exports = router;