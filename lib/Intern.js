const Employee = require('./Employee');
class Intern extends Employee {
    constructor(empName, id, email, school) {
        this.school = school;
        super(empName, id, email);
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}
