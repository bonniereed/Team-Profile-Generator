class Employee {
    constructor(empName, id, email) {
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Employee';
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.empName;
    }
    getEmail() {
        return this.email;
    }
}
module.exports = Employee;
