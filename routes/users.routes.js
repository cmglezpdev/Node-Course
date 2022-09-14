const { Router } = require('express');
const { check } = require('express-validator');
const { usersGet, usersPut, usersPost, usersDelete } = require('../controllers/users.controller');
const { validRole, validEmail, validExistUserById } = require('../helpers/db-validations');
const { validFields } = require('../middlewares/valid-fields.middleware');

const router = Router();

router.get('/', usersGet); 
 
router.put('/:id', [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(validExistUserById),
    check('role').custom(validRole),
    validFields
], usersPut); 

router.post('/', [
    check('name', 'The name is required').not().isEmail(),
    check('password', 'The password must have more than 6 letters').isLength({min: 6}),
    check('email', 'The email is not valid').isEmail(),
    check('email').custom(validEmail),
    check('role').custom(validRole),
    validFields,
],usersPost); 

router.delete('/', usersDelete);

module.exports = router;
