// const { request } = require('express');
const express = require('express');
// const bodyParser = require('body-parser')
const steakRouter = require('./routes/steak.js')
const server = express();


server.use(express.json())
server.use(express.urlencoded({ extended: true }))



server.use(steakRouter);


const PORT = process.env.PORT || 2802;

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});