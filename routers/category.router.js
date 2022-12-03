const express = require('express');
const router = express.Router();
const { getCategory, getAllCategory, getSingleCategory, postCategory, patchCategory } = require('../controllers/category.controller');

router.get('/category', getCategory);
router.get('/api/category', getAllCategory);
router.get('/api/modalcategory', getSingleCategory);
router.post('/api/category', postCategory)
router.patch('/api/categoryedit', patchCategory)

module.exports = router;