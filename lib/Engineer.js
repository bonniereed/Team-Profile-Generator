const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empName, id, email, gitHub) {
        super(empName, id, email);
        this.gitHub = gitHub;
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Engineer';
    }
    getGitHub() {
        return this.gitHub;
    }
    getName() {
        return this.empName;
    }
}
module.exports = Engineer;
