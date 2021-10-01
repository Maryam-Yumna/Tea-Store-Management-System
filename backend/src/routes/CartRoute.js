const express = require('express');
const router = express.Router();
const Cart = require("../models/CartModel");
const auth = require("../../middleware/auth");

//Add products to the cart
router.route("/").post(auth, (req , res) =>{
    const item = req.body.item;
    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;
    const photo = req.body.photo;
    const qty = req.body.qty;
    const user = req.user.id;

    const newProduct = new Cart();

    newProduct.item = item;
    newProduct.productName = productName;
    newProduct.price = price;
    newProduct.description = description;
    newProduct.photo = photo;
    newProduct.qty = qty;
    newProduct.user = user;

    newProduct.save().then(()=> {
            res.json("product added to cart")
        }).catch((err)=>{
            console.log(err)
    });
})


//Retrieve all the cart items(useful for the report)
router.route('/allCartItems').get((req, res)=>{
    Cart.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

//Retrieve all the products in a sorted order to get items with highest prices
router.route('/sort/highest').get((req, res)=>{
    Cart.find().sort({price : -1}).limit(10).then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})

//Retrieve all the products in a sorted order to get items with lowest prices
router.route('/sort/lowest').get((req, res)=>{
    Cart.find().sort({price : 1}).limit(5).then((products)=>{
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
router.delete("/delete/:id", auth, (req, res) => {
    Cart.find({item: req.params.id, user: req.user.id})
    .then((item)=>{
        if(item){
        console.log(item);
           Cart.findByIdAndDelete(item)
           .then((deletedItem)=>{
                res.json(deletedItem);
           })
           .catch((err)=>{
                   console.log(err);
               });
        }

    })
    .catch((err)=>{
        console.log(err);
    });
});

//Update query to update the count of the products in the shopping cart
//router.put("/put/:id" , auth , (req , res) =>{
router.put("/put/:id" ,  (req , res) =>{
    const updatedItem = {
        qty : req.body.qty
    }

    Cart.findByIdAndUpdate(
        {_id : req.params.id},
        {$set : updatedItem },
        (req , res , err) => {
            if(!err){
                console.log("updated");
            }else{
                console.log(err)
            }
        }
    );
});

module.exports = router;