const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  edit,
  destroy,
  getItemWithUser,
  getUserByItem,
  getItemByDate,
} = require("../../../controllers/itemActions");
const { isAuth } = require("../../../services/auth");
const fileUpload = require("../../../services/fileUpload");

router.get("/all", getItemWithUser);

router.get("/latest", getItemByDate);

router.get("/", browse);

router.get("/:id", read);

router.get("/:id/user", getUserByItem);

router.post("/", isAuth, fileUpload.single(`image_url`), add);

router.put("/:id", edit);

router.delete("/:id", destroy);

module.exports = router;
