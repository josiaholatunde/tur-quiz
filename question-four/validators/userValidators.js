const { check } = require("express-validator");

module.exports = {

    addUserValidator: () => [
        check('name', 'Name field is required').trim().not().isEmpty(),
        check('email', 'Email field is required and must be a valid email').trim().not().isEmpty().isEmail(),
    ]

}