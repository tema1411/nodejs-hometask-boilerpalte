const {user} = require('../models/user');
const {ValidationUserField} = require('../validation/UserFieldValidation')

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
    // TODO: Implement validatior for user entity during update
    const validationFields = new ValidationUserField(res, next);
    const dateToUpdate = req.body;

    const newDataUser = {};

    for (let key in dateToUpdate) {
        if (key in user) {
            const value = dateToUpdate[key];
            newDataUser[key] = validationFields[key](value);

            if (!newDataUser[key]) {
                break;
            }
        }
    }

    req.body = newDataUser;
    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;
