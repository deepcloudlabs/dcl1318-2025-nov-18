class Employee {
    #identity;
    #fullname;
    #iban;
    #departments;
    #salary;

    constructor(identity, fullname, iban, salary, departments) {
        this.#identity = identity;
        this.#fullname = fullname;
        this.#iban = iban;
        this.#departments = departments;
        this.#salary = salary;
        // this.sayHello = this.sayHello.bind(this);
    }

    get salary() {
        return this.#salary;
    }

    get fullname() {
        return this.#fullname;
    }

    set fullname(new_fullname) {
        if (new_fullname && new_fullname.length > 3) {
            this.#fullname = new_fullname;
        }
    }

    sayHello = () => {
        console.log(`Hello, ${this.fullname}!`);
    }

    increaseSalary(rate) {
        this.#salary *= (1.0 + rate / 100);
    }
}

let kate = new Employee("1", "kate austen", "tr1", 300_000, ["IT"]);
kate.sayHello(); // sayHello(kate)
setInterval(kate.sayHello, 3_000);
kate.increaseSalary(80);

class Engineer extends Employee {}