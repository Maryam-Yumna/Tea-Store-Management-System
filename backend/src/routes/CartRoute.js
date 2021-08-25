const express = require('express');
const router = express.Router();
const Cart = require("../models/CartModel");

//Add products to the cart
router.route("/").post((req , res) =>{
    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;
    const photo = req.body.photo;

    const newProduct = new Cart();

    newProduct.productName = productName;
    newProduct.price = price;
    newProduct.description = description;
    newProduct.photo = photo;

    newProduct.save().then(()=> {
            res.json("product added to cart")
        }).catch((err)=>{
            console.log(err)
    });
})


//retrieve the products which are added to the cart
router.route('/').get((req, res)=>{
    Cart.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

//delete a product from the cart
router.delete("/delete/:id", (req, res) => {
  Cart.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json(deletedItem);
  });
});

module.exports = router;