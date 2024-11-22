const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// GET route for fetching items
router.get('/items', itemController.getItems);

// POST route for adding an item
router.post('/items', itemController.createItem);

// PUT route for updating an item
router.put('/items/:id', itemController.updateItem);

// DELETE route for deleting an item
router.delete('/items/:id', itemController.deleteItem);

module.exports = router;
