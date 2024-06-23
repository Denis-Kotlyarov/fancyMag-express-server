const { Favorite, Basket, Orders } = require("../models/init");
const { StoreService } = require("../services/init");

class StoreController {
  constructor() {
    this.storeService = new StoreService();
  }

  addToFav = async (req, res) => {
    try {
      const item = await this.storeService.addToFavOrBasket(req.body, Favorite, req.user.data.id);
      const data = { status: 201, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  };

  addToBasket = async (req, res) => {
    try {
      const item = await this.storeService.addToFavOrBasket(req.body, Basket, req.user.data.id);
      const data = { status: 201, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  };

  deleteFromFav = async (req, res) => {
    try {
      const item = await this.storeService.deleteFromFavOrBasket(req.body, Favorite, req.user.data.id);
      const data = { status: 204, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  };

  deleteFromBasket = async (req, res) => {
    try {
      const item = await this.storeService.deleteFromFavOrBasket(req.body, Basket, req.user.data.id);
      const data = { status: 204, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  };

  createOrder = async (req, res) => {
    try {
      const item = await this.storeService.createOrder(req.body, req.user.data.id);
      const data = { status: 201, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  };

  refusalOrder = async (req, res) => {
    try {
      const item = await this.storeService.refusalOrder(req.body, req.user.data.id);
      const data = { status: 201, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  };

  getMyOrders = async (req, res) => {
    try {
      const item = await this.storeService.getMyOrders(req.user.data.id);
      const data = { status: 200, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  };

  //!NOT WORK
  getMyFav = async (req, res) => {
    try {
      const item = await this.storeService.getMyFav(req.user.data.id);
      const data = { status: 200, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  }
}

module.exports = StoreController;
