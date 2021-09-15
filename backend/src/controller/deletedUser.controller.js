const router = require("express").Router();
const { request } = require("express");
let DeletedUser = require('../models/DeletedUser.model');


//http://localhost:8070/DeletedUser/save
//save a new DeletedUser
const save = async(req, res)=> {

    if(req.body){
        const deletedUser = new DeletedUser(req.body);
    await deletedUser.save().then((user)=> {
          res.status(200).send(user);
          console.log("Insereted Success");
        
        }).catch((err)=>{
            console.log(err)
    })
    }

}

module.exports = {
    save
};