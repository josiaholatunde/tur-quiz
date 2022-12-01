const { validationResult } = require("express-validator");
const users = require("../data/users")
const { findById, addUser, doesUserExistByEmail, findByEmail, findByName, deleteById } = require('../service/UserService')
const ResponseService = require('../util/ApiResponse')

module.exports = {

    retrieveUserById: async (req, res, next) => {
        try {
            const { id } = req.params;
            const user = findById(id);
            if (!user) {
                return ResponseService.send(404, res, 'User with id does not exist', null, {
                    msg: 'User with id does not exist'
                });
            }
            return ResponseService.send(200, res, 'Successfully fetched user', user, null);
        } catch (ex) {
            console.log(ex);
            return ResponseService.send(500, res, 'An error occurred while retrieving user', null, {
                msg: 'An error occurred while retrieving user'
            });
        }
    },

    retrieveUserBySearchCriteria: async(req, res, next) => {
        const { email, name } = req.query;
        try {
            if (!!email) {
               const userFromStore =  findByEmail(email);
               if (!userFromStore) {
                return ResponseService.send(404, res, 'User with email does not exist', null, {
                    msg: 'User with email does not exist'
                });
               }
               return ResponseService.send(200, res, 'Successfully fetched user', userFromStore, null)
            }

            if (!!name) {
                const usersFromStore =  findByName(name);
                if (usersFromStore.length === 0) {
                 return ResponseService.send(404, res, 'User with name does not exist', null, {
                     msg: 'User with name does not exist'
                 });
                }
                return ResponseService.send(200, res, 'Successfully fetched users', usersFromStore, null)
            }
            return ResponseService.send(200, res, 'Successfully fetched users', users, null);
        } catch (ex) {
            console.log(ex);
            return ResponseService.send(500, res, 'An error occurred while retrieving users', null, {
                msg: 'An error occurred while retrieving users'
            });
        }
    },

    addUser: async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return ResponseService.send(
                422,
                res,
                "One or more validation errors occurred",
                null,
                errors.array({ onlyFirstError: true })
            );
        }
        try {
            const { name, email } = req.body;
            if (doesUserExistByEmail(email)) {
                return ResponseService.send(400, res, 'Email has been taken by another user', null, {
                    msg: 'Email has been taken by another user'
                });
            }
            const createdUser = addUser(email, name);
            // dispatch user created event
            return ResponseService.send(200, res, 'Successfully created user.', createdUser, null);
        } catch (ex) {
            console.log(ex);
            return ResponseService.send(500, res, 'An error occurred while creating user', null, {
                msg: 'An error occurred while creating user'
            });
        }
    },

    removeUser: async(req, res, next) => {
        try {
            const { id } = req.params;
            const user = findById(id);
            if (!user) {
                return ResponseService.send(404, res, 'User with id does not exist', null, {
                    msg: 'User with id does not exist'
                });
            }
            deleteById(id);
            return ResponseService.send(200, res, 'Successfully deleted user', null, null);
        } catch (ex) {
            console.log(ex);
            return ResponseService.send(500, res, 'An error occurred while deleting user', null, {
                msg: 'An error occurred while deleting user'
            });
        }
    },

}