const bcrypt = require('bcrypt');
const encryptPassword = async (password)=>{
    console.log("ecryptedPassword");
    console.log("password",password);
    const ecryptedPassword = await bcrypt.hash(password,10);
    return ecryptedPassword;
}
const comparePassword = async(password,encryptedPassword)=>{
    // console.log("compatePassword");
    const checkedPassword = await bcrypt.compare(password,encryptedPassword);
    console.log("checkedPassword: ",checkedPassword);
    return checkedPassword;
}
module.exports = {encryptPassword,comparePassword};