const express = require("express");

const router = express.Router();

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const categoryRouter = require("./category/router");

router.use("/category", categoryRouter);

module.exports = router;
