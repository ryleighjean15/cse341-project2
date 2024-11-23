// const router = require('express').Router();

// router.use('/', require('./swagger'));

// router.get('/', (req, res) => {
//     //swagger.tags=['Hello World'] 
//     res.send('Hello World');
// });

// router.use('/contacts', require('./contacts'));

// module.exports = router;

const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/items', require('./items'));

module.exports = router;