const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(empName, id, email) {
        const officeNumber = officeNumber;

        super(id, email, officeNumber);
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return officeNumber;
    }
}
