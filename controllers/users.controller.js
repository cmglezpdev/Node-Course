const { response } = require('express');


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

const usersPost = (req, res = response) => {
    res.status(201).json({
        msg: 'post api | Controller'
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