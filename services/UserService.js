require("dotenv").config();

const { User } = require("../models/init");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;
function createTokens(payload) {
  const access_token = jwt.sign({ data: payload }, JWT_SECRET, {
    expiresIn: "1h",
  });
  const refresh_token = jwt.sign({ data: payload }, JWT_SECRET, {
    expiresIn: "30d",
  });
  const data = {
    user: payload,
    access_token: access_token,
    refresh_token: refresh_token,
  };

  return data;
}

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
      const created_user = await User.create({ ...data, password });
      const user = await User.scope("withOutPassword").findByPk(
        created_user.id
      );
      const data = createTokens(user);
      return data;
    } catch (error) {
      throw error;
    }
  };

  login = async (data) => {
    try {
      const email = data.email;
      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        throw new Error("Not auth");
      } else {
        const password = crypto
          .createHash("sha256")
          .update(data.password)
          .digest("hex");
        if (password === user.password) {
          const user_outPassword = await User.scope("withOutPassword").findByPk(
            user.id
          );
          const data = createTokens(user_outPassword);
          return data;
        } else {
          throw new Error("Wrong password");
        }
      }
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
