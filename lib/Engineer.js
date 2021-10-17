const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(empName, id, email, gitHub) {
        const gitHub = gitHub;

        super(empName, id, email);
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Engineer';
    }
    getgitHub() {
        return gitHub;
    }
}
