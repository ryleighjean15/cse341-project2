const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// const getAll = (req, res) => {
//   mongodb
//     .getDb()
//     .db()
//     .collection('contacts')
//     .find()
//     .toArray((err, lists) => {
//       if (err) {
//         res.status(400).json({ message: err });
//       }
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).json(lists);
//     });
// };

// const getSingle = (req, res) => {
//   if (!ObjectId.isValid(req.params.id)) {
//     res.status(400).json('Must use a valid contact id to find a contact.');
//   }
//   const userId = new ObjectId(req.params.id);
//   mongodb
//     .getDb()
//     .db()
//     .collection('contacts')
//     .find({ _id: userId })
//     .toArray((err, result) => {
//       if (err) {
//         res.status(400).json({ message: err });
//       }
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).json(result[0]);
//     });
// };

// const createContact = async (req, res) => {
//   const contact = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     favoriteColor: req.body.favoriteColor,
//     birthday: req.body.birthday
//   };
//   const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
//   if (response.acknowledged) {
//     res.status(201).json(response);
//   } else {
//     res.status(500).json(response.error || 'Some error occurred while creating the contact.');
//   }
// };

// const updateContact = async (req, res) => {
//   if (!ObjectId.isValid(req.params.id)) {
//     res.status(400).json('Must use a valid contact id to update a contact.');
//   }
//   const userId = new ObjectId(req.params.id);
//   // be aware of updateOne if you only want to update specific fields
//   const contact = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     favoriteColor: req.body.favoriteColor,
//     birthday: req.body.birthday
//   };
//   const response = await mongodb
//     .getDb()
//     .db()
//     .collection('contacts')
//     .replaceOne({ _id: userId }, contact);
//   console.log(response);
//   if (response.modifiedCount > 0) {
//     res.status(204).send();
//   } else {
//     res.status(500).json(response.error || 'error occurred while updating the contact.');
//   }
// };

// const deleteContact = async (req, res) => {
//   if (!ObjectId.isValid(req.params.id)) {
//     res.status(400).json('Must use a valid contact id to delete contact.');
//   }
//   const userId = new ObjectId(req.params.id);
//   const response = await mongodb.getDb().db().collection('contacts').remove({ _id: userId }, true);
//   console.log(response);
//   if (response.deletedCount > 0) {
//     res.status(204).send();
//   } else {
//     res.status(500).json(response.error || 'error occurred while deleting the contact.');
//   }
// };

// module.exports = {
//   getAll,
//   getSingle,
//   createContact,
//   updateContact,
//   deleteContact
// };

// const Item = require('../models/itemModel');  // Import your new Item model

// Create Item
async function createItem(req, res) {
  try {
    // Destructure the new fields from the request body
    const { name, hometown, dreamCar, favoriteFood, itemCategory } = req.body;

    // Create a new item document with the updated fields
    const newItem = new Item({
      name, 
      hometown, 
      dreamCar, 
      favoriteFood, 
      itemCategory,
    });

    // Save the new item to the database
    await newItem.save();

    // Send a success response
    res.status(201).json({
      message: 'Item created successfully!',
      item: newItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create item' });
  }
}

// Update Item
async function updateItem(req, res) {
  const { id } = req.params;  // Get the ID of the item to update from the URL params
  const { name, hometown, dreamCar, favoriteFood, itemCategory } = req.body;  // Get the new values from the request body

  try {
    // Find the item by ID and update it
    const updatedItem = await Item.findByIdAndUpdate(
      id, 
      { name, hometown, dreamCar, favoriteFood, itemCategory },
      { new: true }  // Return the updated document
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Send the updated item as a response
    res.status(200).json({
      message: 'Item updated successfully!',
      item: updatedItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update item' });
  }
}

// Delete Item
async function deleteItem(req, res) {
  const { id } = req.params;  // Get the ID of the item to delete from the URL params

  try {
    // Find the item by ID and delete it
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Send a success response
    res.status(200).json({
      message: 'Item deleted successfully!',
      item: deletedItem,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete item' });
  }
}

module.exports = { createItem, updateItem, deleteItem };
