const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
// const cardEl = document.getElementbyid('#heirarchy');
const beginHtml = `<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]>      <html class="no-js"> <!--<![endif]-->
<html>
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
  <body>
    <div class="row" id="department">`;

// const cardCreationMan = (manager) => { return `  <div class="col d-flex justify-content-center">
// <div class="card" style="width: 18rem">
//   <div class="card-body">
//     <h5 class="card-title">${manager.getempName}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${empMan}<h6>
//     <section class="card-text">${officeNumber}</section>
//     <section class="card-text">Employee ID: ${id}</section>
//     <section class="card-text">Email:${email}</section>
//   </div>
// </div>
// </div>
// </div>`;
// const cardCreationEng = `  <div class="col d-flex justify-content-center">
// <div class="card" style="width: 18rem">
//   <div class="card-body">
//     <h5 class="card-title">${empName}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">${empEng}<h6>
//     <section class="card-text">${gitHub}$</section>
//     <section class="card-text">Employee ID: ${id}</section>
//     <section class="card-text">Email:${email}</section>
//   </div>
// </div>
// </div>
// </div>`};
// const cardCreationIntern = `  <div class="col d-flex justify-content-center">
// <div class="card" style="width: 18rem">
//   <div class="card-body">
//     <h5 class="card-title">${empName}</h5>
//     <h6 class="card-subtitle mb-2 text-muted">$${empInt}<h6>
//     <section class="card-text">$${schoolName}</section>
//     <section class="card-text">Employee ID: ${id}</section>
//     <section class="card-text">Email:${email}</section>
//   </div>
// </div>
// </div>
// </div>`;

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
        type: 'name',
        name: 'empMan',
        message: 'What is your office number?',
        when(answers) {
            return answers.employee === 'Manager';
        },
    },
    {
        //Engineer selection:
        type: 'name',
        name: 'empEng',
        message: 'What is the github username for this engineer? ',
        when(answers) {
            return answers.employee === 'Engineer';
        },
    },
    {
        //Intern selection:
        type: 'name',
        name: 'empInt',
        message: 'Which school is the intern attending?',
        when(answers) {
            return answers.employee === 'Intern';
        },
    },
    {
        // Employee name
        name: 'name',
        type: 'input',
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
        name: 'email',
        type: 'input',
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
        return answers;
    } else {
        cardArr.push(cardStr);
        return getAnswers();
    }
};

function getAnswers() {
    return inquirer.prompt(questions).then((answers) => {
        console.log(answers.addAnother);

        switch (answers.employee) {
            case 'Manager': {
                //1. make a new instance of manager
                const manager = new Manager(
                    answers.empName,
                    answers.id,
                    answers.email,
                    answers.officeNumber
                );
                // const manager = new Manager(answers.empName, etc..)
                //createManagerCard(manager)
                //2. generate manager card html using your methods
                //3. checkAddAnother
                //5.
                console.log("I'm a manager!", answers);
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
                console.log("I'm an Engineer!", answers);
                break;
            }
            case 'Intern': {
                //genrate Intern card html
                const intern = new Intern(
                    answers.empName,
                    answers.id,
                    answers.email,
                    answers.officeNumber
                );
                console.log("I'm an intern", answers);
                break;
            }
        }
        if (!answers.addAnother) {
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
            // );
            // fs.writeFile('index.html', generatedHTML, (err) =>
            //     console.log(err)
            // );
            answersArr.push(answers);
            return answers;
        } else {
            answersArr.push(answers);
            return getAnswers();
        }
    });
}

getAnswers().then((answers) => {
    console.log(answersArr);
    const generatedHTML = cardData(
        answers.empMan,
        answers.empEng,
        answers.empInt,
        answers.name,
        answers.officeNumber,
        answers.gitHub,
        answers.schoolName,
        answers.id,
        answers.email
    );
    fs.writeFile('index.html', generatedHTML, (err) => console.log(err));
});
