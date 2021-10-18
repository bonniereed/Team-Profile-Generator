//importing the employee class
const Employee = require('../lib/employee.js');

//imports the intern subclass
const Intern = require('../lib/Intern');

// creates intern object
test('creates an Intern object', () => {
    const intern = new Intern('Amy', 22, 'amy@gmail.com', 'SMU');

    expect(intern.school).toEqual(expect.any(String));
});

// etSchool() is retrieved
test('gets employee school', () => {
    const intern = new Intern('Amy', 22, 'amy@gmail.com', 'SMU');

    expect(intern.getSchool()).toEqual(
        expect.stringContaining(intern.school.toString())
    );
});

//getRole() is retrieved
test('gets role of employee', () => {
    const intern = new Intern('Amy', 22, 'amy@gmail.com', 'SMU');

    expect(intern.getRole()).toEqual('Intern');
});
