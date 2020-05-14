const responseMiddleware = (req, res, next) => {
    if (res.err) {
        res.status(400).send({
            error: true,
            message: res.err.toString()
        })
    } else {
        res.send(res.data)
    }
    next()
}

exports.responseMiddleware = responseMiddleware;
