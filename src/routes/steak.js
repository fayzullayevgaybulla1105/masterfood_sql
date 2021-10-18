const controller = require('../controllers/steaks.js')
const steaks = require('express').Router();


steaks.get('/list', controller.GET);

steaks.post('/create', controller.POST);

steaks.put('/update', controller.PUT);

steaks.delete('/delete', controller.DELETE);

module.exports = steaks
