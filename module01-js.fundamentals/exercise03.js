function fun() {
    for (let i=0;i<10;++i){
        console.log(i);
    }
    {
        const y= 42;
        y++;
    }
    console.log(y);

}

fun()
