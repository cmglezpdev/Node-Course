const { response, request } = require('express');
const User = require('../models/user.model');
const { encryptField } = require('../helpers/encrypt-field')

const usersGet = async (req = request, res = response) => {

    const { from = 0, limit = 5 } = req.query;
    const query = { state: true };

    const [users, count] = await Promise.all([
        User.find(query).skip(from).limit(limit),
        User.countDocuments(query)
    ])

    res.json({
        msg: 'get api | Controller',
        totalUsers: count,
        users
    })
}

const usersPut = async (req = request, res = response) => {
    
    const { id } = req.params;
    const { password, google, email, _id, __v, ...rest } = req.body;
    // if( password )  rest.password = encryptField(password);
    console.log(req.body);

    // Me devuelve la version antes de ser actualizada
    const user = await User.findByIdAndUpdate( id, rest );

    res.json({
        msg: 'put api | Controller',
        user
    })
}

const usersPost = async (req = request, res = response) => {
    
    const { name, email, password, role } = req.body;
    const user = new User({name, email, password, role});
    user.password = encryptField(password);

    // Save in Database
    await user.save();

    res.status(201).json({
        msg: 'post api | Controller',
        user
    })
}

const usersDelete = async (req = request, res = response) => {
    
    const { id } = req.params;

    // Delete of database
    // const user = await User.findByIdAndDelete( id );

    // Change state of user (simulate a delete)
    const user = await User.findByIdAndUpdate(id, {state: false});

    res.json({
        msg: 'delete api | Controller',
        user
    })
}



module.exports = {
    usersGet,
    usersDelete,
    usersPost,
    usersPut,
}