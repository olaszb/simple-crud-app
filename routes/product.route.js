const express = require("express")
const Product = require("../models/product.model.js")
const {getProducts, getProduct } = require("../controllers/product.controller.js")
const router = express.Router();

router.get('/', getProducts);

router.get("/:id", getProduct);

module.exports = router