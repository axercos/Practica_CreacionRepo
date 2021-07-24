const express = require('express');
const route = express.Router();

const databaseAPI = require('../database/database');

//Response correct form
const JsonSuccess = {
    'status': 200,
    'message': 'Success',
}

//Error in the form or in other thing
const JsonError = {
    'status': 400,
    'message': 'Error',
}

//Metodo para obtener la informacion de la colleccion
route.get('/getAll', async function(req, resp, next){
    const info = await databaseAPI.getAll();
    resp.send(info);
    resp.send(JsonSuccess);
});

//Metodo post para insertar datos
route.post('/createOne', async function(req, resp, next){
    const info = req.body;
    console.log(info, JsonSuccess);
    databaseAPI.create(info);
    resp.send(JsonSuccess);
});

//Metodo post para eliminar algo
route.post('/deleteByName', async function(req, resp, next){
    try {
        const info = await databaseAPI.deleteByName(req.body.name);
        console.log(info.deletedCount);
        resp.send(JsonSuccess);
    } catch (error) {
        console.log(error);
        resp.send(JsonError);
    }
});

module.exports = route;