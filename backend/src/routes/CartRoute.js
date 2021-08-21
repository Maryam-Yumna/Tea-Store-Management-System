const express = require('express');
const router = express.Router();
const Cart = require("../models/CartModel");

//creating a new note and insert it into the database
router.route("/").post((req , res) =>{
    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;

    const newProduct = new Cart();

    newProduct.productName = productName;
    newProduct.price = price;
    newProduct.description = description;

    newProduct.save().then(()=> {
            res.json("product added to cart")
        }).catch((err)=>{
            console.log(err)
    });
})


//retrieve the products
router.route('/').get((req, res)=>{
    Cart.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;