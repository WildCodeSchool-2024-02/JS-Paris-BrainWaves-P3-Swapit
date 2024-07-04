const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  edit,
  destroy,
  getItemWithUser,
} = require("../../../controllers/itemActions");

router.get("/all", getItemWithUser);

router.get("/", browse);

router.get("/:id", read);

router.post("/", add);

router.put("/:id", edit);

router.delete("/:id", destroy);

module.exports = router;
