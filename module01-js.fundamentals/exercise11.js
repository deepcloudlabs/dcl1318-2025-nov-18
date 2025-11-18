let fullname = "jack bauer";
let iban = "TR1";
let identity = "11111111110";
let salary = 200_000;
let departments = ["IT", "HR", "SALES"]

let jack = {identity,fullname,iban,salary,departments};
let jack2 = {...jack}; // shallow cloning
jack2.departments = [...jack.departments];
jack2.departments.push("FINANCE");
console.log(jack.departments);
console.log(jack2.departments);