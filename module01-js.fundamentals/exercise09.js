let circle = {
    x: 0,
    y: 10,
    radius: 100,
    draw: {
        color: "red",
        style: "solid"
    }
};
let {x,y,...rest} = circle;
// let x = circle.x;
// let y = circle.y;
console.log(x,y);
console.log(rest);