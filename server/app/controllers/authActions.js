const argon2 = require("argon2");

// Import access to database tables
const jwt = require("jsonwebtoken");
const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    
    const user = await tables.user.readByEmailWithPassword(req.body.email);

    if (user == null) {
      res.sendStatus(422);
      return;
    }
   

    const verified = await argon2.verify(user.password, req.body.password);

    if (verified) {
      const token = jwt.sign(
        { id: user.user_id, is_admin: user.is_admin },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );
      delete user.hashed_password;

      res.status(200).json({ user, token });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  login,
};