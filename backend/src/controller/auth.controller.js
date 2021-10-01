let User = require('../models/User.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async(req, res)=> {
    
    const password = req.body.password;
    const email = req.body.email;

    if(!email || !password){
        return res.status(400).json({msg: 'Please enter all feilds'});
    }

    await User.findOne({email})
    .then(user=>{
        if(!user) return res.status(400).json({msg: 'User does not exist'});

        //vaidate password
        if(bcrypt.compareSync(password, user.password)) {
            
            jwt.sign(
                {id: user._id, userType: user.userType}, 'jwtSecret', {expiresIn: '1d'},
                (err, token)=>{
                    if(err) throw err;
                    res.json({
                        user,
                        token,
                        message: "success"
                    });
                }
            )
        }else{
            return res.status(400).json({msg: 'Invalid credentials'});
        }

        
        
    })
    .catch((err)=>{
            console.log(err);
    })  
}

const getLoggedUser = async(req, res)=>{
    await User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
    .catch((err)=>{
        console.log(err)
})
}

const updateUser = async(req, res)=>{

    const update = {
            firstName: req.body.firstName, 
            lastName: req.body.lastName, 
            address: req.body.address
        };

        User.findOneAndUpdate({_id: req.user.id}, update,{new: true})
        .then((user)=>{
            res.json({message:"user details updated", user: user});
        })
        .catch((err)=>{
            console.error(err);
        })

}

module.exports = {
    login,
    getLoggedUser,
    updateUser
};