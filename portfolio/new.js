const promise = new Promise((resolve, reject) =>{
    resolve("lets go")
})
promise.then((data)=>{
    console.log(data)
})