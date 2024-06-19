const OrdersService = new (require("../services/OrdersService"))();

class OrdersController {
  getOrders = async (req, res) => {
    try {
      const orders = await OrdersService.get(req.params);
      if (orders) {
        return res.json(orders);
      } else {
        return res.status(404).send("список не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  postOrders = async (req, res) => {
    try {
      const orders = await OrdersService.post(req.body);
      return res.status(201).json(orders);
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  patchOrders = async (req, res) => {
    try {
      const orders = await OrdersService.patch(req.params);
      if (orders) {
        if (req.body.status) {
            orders.status = req.body.status;
        }
        if (req.body.sum) {
            orders.sum = req.body.sum;
        }

        await orders.save();
        return res.json(orders);
      } else {
        return res.status(404).send("список не найден");
      }
    } catch (e) {
      console.log(e);
      return res.status(400).send("что-то пошло не так");
    }
  };
  deleteOrders = async (req, res) => {
    try {
      const orders = await OrdersService.delete(req.params);
      if (orders) {
        await orders.destroy();
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

module.exports = OrdersController;