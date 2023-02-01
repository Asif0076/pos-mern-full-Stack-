const express = require('express');
const { getItemController, addItemController } = require('../controllers/itemCountroller');

const router = express.Router();

// routes
// method get

router.get('/get-item', getItemController)

//method post
router.post('/add-item', addItemController)

module.exports = router;