var express = require('express');
var router = express.Router();
var controller = require('../controller/Controller');

/* GET home page. */
router.post('/addcon', controller.addcon);
router.get('/viewcon', controller.viewcon);
router.post('/updatecon/:id', controller.updatecon);
router.get('/deletecon/:id', controller.deletecon);
router.get('/searchcon/:name', controller.searchcon);

module.exports = router;
