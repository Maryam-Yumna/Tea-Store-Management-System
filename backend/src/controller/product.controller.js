const Product = require('../models/Product.model');

const addNewProduct = async(req, res)=>{
    if(req.body){
        const product = new Product(req.body);
        await product.save()
        .then((data) => {
            res.status(200).send(data)
            console.log("Insereted Success")
        }).catch((err) => {
            res.status(500).send({error: err.message})
        });
    }
}

const getAllProducts = async(req, res)=>{
    
    await Product.find()
    .then((data) => {
        res.status(200).send(data)
        console.log("Success")
    }).catch((err) => {
        res.status(500).send({error: err.message})
    });
    
}

const getProducteByID = async(req, res)=>{
    const id = req.params.id;
    await Product.findById(id)
    .then((product)=>{
        res.status(200).send(product)
    }).catch((err)=>{
        res.status(500).send({status: "Error with get product", error:err.message});
    })
}

const updateProduct = async(req, res)=>{

    const update = {type: req.body.type, 

                    name: req.body.name,
                    price: req.body.price,
                    description: req.body.description,
                    category: req.body.category,
                    availability: req.body.availability,
                    quantity: req.body.quantity,
                    photo: req.body.photo,
                    deliverywithin: req.body.deliverywithin,

                    };

    Product.findOneAndUpdate({_id: req.body.id}, update,{new: true})
    .then((product)=>{
        res.json({message:"product details updated", _product: product});
    })
    .catch((err)=>{
        console.error(err);
    })
   
}

module.exports = {
    addNewProduct,
    getAllProducts,
    getProducteByID,
    updateProduct
   
};