const jwt =  require('../helper/JwtToken');
const User = require("../models/user.model");

const authenticate = async(req,res,next)=>{
    try {
        console.log("user Authentication middleware");
        const token = req.headers.authorization?.split(" ")[1] ;
        if(!token){
            return res.status(404).send({error:"Token not found!"})
        }
        console.log(token);
        const decode = jwt.decodeToken(token);
        const user = await User.findById(decode.id);
        req.user = user;
        console.log(user)
        next();
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:"Internal server error",
            error:error.message
        });
    }
}
module.exports= {authenticate};