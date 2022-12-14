const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.createToken= (user) =>{
    return jwt.sign({
        userId: user._id,
        email: user.email,
        role: user.role
    }, process.env.SECRET, {expiresIn: '24h'}).split('.')
}

exports.verifyToken = (req, res, next) =>{
    const {token}  = req.params
    if(token === undefined) return res.status(401).json({msg: 'Unauthorized'})
    if(!token) return res.status(401).json({msg: 'Unauthorized'})
    jwt.verify(`${token}`, process.env.SECRET, (err, decoded)=>{
        if(err) return res.status(401).json({msg: 'Unauthorized'})
        User.findById(decoded.userId)
            .then(user => {
                req.user = user
                next()
            })
            .catch(err => {
                res.status(401).json({err})
                next()
            })
    })
}