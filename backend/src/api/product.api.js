const express = require("express");
const router = express.Router();
const controller = require("../controller/product.controller");

module.exports = function () {
  router.post("/newProduct", controller.addNewProduct);
  router.get("/", controller.getAllProducts);
  router.get("/:id", controller.getProducteByID);
  router.get("/getCategory/:category", controller.getProducteByCategory);
  router.put("/updateProduct/:id", controller.updateProduct);
  router.delete("/deleteProduct/:id", controller.deleteProduct);

  return router;
};
