const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  edit,
  destroy,
  getItemApproved,
  getUserByItem,
  getItemByDate,
  getItemUnapproved,
  swapProposition,
} = require("../../../controllers/itemActions");
const { isAuth } = require("../../../services/auth");
const fileUpload = require("../../../services/fileUpload");

router.get("/all", getItemApproved);

router.get("/unapproved", getItemUnapproved);


router.get("/latest", getItemByDate);

router.get("/", browse);

router.get("/swap", isAuth, swapProposition)

router.get("/:id", read);

router.get("/:id/user", getUserByItem);

router.post("/", isAuth, fileUpload.single(`image_url`), add);

router.put("/:id", edit);

router.delete("/:id", isAuth, destroy);



module.exports = router;
