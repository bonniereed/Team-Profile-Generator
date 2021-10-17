//importing class emloyee
const Employee = require('/lib/employee.js');

// importing manager subclass
const Manager = require('../lib/Manager');

// creates the manager object
test('creates an Manager object', () => {
    const manager = new Manager('Amy', 22, 'amy@gmail.com', 2);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole() employee role is retrieved
test('gets role of employee', () => {
    const manager = new Manager('Amy', 22, 'amy@gmail.com', 2);

    expect(manager.getRole()).toEqual('Manager');
});

module.exports = {
    Manager,
    manager,
};
