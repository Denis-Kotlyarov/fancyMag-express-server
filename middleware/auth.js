require("dotenv").config();

const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_REFRESH } = process.env;

const auth = (req, res, next) => {
  try {
    const authHeader = req.get("authorization");
    const access_token = authHeader.split(" ")[1];
    const user = jwt.verify(access_token, JWT_SECRET);

    if (user) {
      console.log(user);
      req["user"] = user;
      next();
    } else {
      return res.status(401).json({
        error: "Not auth",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      error: "Not auth",
    });
  }
};

module.exports = auth;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjo4LCJmaXJzdF9uYW1lIjoiVmVkYWwiLCJsYXN0X25hbWUiOiI4NjQiLCJlbWFpbCI6Imdvb2dsZUBtYWlsLmNvbSJ9LCJpYXQiOjE3MTg3ODcwNjEsImV4cCI6MTcxODc5MDY2MX0.d5jcTQjbTy9fioKn7mze0AjTDstVe3jYkw3aOcw7hbM
