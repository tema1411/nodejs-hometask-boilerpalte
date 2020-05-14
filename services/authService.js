const UserService = require('./userService');

class AuthService {
    login(userData) {
        console.log("userData", userData);
        const user = UserService.search(userData);
        console.log("user", user);
        if(!user) {
            throw Error('User not found');
        }
        return user;
    }
}

module.exports = new AuthService();
