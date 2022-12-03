const database = require('../config/mysql');

const getStocks = (req, res)=>{
    res.render('stocks');
}

const getStocksAll = (req, res)=>{
    database.query("SELECT stock_table.ID, products.product_name, stock_table.stock, stock_table.date, stock_table.user_id FROM stock_table, products WHERE stock_table.product_id = products.ID ", (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json({
                data: result,
            });
        }
    })
}
const getUser = (req, res)=>{
    database.query(`SELECT ID, username FROM register`,function (err, result) {
        if (err){
          console.log(err);
        } 
        else{
            res.json({
                data: result
            });
        }
    });
}
const getAllProduct = (req, res)=>{
    database.query(`SELECT ID, product_name FROM products`,function (err, result) {
        if (err){
          console.log(err);
        } 
        else{
            res.json({
                data: result
            });
        }
    });
}

const postStocks = (req, res)=>{
    console.log(req.body);
    const date = req.body.date;
    const user = req.body.user;
    const ID = req.body.name;
    const qty = req.body.qty;
    let sql = `INSERT INTO stock_table (user_id, date, product_id, stock) VALUES ('${user}', '${date}', '${ID}', '${qty}')`;
      database.query(sql, (err)=>{
      if(err){
          console.log(err);
      }
      else{
        res.redirect('/stocks');
    }
  });
}
const editStocksGet = (req, res)=>{
    const id = req.query.id;
    database.query(`SELECT stock, date FROM stock_table WHERE ID = ${id} `, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json({
                data: result,
            });
        }
    })
}

const editStocks = (req, res)=>{

}

const editStocksSingleGet=(req, res)=>{
    const id = req.body.id;
    database.query(`SELECT stock, date, user_id FROM stock_table WHERE ID = ${id} `, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.json({
                data: result,
            });
        }
    })
}





module.exports = { getStocks,editStocksSingleGet, getStocksAll, postStocks, editStocks,editStocksGet, getAllProduct, getUser};