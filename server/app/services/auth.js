const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    const hashedPassword = await argon2.hash(password);

    req.body.hashedPassword = hashedPassword;

    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

const isAuth = async (req, res, next) => {
  try {
    const authorization = req.get("Authorization");

    if (!authorization) throw new Error("authorization key is missing");

    const [type, token] = authorization.split(" ");

    if (type !== "Bearer")
      throw new Error("Authorization type should be Bearer");

    const decoded = jwt.verify(token, process.env.APP_SECRET);

    req.auth = decoded;

    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  isAuth,
};
