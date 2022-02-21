const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler( 
    async (req, res, next) => { //next because it's a middleware
        let token
        // in http haeder we have authorization object
        // be cz when the token is sent in the authorization header in format Bearer sdgkhfjg
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            try {
                // get token from header
                token = req.headers.authorization.split(' ')[1]
               
                // verify token
                const decoded = jwt.verify( token, process.env.JWT_SECRET)
                // Get user from the token: cz token has user id as a payload we also want to asign it to req.user so that we can access req.user in any rout that's protected
                // 
                req.user =  await User.findById(decoded.id).select('-password')// it's a user that authenticated
                // where decoded.id we can put decoded.  any you want depend on  Generate JWT sing { id, name age ....} and only on rout /me?id
                next()
            } catch (error) {
                console.log(error)
                res.status(401)
                throw new Error('Not authorize')
            }
    } 
    if(!token){
        res.status(401)
        throw new Error('Not authorize, no token')
    }
  }
)

module.exports = { protect }