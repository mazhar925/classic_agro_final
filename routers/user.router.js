const express = require('express');
const router = express.Router();
const { getUserController, postUserController, patchUserController } = require('../controllers/user.controller');

router.get('/login', getUserController)
router.post('/login', postUserController )
router.patch('/login', patchUserController )

module.exports = router;