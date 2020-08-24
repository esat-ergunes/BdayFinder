
const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/api/v1/userData');



router.get("/", userController.getAll);




module.exports = router;

