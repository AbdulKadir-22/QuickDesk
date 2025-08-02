const jwt = require('jsonwebtoken');
JWT_SECRET = 'authToken';
JWT_TIMEOUT = '7d';
const tokengenerator = (id,email)=>{
    console.log("inside the token generator",id,email)
    const token = jwt.sign({id,email},JWT_SECRET,{expiresIn:JWT_TIMEOUT});
    console.log(token);
    return token;
}
const decodeToken = (token)=>{
    try {
        const decode = jwt.verify(token,JWT_SECRET);
        return decode;
    } catch (error) {
        throw new Error('Invalid Token');
    }
}
module.exports = {tokengenerator,decodeToken};