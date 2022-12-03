const database = require('../config/mysql');
const bcrypt = require('bcrypt');

const getUserController = (req, res)=>{
    let sql = `SELECT * FROM register`;
    database.query(sql, (err, result)=>{
    if(err){
        console.log(err)
    }else{
        res.render('login',{
            data: result
        });
    }
})  
}

const postUserController = (req, res)=>{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirm_password = req.body.confirm_password;
    const role = req.body.role;
    if(password != confirm_password){
        console.log('Password Not Match');
        res.redirect('/user');
    }
    else{
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err){
                console.log(err)
            }
            else{
                bcrypt.hash(password, salt, function(err, hash) {
                    if(err){
                        console.log(err)
                    }
                    else{
                        let sql = `SELECT email FROM register WHERE email = '${email}'`;
                        database.query(sql, (err, result)=>{
                                if(err){
                                    console.log(err)
                                }
                                else{
                                    if(result.length>0){
                                        res.redirect('/user');
                                        console.log('Email already used !');
                                    }
                                    else{               
                                        let sql = `INSERT INTO register (username, email, password, role, activity) VALUES ('${username}', '${email}', '${hash}', '${role}', 'on')`;
                                        database.query(sql, (err)=>{
                                            if(err){
                                                console.log(err)
                                            }
                                            else{
                                                res.redirect('/login');
                                                console.log('Registered');
                                            }
                                        })
                                    }
                                }
                            })
                    }
                });
            }
        });
    }     
}


module.exports = { getUserController, postUserController, patchUserController };