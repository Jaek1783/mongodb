const mongoose = require('mongoose');

//스키마를 생성한다.
//스키마에 생성 키, 벨류, 입력형식 등을 입력해준다.
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:Number,
    email:{
        type:String,
        trim:true, //email의 빈칸을 없애줌
        unique: 1
    },
    password:{
        type:Number,
        required:true
    },
    role:{ // role :1 => 관리자, role :0 => user
        type:Number,
        default:0
    },
    token: {
        type:String,
    },
    tokenExp:{
        type:Number
    }
}, {timestamps:true});

const User = mongoose.model('User',UserSchema);

module.exports = {User};