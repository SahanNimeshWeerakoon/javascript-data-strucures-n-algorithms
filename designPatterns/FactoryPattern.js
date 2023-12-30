function Developer(name) {
    this.name = name;
    this.type = "Developer";
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
        }
    }
}

function Say() {
    console.log(`Hey my name is ${this.name} and I am a ${this.type}`);
}

let empFactory = new EmployeeFactory();
let employees = [];

employees.push(empFactory.create("Sathika", 1));
employees.push(empFactory.create("Sahan", 2));
employees.push(empFactory.create("Tharangani", 1));
employees.push(empFactory.create("Weerakoon", 1));

employees.forEach(emp => {
    Say.call(emp);
});