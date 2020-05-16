const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const {trimObjValue} = require('../middlewares/trimDataBody.middleware')
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get('/', (req, res, next) => {
    try {
        res.data = FighterService.getAll(req.body)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

router.get('/:id', (req, res, next) => {
    try {
        const {id} = req.params
        res.data = FighterService.getOne(id)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

router.put('/:id', trimObjValue, updateFighterValid, (req, res, next) => {
    try {
        const {id} = req.params;
        const dateToUpdate = req.body;
        res.data = FighterService.update(id, dateToUpdate)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

router.delete('/:id', (req, res, next) => {
    try {
        const {id} = req.params
        res.data = FighterService.delete(id)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

router.post('/', trimObjValue, createFighterValid, (req, res, next) => {
    if (res.err) return next()

    try {
        res.data = FighterService.create(req.body)
    } catch (e) {
        res.err = e;
    } finally {
        next()
    }
}, responseMiddleware)

module.exports = router;
