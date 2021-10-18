const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, id, email, officeNumber) {
        super(empName, id, email);
        this.officeNumber = officeNumber;
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getName() {
        console.log(this.empName);
        return this.empName;
    }
}

module.exports = Manager;
