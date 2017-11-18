//1- requriing modules
//2- create connection
//3-connect
//4-initialize express
//5-create get request with database

//const express = require('express');
//const mysql = require('mysql');



//require - ceateconncetion-get-let-query
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database:'node_mysql_tutorial'
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

//crate table
app.get('/create_post_table',(req,res)=>{
    let sql =  'CREATE TABLE posts (id int AUTO_INCREMENT ,title VARCHAR(255),body VARCHAR(255), PRIMARY KEY(id) )';
    db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

//insert table
app.get('/add_post',(req,res)=>{
    let sql =  'INSERT INTO posts SET ?';
    let post = {title:'Post One',body:'This is post number one'};

    db.query(sql,post,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts 1 added...');
    });
});

app.get('/add_post2',(req,res)=>{
    let sql =  'INSERT INTO posts SET ?';
    let post = {title:'Post Tow',body:'This is post number Tow'};

    db.query(sql,post,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts 2 added...');
    });
});

// select posts
app.get('/get_posts',(req,res)=>{
    let sql =  'SELECT * FROM posts';
    db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched');
    });
});



// select single post
app.get('/get_post/:id',(req,res)=>{
    let sql =  `SELECT * FROM posts WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Posts fetched');
    });
});

// Update post
app.get('/update_post/:id/:title',(req,res)=>{
    let new_tile = 'Update title';
    let sql =  `UPDATE posts SET title = '${req.params.title}' WHERE id=${req.params.id}`;
    let query = db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Post Updated');
    });
});

// Update post
app.get('/delete_post/:id/',(req,res)=>{
    let new_tile = 'Update title';
    let sql =  `DELETE FROM posts WHERE id=${req.params.id}`;
    let query = db.query(sql,(err,result)=> {
        if(err) throw err;
        console.log(result);
        res.send('Post Deleted');
    });
});

app.listen('3000',() => {
    console.log('server started on port 3000');
});



// const express =  require('');

// 1
