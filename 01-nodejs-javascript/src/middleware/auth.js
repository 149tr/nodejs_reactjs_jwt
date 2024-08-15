require("dotenv").config();
const jwt = require('jsonwebtoken');
const auth = (req, res, next) =>{
    const white_lists = ["/", "/register", "/login"]
    if(white_lists.find(item => '/v1/api' + item === req.originalUrl)){
        next();
    }else{
        if(req.headers && req.headers.authorization){
            const token = req.headers.authorization.split(' ')[1];
            
            // verify token
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                console.log(">>> check token: ", decoded)
                next();
            } catch (error) {
                return res.status(401).json({
                    message: "Invalid token / Token expired"
                })
            }
        }else{
            // return exception
            return res.status(401).json({
                message: "Unauthorized / Token expired"
            })
        }
    }
    

  
}
module.exports = auth;