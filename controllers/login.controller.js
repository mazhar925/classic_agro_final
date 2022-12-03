const database = require('../config/mysql');
const bcrypt = require('bcrypt');

const getLoginController = (req, res)=>{
    res.render('login');
}

const postLoginController = (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    let sql = `SELECT email FROM register WHERE email = '${email}'`;
                        database.query(sql, (err, result)=>{
                                if(err){
                                    console.log(err)
                                }
                                else{
                                    if(result.length === 0){
                                        console.log('Email not exists');
                                    }
                                    else{
                                        let sql = `SELECT username, password, role FROM register WHERE email = '${email}'`;
                                        database.query(sql, (err, result)=>{
                                            if(err){
                                                console.log(err)
                                            }
                                            else{
                                                bcrypt.compare(password, result[0].password, (err, val)=>{
                                                    if(err){
                                                        console.log(err);
                                                    }
                                                    else{
                                                        if(val === false){
                                                            console.log('Wrong Password')
                                                            res.redirect('/login');
                                                        }
                                                        else{
                                                            // req.session.isAut = true;
                                                            // if(result[0].role == '2'){
                                                                res.redirect('/profile');
                                                            // }
                                                           
                                                            
                                                        }
                                                    }
                                                })
                                            }
                                        });
                                    }
                                }
                            });    
}

module.exports = { getLoginController, postLoginController };