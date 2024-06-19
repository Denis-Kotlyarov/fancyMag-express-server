const express = require("express");
const router = express.Router();
// const ProductsController = new (require("../controllers/productsController"))();
const OrdersController = new (require("../controllers/OrdersController"))();

// router.get("/products/:id(\\d+)", ProductsController.getProducts);
// router.post("/products", ProductsController.postProducts);
// router.patch("/products/:id(\\d+)", ProductsController.patchProducts);
// router.delete("/products/:id(\\d+)", ProductsController.deleteProducts);

router.get("/:id(\\d+)", OrdersController.getOrders);
router.post("/", OrdersController.postOrders);
router.patch("/:id(\\d+)", OrdersController.patchOrders);
router.delete("/:id(\\d+)", OrdersController.deleteOrders);

module.exports = router;