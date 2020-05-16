const {user} = require('../models/user');
const {ValidationUserField} = require('../validation/UserFieldValidation');
const {validationAndGetValidDataForUpdate} = require('../validation/validationHelper');

const createUserValid = (req, res, next) => {
    const validationFields = new ValidationUserField(res, next);

    const {firstName, lastName, email, phoneNumber, password} = req.body;

    const newUser = {...user};
    delete newUser.id;

    newUser.firstName = validationFields.firstName(firstName);
    newUser.lastName = validationFields.lastName(lastName);
    newUser.email = validationFields.email(email);
    newUser.phoneNumber = validationFields.phoneNumber(phoneNumber);
    newUser.password = validationFields.password(password);

    req.body = newUser;
    next();
}

const updateUserValid = (req, res, next) => {
    const validationFields = new ValidationUserField(res, next);

    req.body = validationAndGetValidDataForUpdate(validationFields,  req.body, user);
    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
