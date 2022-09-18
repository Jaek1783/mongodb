//RESTAPI를 통한 Http 통신
//GET, POST, PUT, DELETE

//GET(읽기)
//app.get("경로", (요청, 응답)=>{
//  응답.send("내용")
//});

// app.get("/sub", (req,res)=>{
//     res.send("this Page is sub Page");
// });

//html 파일 가져오기
//app.get("경로", (요청, 응답)=>{
//  응답.sendfile(__dirname + '경로.html');
//});

// app.use(express.json());

// const users = [
//     {name:"jaek", age:29}
// ];

// app.get('/user',(req,res)=>{
//     res.send(users);
// });
// app.get("/sub", (req,res)=>{
//     res.sendFile(__dirname + '/subPage/write.html');
// })

// app.get("/",(req, res)=>{
//     res.sendFile(__dirname + '/index.html')
// });

//POST(쓰기)
//VSCode에서는 GET방식이 default값이기 때문에
//POST, PUT, DELETE를 입력하기 위해서 postman 프로그램으로 send를 보낼 수 있다
//코드입력 => VSCode / send => postman

//app.post('경로',(요청, 응답)=>{
//  배열.push({객체});
//  응답.send({배열});
// });

// app.post('/user',(req,res)=>{
//     users.push({name:"canLee", age:29});
//     res.send({users});
// });

//postman에서 주는 요청은 json이고, 응답은 javascript객체이기 떄문에 컴파일을 해주어야 한다. 
// app.post('/user',(req,res)=>{
//     users.push({name:req.body.name, age:req.body.age});
//     res.send({users});
// });
