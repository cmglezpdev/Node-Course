const { response, request } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const { validationResult } = require('express-validator');

const usersGet = (req, res = response) => {
    res.json({
        msg: 'get api | Controller'
    })
}

const usersPut = (req = request, res = response) => {
    
    const params = req.params;
    const queryParams = req.query;

    res.json({
        msg: 'put api | Controller',
        params: {
            ...params
        },
        queryParams: {
            ...queryParams
        }
    })
}



const usersPost = async (req = request, res = response) => {
    
    const { name, email, password, rol } = req.body;
    const user = new User({name, email, password, rol});

    // Encriptar la contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    // Save in Database
    await user.save();

    res.status(201).json({
        msg: 'post api | Controller',
        user
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete api | Controller'
    })
}



module.exports = {
    usersGet,
    usersDelete,
    usersPost,
    usersPut,
}