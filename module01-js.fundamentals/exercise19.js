let numbers = [42, 8, 4, 16, 15, 23];
console.log(numbers);
numbers.sort((x,y)=>x-y);
console.log(numbers);
let names = ["ali", "veli", "ayşe",
    "bilge", "seda", "ümit", "şeyma", "şima", "şule"
]
console.log(names);
names.sort((left,right)=>right.localeCompare(left,'tr'));
console.log(names);
