var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var member_controller = require('./controllers/member');

router.get('/test', member_controller.test);

module.exports = router;