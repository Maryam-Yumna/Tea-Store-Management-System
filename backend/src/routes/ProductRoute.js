const express = require("express");
const router = express.Router();
const Product = require("../models/Product.model");

//creating a new note and insert it into the database
router.route("/").post((req, res) => {
  const productName = req.body.productName;
  const price = req.body.price;
  const description = req.body.description;

  const newProduct = new Product();

  newProduct.productName = productName;
  newProduct.price = price;
  newProduct.description = description;

  newProduct
    .save()
    .then(() => {
      res.json("product added ");
    })
    .catch((err) => {
      console.log(err);
    });
});

//retrieve the products
router.route("/").get((req, res) => {
  Product.find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

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

  //find the product information belongs to a product id
  Product.find({ _id: { $in: productIds } })
    .populate("writer")
    .exec((err, product) => {
      if (err) return req.status(400).send(err);
      return res.status(200).send(product);
    });
});

module.exports = router;
