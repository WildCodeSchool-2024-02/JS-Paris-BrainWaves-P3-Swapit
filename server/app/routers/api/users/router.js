const express = require("express");

const router = express.Router();

const { browse, read , add, edit, destroy} = require("../../../controllers/userActions");

router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

// Route to add a new item
router.post("/", add);

// Route to edit a specific item by ID
router.put("/:id", edit); 

router.delete("/:id", destroy)
/* ************************************************************************* */

module.exports = router;
