const { body, validationResult } = require('express-validator');
const Item = require('../models/Item');

// Get all items
exports.getItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new item with validation
exports.createItem = [
    // Validation rules
    body('name').not().isEmpty().withMessage('Name is required'),
    body('description').not().isEmpty().withMessage('Description is required'),
    // Controller logic
    async (req, res) => {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, description } = req.body;
        const newItem = new Item({ name, description });

        try {
            const savedItem = await newItem.save();
            res.status(201).json(savedItem);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
];

// itemController.js
module.exports.updateItem = (req, res) => {
    // Logic for updating an item based on the ID from the request
    const itemId = req.params.id;
    // You can use this ID to find the item in a database or perform other operations
    // For now, let's simulate the update process
    res.send(`Item with ID ${itemId} has been updated.`);
};
