let Employee = function(identity,fullname,iban,salary,departments){
    this.identity = identity;
    this.fullname = fullname;
    this.iban = iban;
    this.departments = departments;
    this.salary = salary;
    this.sayHello = function(){
        console.log(`Hello, ${this.fullname}!`);
    }
    this.increaseSalary = function(rate){
        this.salary *= (1.0+rate/100) ;
    }
};
let kate = new Employee("1","kate austen","tr1", 300_000,["IT"]);
kate.sayHello();
kate.increaseSalary(50);
console.log(kate.salary);