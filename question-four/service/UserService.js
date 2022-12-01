const users = require("../data/users")
const uuid = require('uuid')

module.exports = {
    findById: (userId) => {
        return users.find(user => user.id === userId);
    },
    findByEmail: (email) => {
        return users.find(user => user.email === email);
    },
    findByName: (name) => {
        return users.find(user => user.name === name);
    },
    deleteById: (userId) => {
        const userIndex = users.findIndex(user => user.id === userId);
        return users.splice(userIndex, 1);
    },
    addUser: (email, name) => {
        const user = {
            id: uuid.v4(),
            email,
            name
        }
       users.push(user);
    },
    doesUserExistByEmail: (email) => {
        return users.some(user => user.email === email);
    }

}