
//创建Promise

//let p = new Promise();


//console.info(p)  //TypeError: Promise resolver undefined is not a function

//参数
// let p = new Promise((resolved,rejected)=>{
//
//     if('异步操作成功'){
//         resolved(data)
//     }else{
//         rejected(err)
//     }
//
// })

//例子
// let p = new Promise((resolved,rejected)=>{
//
//     setTimeout(()=>{
//         let num = Math.random();
//         if(num>0.5){
//             resolved(num)
//         }else{
//             rejected(num)
//         }
//     },500)
//
// })

// p.then((res)=>{
//     console.info('大于0.5的数字是：'+res)
// },(err)=>{
//     console.info('小于0.5的数字是：'+err)
// })

/*除此之外，每一个then方法都会返回一个新的Promise实例（不是原来那个），让then方法支持链式调用，并可以通过返回值将参数传递给下一个then(链式调用)*/
// p.then(function(num){
//     return num
// },function(num){
//     return num
// }).then(function(num){
//     console.log('大于0.5的数字：', num)
// },function(num){
//     console.log('小于等于0.5的数字', num)
// })


/*catch方法相当于.then((res)=>{},(err)=>{})函数的第二个参数*/
// p.then((res)=>{
//     console.info('大于0.5的数字：', res)
// }).catch((err)=>{
//     console.info('小于0.5的数字：', err)
// })


/*Promise.all() 1、当Promise1, Promise2, Promise3的状态都为成功态，则p为成功态； 2、当Promise1, Promise2, Promise3中有任意一个为失败态，则p为失败态；*/
// let Promise1 = new Promise(function(resolve, reject){})
// let Promise2 = new Promise(function(resolve, reject){})
// let Promise3 = new Promise(function(resolve, reject){})
//
// let p = Promise.all([Promise1, Promise2, Promise3])
//
// p.then(()=>{
//     // 三个都成功则成功
// },()=>{
//     // 只要有失败，则失败
// })

// const fs = require("fs");
//
// const getFile = (url)=>{
//     return new Promise((resolve,reject)=>{
//         fs.readFile(url,'utf8',(err,data)=>{
//             resolve(data)
//         })
//     })
// }
//
// getFile('1.txt').then((res)=>{
//     console.info(res);
//     return getFile(res)
// }).then((res)=>{
//     console.info(res);
//     return getFile(res)
// }).then((res)=>{
//     console.info(res)
// })


//flattenDeep([1,[2,3,[4],5]]) => [1,2,3,4,5];

let result = [];
function  flattenDeep(arr){
    arr.forEach((item)=>{
        if(item instanceof Array){
            flattenDeep(item)
        }else{
            result.push(item)
        }
    })
    return result
}

console.info(flattenDeep([1,[2,3,[4],5]]))









