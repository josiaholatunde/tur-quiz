const { API_BASE_URL } = require("../util")
const { retrieveUserById, addUser, removeUser, retrieveUserBySearchCriteria } = require('../controllers/UserController');
const { addUserValidator } = require("../validators/userValidators");


const userRoutes = (app) => {

    app.get(`${API_BASE_URL}/users`, retrieveUserBySearchCriteria);

    app.get(`${API_BASE_URL}/users/:id`, retrieveUserById);

    app.post(`${API_BASE_URL}/users`, addUserValidator, addUser);

    app.delete(`${API_BASE_URL}/users/:id`, removeUser);
}


module.exports = userRoutes