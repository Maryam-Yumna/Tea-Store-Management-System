const express = require('express');
const router = express.Router();
const Cart = require("../models/CartModel");
const auth = require("../../middleware/auth");

//Add products to the cart
router.route("/").post(auth, (req , res) =>{
//router.route("/").post( (req , res) =>{
//    const _id = req.body._id;
    const item = req.body.item;
    const productName = req.body.productName;
    const price = req.body.price;
    const description = req.body.description;
    const photo = req.body.photo;
    const qty = req.body.qty;
    const user = req.user.id;

    const newProduct = new Cart();

//    newProduct._id = _id;
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


//Retrieve all the products which are added to the cart
/*router.route('/').get((req, res)=>{
    Cart.find().then((products)=>{
        res.json(products)
    }).catch((err)=>{
        console.log(err)
    })
})*/

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
//router.delete("/delete/:id", (req, res) => {
//  Cart.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
//    if (error) {
//      res.send(error);
//    }
//    return res.json(deletedItem);
//  });
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
//               return res.json(deletedItem);

        }

    })
    .catch((err)=>{
        console.log(err);
    });

//    Cart.findByIdAndRemove(req.params.id).exec((error, deletedItem) => {
//        if (error) {
//          res.send(error);
//        }
//        return res.json(deletedItem);
//    });
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