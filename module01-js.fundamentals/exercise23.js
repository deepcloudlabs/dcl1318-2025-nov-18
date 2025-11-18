const timerId = setInterval(function (){
  console.log("Hello Mars!");
}, 1_000);
setTimeout(function (){
    clearInterval(timerId);
}, 30_000);