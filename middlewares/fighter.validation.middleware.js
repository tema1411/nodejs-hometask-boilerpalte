const {fighter} = require('../models/fighter');
const {FighterFieldValidation} = require('../validation/FighterFieldValidation')
const {validationAndGetValidDataForUpdate} = require('../validation/validationHelper')

const createFighterValid = (req, res, next) => {
    const validationFields = new FighterFieldValidation(res, next);

    const {name, health, power, defense} = req.body;

    const newFighter = {...fighter};
    delete newFighter.id;

    newFighter.name = validationFields.name(name);
    newFighter.health = validationFields.health(health);
    newFighter.power = validationFields.power(power);
    newFighter.defense = validationFields.defense(defense);

    req.body = newFighter;
    next();
}

const updateFighterValid = (req, res, next) => {
    const validationFields = new FighterFieldValidation(res, next);

    req.body = validationAndGetValidDataForUpdate(validationFields,  req.body, fighter);
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;
