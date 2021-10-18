const db = require('../lib/postgres');

const express = require('express');

const orders = express();

orders.get('/list', async(request, response)=> {
    let steaks = await db.connection('select * from steaks');
    // console.log(steaks);
    response.end(JSON.stringify (steaks,null,4));
    // return steaks
});

orders.post('/create', async(request, response)=> {
    response.end("This is create function of order");
});

orders.put('/update', async(request, response)=> {
    response.end("This is update function of order");
});

orders.delete('/delete', async(request, response)=> {
    response.end("This is delete function of order");
});

module.exports = {
    orders
};