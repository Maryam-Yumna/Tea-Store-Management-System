const express = require('express');
const router = express.Router();
const Cart = require("../models/CartModel");
const auth = require("../../middleware/auth");

//Add products to the cart
router.route("/").post(auth, (req , res) =>{
    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;
    const photo = req.body.photo;
    const count = req.body.count;
    const user = req.user.id;

    const newProduct = new Cart();

    newProduct.productName = productName;
    newProduct.price = price;
    newProduct.description = description;
    newProduct.photo = photo;
    newProduct.count = count;
    newProduct.user = user;

    newProduct.save().then(()=> {
            res.json("product added to cart")
        }).catch((err)=>{
            console.log(err)
    });
})


//Retrieve all the products which are added to the cart
router.route('/').get((req, res)=>{
    Cart.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

//Retrieve all the products which are added to the cart according to the user who logged in
router.route('/user').get(auth, (req, res)=>{
    Cart.find({user: req.user.id}).then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

//Delete a product from the cart
router.delete("/delete/:id", (req, res) => {
  Cart.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
    if (error) {
      res.send(error);
    }
    return res.json(deletedItem);
  });
});

module.exports = router;