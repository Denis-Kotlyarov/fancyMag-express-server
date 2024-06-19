const express = require("express");
const router = express.Router();

const ProductsController = new (require("../controllers/productsController"))();

router.get("/products/:id(\\d+)", ProductsController.getProducts);
router.post("/products", ProductsController.postProducts);
router.patch("/products/:id(\\d+)", ProductsController.patchProducts);
router.delete("/products/:id(\\d+)", ProductsController.deleteProducts);

module.exports = router;