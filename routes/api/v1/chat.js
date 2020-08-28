const express = require('express');
const router = express.Router();
const chatController = require('../../../controllers/api/v1/chat');


router.post('/',chatController.create);


module.exports = router;