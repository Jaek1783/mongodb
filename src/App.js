const express = require("express"); // express를 사용함 code;
const mongoose = require("mongoose");
const {User} = require('./Models/Users');
const app = express();// app이라는 상수로 express code를 작성함;
const port = 3000; // 포트번호는 3000;

// const mongoose = require('mongoose');
// {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false}

// const user = [];

const mongodbURI = 'mongodb+srv://admin:zVuEc4th5SNRrQFW@cluster0.pse9wil.mongodb.net/test';
const server = async ()=>{
    try{
      await mongoose.connect(mongodbURI);
      app.use(express.json());

        app.get('/user',(req,res)=>{
            res.send('hello user');
        });
        // app.post('/user', async (req,res)=>{
        //     try{
        //         let {userName, name} = req.bodyqW2A1    
        //         const user = new User(req.body);
        //         await user.save(); 
        //         return res.send({user});
        //     }catch(err){
        //          console.log(err);
        //          return res.status(500).send({err:err.messege});
        //     }

        // });
        app.listen(port, (req,res)=>{
            console.log(port+"번으로 서버가 켜졌습니다")
        });
    }catch(err){
        console.log(err);
    }

}

server();