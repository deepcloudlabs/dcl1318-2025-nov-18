circle = {
    x: 0,
    y: 10,
    radius: 100,
    draw: {
        color: "red",
        style: "solid"
    },
    area: function(){
        return Math.PI * this.radius ** 2;
    }
}
console.log(circle.radius)
console.log(circle.draw.color)
console.log(circle["radius"])
console.log(circle["draw"]["color"])
p = "radius";
console.log(circle[p]);
for (let p in circle) {
    console.log(p);
    if (typeof(circle[p]) === "function") {
        console.log(circle[p]());
    }
    if (typeof(circle[p]) === "object") {
        for (let r in circle[p]) {
            console.log(r);
        }
    }
}