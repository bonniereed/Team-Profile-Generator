class Employee {
    constructor(empName, id, email) {
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;
