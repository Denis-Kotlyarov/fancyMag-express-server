const express = require("express");
const router = express.Router();

const ProductsController = new (require("../controllers/productsController"))();

router.get("/:id(\\d+)", ProductsController.getProducts);
router.post("/", ProductsController.postProducts);
router.patch("/:id(\\d+)", ProductsController.patchProducts);
router.delete("/:id(\\d+)", ProductsController.deleteProducts);

module.exports = router;