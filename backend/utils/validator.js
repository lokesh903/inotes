const { body, validationResult } = require('express-validator');
module.exports={
    registerValidator:[body('name',"name is required").not(),body('email',"enter valid email").isEmail(),body('password',"min password length is 5").isLength({ min: 5 })]
}