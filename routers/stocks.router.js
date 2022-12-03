const express = require('express');
const router = express.Router();
const {getCategory} = require('../controllers/products.controller');
const { getStocks, getStocksAll, postStocks, editStocks,editStocksSingleGet, getAllProduct,editStocksGet, getUser} = require('../controllers/stocks.controllers')

router.get('/stocks', getStocks);
router.get('/api/productAllstocks', getAllProduct);
router.get('/api/stocks', getStocksAll);
router.get('/api/usersStock', getUser);
router.get('/categoryName', getCategory);
router.post('/api/stocksAdd', postStocks);
router.get('/api/stocksEdit', editStocksGet);
router.get('/api/stocksledgerSingle', editStocksSingleGet);

module.exports = router;