const Engineer = require("Engineer.test.js");
const Intern = require("Intern.test.js");
const Manager = require("Manager.test.js");

class Employee {
  constructor(empName, id, email) {
    this.empName = empName;
    this.id = id;
    this.email = email;
  }
}

// test("id must be a number", () => {
//   const id = 1;
//   const newEmployee = new Employee(id);
//   expect(typeof newEmployee.toBe("number"));
// });

describe("Employee", () => {
  describe("Initialization", () => {
    // Positive test
    it("should create an object with a 'text' property of type of employee", () => {
      // Arrange
      const text = "Employee selection";

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
