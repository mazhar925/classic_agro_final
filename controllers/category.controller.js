const database = require('../config/mysql');

const getCategory = (req, res)=>{
    res.render('category');
}

const getAllCategory = (req, res)=>{
    database.query("SELECT * FROM categories",function (err, result) {
        console.log(result);
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

const getSingleCategory = (req, res)=>{
    const id = req.query.id;
    database.query(`SELECT * FROM categories WHERE ID = ${id}`,function (err, result) {
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

const postCategory = (req, res)=>{
    const category = req.body.category;
    let sql = `INSERT INTO categories (category_name) VALUES ('${category}')`;
    database.query(sql, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/category');
        }
    });
}

const patchCategory = (req, res)=>{
    const id = req.query.id;
    const catName = req.body.category_name;
    database.query(`UPDATE categories SET category_name = '${catName}' WHERE ID = ${id}`,function (err) {
        if (err){
          console.log(err);
        }
        else{
            res.redirect('/category');
        } 
    });
}

module.exports = { getCategory, getAllCategory, getSingleCategory, postCategory, patchCategory };