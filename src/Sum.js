// const addSum = (a,b)=> new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         if(typeof a !== 'number' || typeof b !== 'number'){
//             reject('a또는b가 숫자인지 확인하세요')
//         }
//         resolve(a+b)
//     },1000);
// });

// // addSum(10,'str')
// //     .then(sum => console.log({sum}))
// //     .catch(error=> console.log({error}))

// const totlaSum = async ()=>{
// try{
//     const A = await addSum(10,10);
//     const B = await addSum(A,10);
//     // const C = await addSum(B,'srt');
//     console.log({A , B});
// }catch(err){
//     if(err)  console.log({err})
// }}
// totlaSum();
// app.get('/',(req,res)=>{
//     res.send('nodeJS Test');
// });