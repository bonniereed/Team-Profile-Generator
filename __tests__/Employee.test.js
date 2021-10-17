const Employee = require('../lib/Employee');

// Employee Object is created
test('creates an employee object', () => {
    const employee = new Employee('Amy', 22, 'amy@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// getName() now retrieves Employee Name
test('gets employee name', () => {
    const employee = new Employee('Amy', 22, 'amy@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// getId() now retrieves employee ID
test('gets employee ID', () => {
    const employee = new Employee(('Amy', 22, 'amy@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// getEmail() now retrieves employee email
test('gets employee email', () => {
    const employee = new Employee('Amy', 22, 'amy@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// getRole() now gets employee role
test('gets role of employee', () => {
    const employee = new Employee('Amy', 22, 'amy@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 


