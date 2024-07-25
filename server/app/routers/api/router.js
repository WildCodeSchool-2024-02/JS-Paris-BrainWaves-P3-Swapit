const express = require("express");

const router = express.Router();

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const categoriesRouter = require("./categories/router");

router.use("/categories", categoriesRouter);

const exchangesRouter = require("./exchanges/router")

router.use("/exchanges", exchangesRouter)

const transactionsRouter = require("./transactions/router")

router.use("/transactions", transactionsRouter)


module.exports = router;
