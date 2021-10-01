const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model");

//Retrieve the products
router.route("/").get((req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

//Retrieve a single product
//?id=${productId}&type=single
router.route("/products_by_id").get((req, res) => {
  let type = req.query.type;
  let productIds = req.query.id;

  console.log("req.query.id", req.query.id);

  if (type === "array") {
    let ids = req.query.id.split(",");
    productIds = [];
    productIds = ids.map((item) => {
      return item;
    });
  }

  console.log("productIds", productIds);

  //Find the product information belongs to a product id
  Product.find({ _id: { $in: productIds } })
    .populate("writer")
    .exec((err, product) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(product);
    });
});

module.exports = router;
