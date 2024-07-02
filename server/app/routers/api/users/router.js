const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  edit,
  destroy,
} = require("../../../controllers/userActions");

const { hashPassword } = require("../../../services/auth");
const validateData = require("../../../services/dataValidator");
const userSchema = require("../../../services/validatorSchemas/user")

router.get("/", browse);

router.get("/:id", read);

router.post("/", validateData(userSchema),hashPassword,   add);

const authActions = require("../../../controllers/authActions");


router.post("/login", authActions.login,);

router.put("/:id", edit);

router.delete("/:id", destroy);


module.exports = router;
