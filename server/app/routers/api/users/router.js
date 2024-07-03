const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  edit,
  destroy,
  getItemByUser
} = require("../../../controllers/userActions");

router.get("/", browse);

router.get("/:id", read);

router.get("/:id/items", getItemByUser)

router.post("/", add);

router.put("/:id", edit);

router.delete("/:id", destroy);


module.exports = router;
