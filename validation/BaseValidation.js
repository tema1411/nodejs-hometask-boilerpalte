class BaseValidationField {
    constructor(res, next) {
        this.response = res;
        this.next = next;
    }

    setError(textError) {
        this.response.err = textError;
        this.next()
    }

    isRequired(value) {
        return !(!value || !value.length);
    }
}

exports.BaseValidationField = BaseValidationField


