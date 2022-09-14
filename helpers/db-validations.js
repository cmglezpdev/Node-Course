const Role = require('../models/role.model');
const User = require('../models/user.model');


const validRole = async (role = '') => {
    const exisistRole = await Role.findOne({ role });
    if (!exisistRole) throw new Error(`The role is not valid`); 
};

const validEmail = async ( email = '' ) => {
    const existEmail = await User.findOne({ email });
    console.log(existEmail)
    if( existEmail ) throw new Error(`The email exists`);
}


module.exports = {
    validRole,
    validEmail
}