const { check } = require("express-validator");

module.exports = {

    addUserValidator: () => [
        check('name', 'Name field is required').trim().notEmpty(),
        check('email', 'Email field is required').trim().notEmpty().isEmail(),
    ]

}