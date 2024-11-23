
// const express = require('express');
// const router = express.Router();

// const contactsController = require('../controllers/items');
// const validation = require('../middleware/validate');

// router.get('/', contactsController.getAll);

// router.get('/:id', contactsController.getSingle);

// router.post('/', validation.saveContact, contactsController.createContact);

// router.put('/:id', validation.saveContact, contactsController.updateContact);

// router.delete('/:id', contactsController.deleteContact);

// module.exports = router;

// itemRoutes.js (example)
const express = require('express');
const router = express.Router();
const { createItem, updateItem, deleteItem } = require('../controllers/items');

// Route for creating an item
router.post('/item', createItem);

// Route for updating an item
router.put('/item/:id', updateItem);

// Route for deleting an item
router.delete('/item/:id', deleteItem);

module.exports = router;
