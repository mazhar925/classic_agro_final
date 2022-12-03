const express = require('express');
const app = express();
require('ejs');
const cors = require('cors');
const loginRouter = require('./routers/login.router');
const productRouter = require('./routers/product.router');
const categoryRouter = require('./routers/category.router');
const stockRouter = require('./routers/stocks.router');
const database = require('./config/mysql');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
database.connect((err)=>{
    console.log(err?err: "database is Connected !");
})

app.use(loginRouter);
app.use(productRouter);
app.use(categoryRouter);
app.use(stockRouter);

app.use((req, res, next)=>{
    res.render('error');
})
app.use((err, req, res, next)=>{
    console.log(err.message);
})


module.exports = app;