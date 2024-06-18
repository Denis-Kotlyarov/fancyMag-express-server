const ProductsService = new (require("../services/ProductsService"))();

class ProductsController {
  getProducts = async (req, res) => {
    try {
      const products = await ProductsService.get(req.params);
      if (products) {
        return res.json(products);
      } else {
        return res.status(404).send("список не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  postProducts = async (req, res) => {
    try {
      const products = await ProductsService.post(req.body);
      return res.status(201).json(products);
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  patchProducts = async (req, res) => {
    try {
      const products = await ProductsService.patch(req.params);
      if (products) {
        if (req.body.name) {
          products.name = req.body.name;
        }
        if (req.body.description) {
          products.description = req.body.description;
        }
        if (req.body.price) {
          products.price = req.body.price;
        }

        if (req.body.popularity) {
          products.popularity = req.body.popularity;
        }

        if (req.body.seller) {
          products.seller = req.body.seller;
        }

        if (req.body.type) {
          products.type = req.body.type;
        }

        if (req.body.is_fav) {
          products.is_fav = req.body.is_fav;
        }

        if (req.body.img_url) {
          products.img_url = req.body.img_url;
        }

        await products.save();
        return res.json(products);
      } else {
        return res.status(404).send("список не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  deleteProducts = async (req, res) => {
    try {
      const products = await ProductsService.delete(req.params);
      if (products) {
        await products.destroy();
        return res.sendStatus(204);
      } else {
        return res.status(404).send("список не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
}

module.exports = ProductsController;
