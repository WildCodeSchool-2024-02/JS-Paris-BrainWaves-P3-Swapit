const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  edit,
  destroy,
  getUserByItem,
} = require("../../../controllers/itemActions");

router.get("/", browse);

router.get("/:id", read);

router.get("/:id/user", getUserByItem)

router.post("/", add);

router.put("/:id", edit);

router.delete("/:id", destroy);

module.exports = router;
