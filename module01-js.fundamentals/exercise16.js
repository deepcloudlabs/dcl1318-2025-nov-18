function fun(x, y, z) {
    if(arguments.length !== 3){
        throw new Error('you must have exactly 3 arguments')
    }
    for (const arg of arguments) {
        console.log(arg)
    }
    return x * y + z;
}

//console.log(fun())
//console.log(fun(3))
// console.log(fun(3,5))
console.log(fun(3,5,7))
//console.log(fun(3,5,7,10,11,12,13))