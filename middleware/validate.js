const validator = require('../helpers/validate');

const saveContact = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    hometown: 'required|string',
    dreamCar: 'required|string',
    favoriteFood: 'required|string',
    itemCategory: 'string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveContact
};