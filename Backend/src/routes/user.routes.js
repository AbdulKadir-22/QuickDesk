const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const middleware = require('../middlewares/user.middleware')

router.get('/', userController.getAllUsers);
router.get('/email/:email', userController.getUserByEmail);
router.get('/:id', userController.getUserById);
router.put('/update/:id', middleware.authenticate,userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;