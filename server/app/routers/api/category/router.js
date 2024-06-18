const express = require("express");

const router = express.Router();

const { browse, read } = require("../../../controllers/categoryActions");

router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
