
//1-
const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:''
});

db.connect((err) => {
    if(err){
     throw err;
    }
    console.log('mysql  Connected');
});

const app = express();

app.get('/createdb',(req,res) =>{
    let sql = 'CREATE DATABASE node_mysql_tutorial';
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.listen('3000',() => {
    console.log('server started on port 3000');
});