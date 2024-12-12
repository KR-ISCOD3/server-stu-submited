const express = require('express');
const { post_data,delete_data } = require('../controller/dataController.js');
const router = express.Router();

router.post('/',post_data);
router.delete('/:id',delete_data);

module.exports = router;