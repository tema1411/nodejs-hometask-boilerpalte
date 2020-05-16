const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
    getOne(id) {
        const item = FighterRepository.getOne({id});
        if (!item) {
            throw Error(`Fighter with id: "${id}" not found `);
        }
        return item;
    }

    getAll() {
        const item = FighterRepository.getAll();
        if (!item) {
            return null;
        }
        return item;
    }

    create(data) {
        const item = FighterRepository.create(data);
        if (!item) {
            return null;
        }
        return item;
    }

    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    delete(id) {
        const item = FighterRepository.delete(id);
        if (!item.length) {
            throw Error(`Fighter with id: "${id}" not found `);
        }
        return item;
    }

    update(id, dataToUpdate) {
        const item = FighterRepository.update(id, dataToUpdate);
        if (!item.id) {
            throw Error(`Fighter with id: "${id}" not found `);
        }
        return item;
    }
}

module.exports = new FighterService();
