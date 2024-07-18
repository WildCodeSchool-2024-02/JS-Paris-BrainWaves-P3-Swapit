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
      const accessToken = jwt.sign(
        { id: user.user_id, is_admin: user.is_admin },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );

      const refreshToken = jwt.sign(
        { id: user.user_id, is_admin: user.is_admin },
        process.env.APP_SECRET,
        { expiresIn: "1d" }
      );

      delete user.hashed_password; // Suppression du mot de passe avant de renvoyer l'utilisateur

      res.status(200)
        .header("Authorization", accessToken)
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "none",
          expires: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1),
        })
        .json({
          user
        });
    } else {
      res.status(400).json({ error: "wrong credentials" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
};
