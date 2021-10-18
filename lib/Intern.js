const Employee = require('./Employee');
class Intern extends Employee {
    constructor(empName, id, email, school) {
        super(empName, id, email);
        this.school = school;
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
    getName() {
        return this.empName;
    }
}
module.exports = Intern;
