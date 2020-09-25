const { Router } = require("express");
const Category = require("../models").category;
const Product = require("../models").product;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({});
    res.json(products);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
