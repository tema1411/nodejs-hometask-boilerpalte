const {BaseValidationField} = require("./validationHelper");

class FighterFieldValidation extends BaseValidationField {
    constructor(res, next) {
        super(res, next)
    }

    isNumber(number) {
        return Boolean(Number(number))
    }

    name(name) {
        return this.isRequired(name) ? name : this.setError('Fighter\'s name is required')
    }

    health(health) {
        return (this.isNumber(health) && health > 0) ? health : this.setError('Fighter\s health must be number and more 0')
    }

    power(power) {
        return (this.isNumber(power) && power > 0 && power < 100) ? power : this.setError('Fighter\s power must be number, in the interval 1-100')
    }

    defense(defense) {
        return (this.isNumber(defense) && defense >= 1 && defense < 10) ? defense : this.setError('Fighter\s defense must be number, in the interval 1-10')
    }

}

exports.FighterFieldValidation = FighterFieldValidation;
