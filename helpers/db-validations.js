const Role = require('../models/role.model');
const User = require('../models/user.model');


const validRole = async ( role ) => {
    const exisistRole = await Role.findOne({ role });
    if (!exisistRole) throw new Error(`The role is not valid`); 
};

const validEmail = async ( email ) => {
    const existEmail = await User.findOne({ email });
    if( existEmail ) throw new Error(`The email exists`);
}

const validExistUserById = async ( id ) => {
    const existUser = await User.findById(id);
    if( !existUser ) throw new Error(`The user no exists`);
}


module.exports = {
    validRole,
    validEmail,
    validExistUserById
}