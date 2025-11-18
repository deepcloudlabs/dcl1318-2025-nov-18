function fun(x=1, y=2, z=3) {
    return x * y + z;
}

console.log(fun())
console.log(fun(3))
console.log(fun(3,5))
console.log(fun(3,5,7))
console.log(fun(3,5,7,10,11,12,13))