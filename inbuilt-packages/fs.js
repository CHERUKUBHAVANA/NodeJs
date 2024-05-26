var fs = require('fs')
// fs.writeFileSync("sample.txt", "Node is awesome. But sync functions block")
// console.log("Created a file")
// console.log("END")

// fs.writeFile("sample.txt", "Node is awesome.Async functions are used", (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("Created a file")
// })
// console.log("END")

// fs.appendFile("sample.txt", " More data appended", (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("Appending to a file")
// })
// console.log("END")

// fs.rename("sample.txt", "demo.txt", (err)=>{
//     if(err){
//         throw err;
//     }
//     console.log("Renaming a file")
// })

// fs.readFile("demo.txt", "utf-8", (err, data)=>{
//     // data, when logged, shows byte-encoding. To avoid it, use utf-8 as parameter to the callback
//     if(err){
//         throw err;
//     }
//     console.log(data)
// })

fs.unlink("demo.txt", (err)=>{
    if(err){
        throw err;
    }
    console.log("File deleted")
})