function fun(){
    return  new Promise(
        (resolve,reject) => {
            if (Math.random() > 0.5) {
                reject("Ooops");
            }
            resolve(42);
        })
}

console.log("Application is just started!")
fun().then(result => console.log(result))
    .catch(error => console.log(error));
console.log("Application is just comlpeted!")
