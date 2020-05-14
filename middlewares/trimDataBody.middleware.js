const trimObjValue = (req, res, next) => {
    if (req.body) {
        const objBody = req.body;
        for (let key in objBody) {
            const keyValue = objBody[key];
            if (typeof keyValue === 'string') {
                objBody[key] = keyValue.trim();
            }
        }
    }
    next();
}

exports.trimObjValue = trimObjValue;
