async function fun() {
    if (Math.random() > 0.5) {
        throw "Ooops";
    }
    return 42;
}

console.log("Application is just started!")
fun().then(result => console.log(result))
    .catch(error => console.log(error));
console.log("Application is just comlpeted!")
