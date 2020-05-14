const {BaseValidationField} = require("./BaseValidation");

class ValidationUserField extends BaseValidationField{
    constructor(res, next) {
        super(res, next)
    }

    phoneNumber(phone) {
        return /^\+380\d{9}/.test(phone) ? phone : this.setError('Wrong phone number');
    }

    firstName(firstName) {
        return this.isRequired(firstName) ? firstName : this.setError('First name is required')
    }

    lastName(lastName) {
        return this.isRequired(lastName) ? lastName : this.setError('Last name is required')
    }

    email(email) {
        return /@gmail\.com$/.test(email) ? email : this.setError('Email must be xxxxxx@gmail.com')
    }

    password(password) {
        const minLengthPassword = 3;
        return (password && password.length >= minLengthPassword) ? password : this.setError('Password\'s min length must be 3')
    }
}

exports.ValidationUserField = ValidationUserField;
