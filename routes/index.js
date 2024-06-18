const express = require("express");
const router = express.Router();
const ProductsController = new (require("../controllers/productsController"))();

router.get("/products/:id(\\d+)", ProductsController.get);
router.post("/products", ProductsController.post);
router.patch("/products/:id(\\d+)", ProductsController.patch);
router.delete("/products/:id(\\d+)", ProductsController.delete);

module.exports = router;