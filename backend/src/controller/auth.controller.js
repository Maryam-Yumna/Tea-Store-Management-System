let User = require('../models/User.model');
const jwt = require('jsonwebtoken');

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
        if(!User.validate(password)) return res.status(400).json({msg: 'Invalid credentials'});

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

module.exports = {
    login,
    getLoggedUser
};