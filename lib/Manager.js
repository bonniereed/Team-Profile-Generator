const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empName, id, email, officeNumber) {
        this.officeNumber = officeNumber;

        super(empName, id, email);
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
}
