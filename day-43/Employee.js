class Employee {
    constructor(id, name, gender, salary) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.salary = salary;
    }
    display() {
        console.log(`Id: ${this.id}, Name: ${this.name}, Gender:${this.gender}, Salary:${this.salary}`);
    }
}
module.exports = Employee;