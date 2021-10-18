const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
// const cardEl = document.getElementbyid('#heirarchy');
const beginHtml = `<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title></title>
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <link rel="stylesheet" href="./assets/style.css" />
</head>
<header>
  <nav class="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Team Profile Generator</span>
    </nav>
</header>
  <body>
    <div class="row" id="department">`;

const cardCreationMan = (manager) => {
    return `  <div class="row d-flex justify-content-center">
    <div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${manager.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${manager.getRole()}<h6>
    <section class="card-text">${manager.getOfficeNumber()}</section>
    <section class="card-text">Employee ID: ${manager.getId()}</section>
    <section class="card-text">Email:${manager.getEmail()}</section>
  </div>
</div>`;
};
const cardCreationEng = (engineer) => {
    return `
<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${engineer.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${engineer.getRole()}<h6>
    <section class="card-text">${engineer.getGitHub()}</section>
    <section class="card-text">Employee ID: ${engineer.getId()}</section>
    <section class="card-text">Email:${engineer.getEmail()}</section>
  </div>
</div>`;
};
const cardCreationIntern = (intern) => {
    return `<div class="card" style="width: 18rem">
  <div class="card-body">
    <h5 class="card-title">${intern.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${intern.getRole()}<h6>
    <section class="card-text">${intern.getSchool()}</section>
    <section class="card-text">Employee ID: ${intern.getId()}</section>
    <section class="card-text">Email:${intern.getEmail()}</section>
  </div>
</div>`;
};

const endHtml = `<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
crossorigin="anonymous"
></script>
</body>
</html>
;`;

const questions = [
    {
        // Select an employee to add
        type: 'list',
        name: 'employee',
        message:
            'What type of employee would you like to add? (use arrow keys)',
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        //Manager selection:
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        when(answers) {
            return answers.employee === 'Manager';
        },
    },
    {
        //Engineer selection:
        type: 'input',
        name: 'gitHub',
        message: 'What is the github username for this engineer? ',
        when(answers) {
            return answers.employee === 'Engineer';
        },
    },
    {
        //Intern selection:
        type: 'input',
        name: 'school',
        message: 'Which school is the intern attending?',
        when(answers) {
            return answers.employee === 'Intern';
        },
    },
    {
        // Employee name
        type: 'input',
        name: 'empName',
        message: "What is the employee's name?",
    },
    {
        // Employee ID number
        name: 'id',
        type: 'input',
        message: "What is the employee's ID number?",
    },
    {
        // Employee email
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
    },
    {
        // Confirm if another employee needs to be added
        name: 'addAnother',
        type: 'confirm',
        message: 'Do you have another employee to add?',
        choices: ['Yes', 'No'],
    },
];

const cardArr = [];
const checkAddAnother = (answers, cardStr) => {
    if (!answers.addAnother) {
        cardArr.push(cardStr);
        console.log(cardArr);
        //construct html
        const generatedHTML = beginHtml + cardArr.join() + endHtml;
        fs.writeFileSync('./output/index.html', generatedHTML);
        //write your file
        return;
    } else {
        cardArr.push(cardStr);
        return getAnswers();
    }
};

function getAnswers() {
    return inquirer.prompt(questions).then((answers) => {
        // console.log(answers.addAnother);
        console.log(answers.empName);
        switch (answers.employee) {
            case 'Manager': {
                //1. make a new instance of manager
                const manager = new Manager(
                    answers.empName,
                    answers.id,
                    answers.email,
                    answers.officeNumber
                );
                const cardStr = cardCreationMan(manager);
                checkAddAnother(answers, cardStr);
                //createManagerCard(manager)
                //2. generate manager card html using your methods
                //3. checkAddAnother
                //5.
                break;
            }
            case 'Engineer': {
                //generate Engineer card html
                //
                const engineer = new Engineer(
                    answers.empName,
                    answers.id,
                    answers.email,
                    answers.gitHub
                );
                const cardStr = cardCreationEng(engineer);
                checkAddAnother(answers, cardStr);
                break;
            }
            case 'Intern': {
                //genrate Intern card html
                const intern = new Intern(
                    answers.empName,
                    answers.id,
                    answers.email,
                    answers.school
                );
                const cardStr = cardCreationIntern(intern);
                checkAddAnother(answers, cardStr);
                break;
            }
        }
    });
}

getAnswers().then((answers) => {
    // const generatedHTML = cardData(
    //     answers.empMan,
    //     answers.empEng,
    //     answers.empInt,
    //     answers.name,
    //     answers.officeNumber,
    //     answers.gitHub,
    //     answers.schoolName,
    //     answers.id,
    //     answers.email
    //     );
    //     fs.writeFile('index.html', generatedHTML, (err) => console.log(err));
});
