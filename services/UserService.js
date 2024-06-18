const { User } = require("../models/init");
const crypto = require("crypto");

class UserService {
  getAll = async () => {
    try {
      // const items = await User.findAll();filters = {}
      return await User.findAll();
    } catch (error) {
      throw error;
    }
  };

  getOne = async (id) => {
    try {
      const item = await User.findByPk(id);
      if (item) {
        return item;
      } else {
        throw new Error("Not founded");
      }
    } catch (error) {
      throw error;
    }
  };

  create = async (data) => {
    try {
      const password = crypto
        .createHash("sha256")
        .update(data.password)
        .digest("hex");
      return await User.create({ ...data, password });
    } catch (error) {
      throw error;
    }
  };

  update = async (id, data) => {
    try {
      if (data.password) {
        const password = crypto
          .createHash("sha256")
          .update(data.password)
          .digest("hex");
        data.password = password;
      }
      await User.update(data, {
        where: {
          id: id,
        },
      });
      return "OK";
    } catch (error) {
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const item = await User.findByPk(id);
      if (item) {
        item.destroy();
        return "OK";
      } else {
        throw new Error("Not founded");
      }
    } catch (error) {
      throw error;
    }
  };
}

module.exports = UserService;
