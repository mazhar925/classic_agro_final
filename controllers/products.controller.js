const database = require('../config/mysql');

const getProduct = (req, res)=>{
    res.render('product')
}

const getAllProduct = (req, res)=>{
    database.query(`SELECT products.ID, category_name, product_name, qty, pc, mrp, tp FROM categories, products WHERE categories.ID = products.category_ID`,function (err, result) {
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

const getSingleProduct = (req, res)=>{
    const name = req.query.name;
    database.query(`SELECT products.ID, category_name, product_name, qty, pc, mrp, tp  FROM categories, products WHERE categories.ID = products.category_ID, products.product_name = '${name}'`,function (err, result) {
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

const postProduct = (req, res)=>{
    const pName = req.body.product_name;
    const cID = req.body.pro_cat;
    const qty = req.body.pro_qty;
    const pc = req.body.pro_pc;
    const mrp = req.body.pro_mrp;
    const tp = req.body.pro_tp;
    let sql = `INSERT INTO products (product_name, category_ID, qty, pc, mrp, tp) VALUES ('${pName}', '${cID}', '${qty}', '${pc}', '${mrp}', '${tp}')`;
      database.query(sql, (err)=>{
      if(err){
          console.log(err);
      }
      else{
        res.redirect('/product');
    }
  });
}

const getModalproduct = (req, res)=>{
    const id = req.query.id;
    database.query(`SELECT * FROM products WHERE ID = ${id}`,function (err, result) {
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

const patchModalproduct = (req, res)=>{
    const id = req.query.id;
    const pName = req.body.product_name;
    // const pc = req.body.PC;
    // const mrp = req.body.MRP;
    let sql = `UPDATE products SET product_name = '${pName}' WHERE ID = ${id}`;
    database.query(sql, (err)=>{
      if(err){
          console.log(err);
      }
  });
}

const getCategory =(req, res)=>{
    let sql = `SELECT * FROM categories`
    database.query(sql, (err, result)=>{
        if (err){
            console.log(err);
          } 
          else{
              res.json({
                  data: result
              });
          }
    })
}

const getLedger = (req, res)=>{
    res.render('productsledger')
}

module.exports = { getProduct, getAllProduct, getSingleProduct, postProduct, getModalproduct, patchModalproduct, getCategory, getLedger }