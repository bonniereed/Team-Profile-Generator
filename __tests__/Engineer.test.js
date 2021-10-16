const Employee = require('employee.test.js');

class Engineer extends Employee {
    constructor(manager, empName, engineer) {
        const gitHub = gitHub;

        super(id, email, officeNumber);
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
describe('Engineer', () => {
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
    Engineer,
    engineer,
};
