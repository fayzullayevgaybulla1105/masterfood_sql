const db = require('../lib/postgres');
const controller = require('../controllers/steaks')
const stocks = require('express').Router();


stocks.get('/list', controller.GET);

stocks.post('/create', async(request, response)=> {
    response.end("This is create function of order");
});

stocks.put('/update', async(request, response)=> {
    response.end("This is update function of order");
});

stocks.delete('/delete', async(request, response)=> {
    response.end("This is delete function of order");
});

module.exports = {
    stocks
};