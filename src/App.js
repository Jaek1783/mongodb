const express = require("express"); // express를 사용함 code;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const {User} = require('./Models/Users');
const app = express();// app이라는 상수로 express code를 작성함;
const port = 3000; // 포트번호는 3000;
const config = require('./Config/key')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongodbURI = config.mongoURI;
const server = async ()=>{
    try{
      await mongoose.connect(mongodbURI);
      app.use(express.json());

        app.get('/',(req,res)=>{
            res.send('hello world');
        });
        app.post('/register',(req,res)=>{
                //회원가입 시 필요한 정보들을 client에서 가져오면
                //그것들을 데이터베이스에 넣어준다.  
                const user = new  User(req.body);
                user.save((err,userInfo) =>{
                    if(err) return res.json({success:false, err})
                    return res.status(200).json({success:true})
                }); 
                // return res.send({user});
        });
        app.listen(port, (req,res)=>{
            console.log(port+"번으로 서버가 켜졌습니다")
        });
    }catch(err){
        console.log(err);
    }

}

server();

// const mongoose = require('mongoose');
// {useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false}

// const user = [];