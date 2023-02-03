const express = require('express');
const { getItemController, addItemController,editItemController,deleteItemController } = require('../controllers/itemCountroller');

const router = express.Router();

// routes
// method get

router.get('/get-item', getItemController)

//method post
router.post('/add-item', addItemController)

//method PUT
router.put('/edit-item',editItemController)

//method Delete
router.post('/delete-item', deleteItemController)

module.exports = router;