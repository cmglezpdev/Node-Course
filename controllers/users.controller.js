const { response, request } = require('express');


const usersGet = (req, res = response) => {
    res.json({
        msg: 'get api | Controller'
    })
}

const usersPut = (req, res = response) => {
    res.json({
        msg: 'put api | Controller'
    })
}

const usersPost = (req = request, res = response) => {
    
    const body = req.body;
    
    res.status(201).json({
        msg: 'post api | Controller',
        ...body,
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