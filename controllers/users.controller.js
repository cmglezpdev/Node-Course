const { response, request } = require('express');


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