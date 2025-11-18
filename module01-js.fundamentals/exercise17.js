function gun({x, y, z, p, q, r}) {
    return x + y + z + p * q * r;
}

gun({
    x: 100,
    p: 10,
    r: 20,
    y: 200,
    z: 300,
    q: 30
})