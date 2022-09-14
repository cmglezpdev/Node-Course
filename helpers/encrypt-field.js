const bcrypt = require('bcryptjs');


const encryptField = ( field ) => {
    // Encrypting password
    const salt = bcrypt.genSaltSync();
    const encrypt = bcrypt.hashSync(field, salt);
    return encrypt;
}


module.exports = {
    encryptField,
}