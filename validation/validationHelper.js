class BaseValidationField {
    constructor(res, next) {
        this.response = res;
        this.next = next;
    }

    setError(textError) {
        this.response.err = textError;
        return this.next()
    }

    isRequired(value) {
        return !(!value || !value.length);
    }
}

function validationAndGetValidDataForUpdate(validationMethods, checkData, model) {
    const validData = {};
    const modelWithoutId = {...model};
    delete modelWithoutId.id;

    for (let key in checkData) {
        if (key in model) {
            const value = checkData[key];

            if (validationMethods[key](value)) {
                validData[key] = value;
            }
        }
    }

    return validData;
}

exports.BaseValidationField = BaseValidationField
exports.validationAndGetValidDataForUpdate = validationAndGetValidDataForUpdate


