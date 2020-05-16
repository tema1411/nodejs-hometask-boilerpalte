const express = require('express');
const UserService = require('../services/userService');
const {createUserValid, updateUserValid} = require('../middlewares/user.validation.middleware');
const {trimObjValue} = require('../middlewares/trimDataBody.middleware')
const {responseMiddleware} = require('../middlewares/response.middleware');

const router = express.Router();

router.get('/', (req, res, next) => {
    try {
        res.data = UserService.getAll(req.body)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

router.get('/:id', (req, res, next) => {
    try {
        const {id} = req.params
        res.data = UserService.getOne(id)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

router.put('/:id', trimObjValue, updateUserValid, (req, res, next) => {
    try {
        const {id} = req.params;
        const dateToUpdate = req.body;
        res.data = UserService.update(id, dateToUpdate)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

router.delete('/:id', (req, res, next) => {
    try {
        const {id} = req.params
        res.data = UserService.delete(id)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

router.post('/', trimObjValue, createUserValid, (req, res, next) => {
    if (res.err) return next()

    try {
        res.data = UserService.create(req.body)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

module.exports = router;
