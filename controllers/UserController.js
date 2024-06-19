const { User } = require("../models/init");
const { UserService } = require("../services/init");

class UsersController {
  constructor() {
    this.userService = new UserService();
  }

  getAll = async (req, res) => {
    try {
      const items = await this.userService.getAll();
      const data = { status: 200, data: items };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  };

  getOne = async (req, res) => {
    try {
      const id = req.params.id;
      const item = await this.userService.getOne(id);
      const data = { status: 200, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  };

  createUser = async (req, res) => {
    try {
      const item = await this.userService.create(req.body);
      const data = { status: 201, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  };

  loginUser = async (req, res) => {
    try {
      const item = await this.userService.login(req.body);
      const data = { status: 201, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  };

  getMe = async (req, res) => {
    try {
      const item = await this.userService.getMe(req.body);
      const data = { status: 200, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(401);
    }
  };

  updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const item = await this.userService.update(id, req.body);
      const data = { status: 201, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(400);
    }
  };

  deleteUser = async (req, res) => {
    try {
      const id = req.params.id;
      const item = await this.userService.delete(id);
      const data = { status: 204, data: item };
      return res.send(data);
    } catch (error) {
      console.error(error);
      res.sendStatus(404);
    }
  };
}

module.exports = UsersController;
