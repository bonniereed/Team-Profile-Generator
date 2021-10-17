//importing the employee class
const Employee = require('lib/employee.js');

// requiring the engineer subclass
const Engineer = require('../lib/Engineer');

// creates an engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Amy', 22, 'amy@gmail.com, seekamy');

    expect(engineer.github).toEqual(expect.any(String));
});

// getGithub() now retrieves github username
test('gets engineer github value', () => {
    const engineer = new Engineer('Amy', 22, 'amy@gmail.com, seekamy');

    expect(engineer.getGithub()).toEqual(
        expect.stringContaining(engineer.github.toString())
    );
});

// getRole() now retrieves employee role
test('gets role of employee', () => {
    const engineer = new Engineer('Amy', 22, 'amy@gmail.com, seekamy');

    expect(engineer.getRole()).toEqual('Engineer');
});

module.exports = {
    Engineer,
    engineer,
};
