const express = require("express");
const router = express.Router();
// const ProductsController = new (require("../controllers/productsController"))();
const OrdersController = new (require("../controllers/OrdersController"))();

// router.get("/products/:id(\\d+)", ProductsController.getProducts);
// router.post("/products", ProductsController.postProducts);
// router.patch("/products/:id(\\d+)", ProductsController.patchProducts);
// router.delete("/products/:id(\\d+)", ProductsController.deleteProducts);

router.get("/orders/:id(\\d+)", OrdersController.getOrders);
router.post("/orders", OrdersController.postOrders);
router.patch("/orders/:id(\\d+)", OrdersController.patchOrders);
router.delete("/orders/:id(\\d+)", OrdersController.deleteOrders);

module.exports = router;