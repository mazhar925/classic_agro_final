const express = require('express');
const router = express.Router();
const {getProduct, getAllProduct, getSingleProduct,getLedger, postProduct, getModalproduct, patchModalproduct, getCategory} = require('../controllers/products.controller');

router.get('/product', getProduct);
router.get('/api/productAll', getAllProduct);
router.get('/api/productByName', getSingleProduct);
router.get('/api/modalproduct', getModalproduct);
router.put('/api/modifyproduct', patchModalproduct);
router.post('/api/productAdd', postProduct);
router.get('/categoryName', getCategory);
router.get('/productLedger', getLedger);

module.exports = router;