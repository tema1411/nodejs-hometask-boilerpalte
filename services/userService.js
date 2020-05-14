const {UserRepository} = require('../repositories/userRepository');

class UserService {

    // TODO: Implement methods to work with user


    getOne(id) {
        const item = UserRepository.getOne({id});
        if (!item) {
            throw Error(`User with id: "${id}" not found `);
        }
        return item;
    }

    getAll() {
        const item = UserRepository.getAll();
        if (!item) {
            return null;
        }
        return item;
    }

    create(data) {
        const item = UserRepository.create(data);
        if (!item) {
            return null;
        }
        return item;
    }

    search(search) {
        const item = UserRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    delete(id) {
        const item = UserRepository.delete(id);
        if (!item.length) {
            throw Error(`User with id: "${id}" not found `);
        }
        return item;
    }

    update(id, dataToUpdate) {
        const item = UserRepository.update(id, dataToUpdate);
        if (!item.id) {
            throw Error(`User with id: "${id}" not found `);
        }
        return item;
    }
}

module.exports = new UserService();
