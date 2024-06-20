const express = require("express");
const router = express.Router();
//подключение валидатора
const validator = require ("../middleware/validator")

const ProductsController = new (require("../controllers/productsController"))();

router.get("/:id(\\d+)", ProductsController.getProducts);
router.post("/", validator.products, ProductsController.postProducts);
router.patch("/:id(\\d+)", validator.products, ProductsController.patchProducts);
router.delete("/:id(\\d+)", ProductsController.deleteProducts);

module.exports = router;