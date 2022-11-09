const express=require('express');
const app=express();
const controller=require('../controllers/addUser');
app.post('/addUser',controller);
module.exports=app;