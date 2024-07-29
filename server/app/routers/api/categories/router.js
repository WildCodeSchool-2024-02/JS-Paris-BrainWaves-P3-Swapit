const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  readItemByCategory,
} = require("../../../controllers/categoryActions");

router.get("/", browse);

router.get("/:id", read);

router.get("/:id/items", readItemByCategory);

module.exports = router;
