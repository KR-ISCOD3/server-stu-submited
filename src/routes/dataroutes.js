const express = require('express');
const { post_data,delete_data, get_all_data } = require('../controller/dataController.js');
const router = express.Router();

router.get('/',get_all_data);
router.post('/',post_data);
router.delete('/:id',delete_data);

module.exports = router;