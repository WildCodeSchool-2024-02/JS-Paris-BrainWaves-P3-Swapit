const express = require("express");

const router = express.Router();

const {
    browse,
    add

} = require("../../../controllers/exchangeActions")

router.post("/", add)

router.get("/", browse);

module.exports = router;