const Product = require("../models/Product.model");

const addNewProduct = async (req, res) => {
  if (req.body) {
    const product = new Product(req.body);
    await product
      .save()
      .then((data) => {
        res.status(200).send(data);
        console.log("Insereted Success");
      })
      .catch((err) => {
        res.status(500).send({ error: err.message });
      });
  }
};

const getAllProducts = async (req, res) => {
  await Product.find()
    .then((data) => {
      res.status(200).send(data);
      console.log("Success");
    })
    .catch((err) => {
      res.status(500).send({ error: err.message });
    });
};

const getProducteByID = async (req, res) => {
  const id = req.params.id;
  await Product.findById(id)
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get product", error: err.message });
    });
};

const updateProduct = async (req, res) => {
  let productId = req.params.id;
  const {
    productName,
    price,
    description,
    category,
    availability,
    quantity,
    photo,
    deliverywithin,
  } = req.body;

  const updateProduct = {
    productName,
    price,
    description,
    category,
    availability,
    quantity,
    photo,
    deliverywithin,
  };

  const update = Product.findByIdAndUpdate(productId, updateProduct)
    .then(() => {
      res.status(200).send({ status: "item updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with updating " });
    });
};

const deleteProduct = async (req, res) => {
  let itemId = req.params.id;
  await Product.findByIdAndDelete(itemId)
    .then(() => {
      res.status(200).send({ status: "item deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "error with deleting" });
    });
};

const getProducteByCategory = async (req, res) => {
  let category = req.params.category;
  Product.find({ category: category }, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(docs);
    }
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = {
  addNewProduct,
  getAllProducts,
  getProducteByID,
  updateProduct,
  deleteProduct,
  getProducteByCategory,
};
