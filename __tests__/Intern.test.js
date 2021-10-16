const Employee = require('employee.test.js');

class Intern extends Employee {
    constructor(manager, empName, intern) {
        const school = school;
        super(id, email, officeNumber);
        this.empName = empName;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return 'Intern';
    }
    getSchool() {
        return school;
    }
}
describe('Intern', () => {
    describe('Initialization', () => {
        // Positive test
        it("should create an object with a 'text' property of type of employee", () => {
            // Arrange
            const text = 'Employee selection';

            // Act
            const obj = new Employee(text);

            // Assert
            expect(obj.text).toEqual(text);
        });

        // Exception test
        it("should throw an error if not provided a 'text' value", () => {
            // Arrange
            const cb = () => new Employee();
            const err = new Error(
                "Expected parameter 'text' to be a non empty string"
            );

            // Assert
            expect(cb).toThrowError(err);
        });
    });
});

module.exports = {
    Intern,
    intern,
};
