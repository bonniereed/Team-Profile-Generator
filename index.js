const inquirer = require('inquirer');
const fs = require('fs');
const cardEl = document.getElementbyid('#heirarchy');
const cardData = (
    empMan,
    empEng,
    empInt,
    name,
    officeNumber,
    gitHub,
    schoolName,
    id,
    email
) => `<!DOCTYPE html>
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
    <div class="row" id="department">
      <div class="col d-flex justify-content-center">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${empMan}${empEng}${empInt}<h6>
            <section class="card-text">${officeNumber}${gitHub}${schoolName}</section>
            <section class="card-text">Employee ID: ${id}</section>
            <section class="card-text">Email:${email}</section>
          </div>
        </div>
      </div>
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
`;
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

function getAnswers() {
    return inquirer.prompt(questions).then((answers) => {
        if (answers.choices === 'No') {
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
            fs.writeFile('index.html', generatedHTML, (err) =>
                console.log(err)
            );
        } else {
            return getAnswers();
        }
    });
}

// getAnswers().then((answers) => {
//     const generatedHTML = cardData(
//         answers.empMan,
//         answers.empEng,
//         answers.empInt,
//         answers.name,
//         answers.officeNumber,
//         answers.gitHub,
//         answers.schoolName,
//         answers.id,
//         answers.email
//     );
//     fs.writeFile('index.html', generatedHTML, (err) => console.log(err));
// });

// const createCard = (new) => {
//     // Create card

//const cardEl = document.createElement('div').style="width:18rem";
//cardEl.classList.add('col d-flex justify-content-center');
//const cardEl = document.createElement('div');
//cardEl.classList.add('col d-flex justify-content-center');

//     cardEl.classList.add('cardBody');
//     cardEl.setAttribute('key', tip.tip_id);

//     // Create card header
//     const cardHeaderEl = document.createElement('h5');
//     cardBodyEl.classList.add('card-title');
//     cardHeaderEl.innerHTML = `${name};

//     // Create card body
//     const cardBodyEl = document.createElement('h6');
//     cardBodyEl.classList.add('card-subtitle');
//     cardBodyEl.innerHTML = `<section>${empMan}${empEng}${empInt}</section>`;
//     cardBodyEl.innerHTML = `<section>${officeNumber}${gitHub}${schoolName}</section>`;
//     cardBodyEl.innerHTML = `<section>${id}</section>`;
//     cardBodyEl.innerHTML = `<section>${email}</section>`;

//     // Append the header and body to the card element
//     cardEl.appendChild(cardHeaderEl);
//     cardEl.appendChild(cardBodyEl);

//     // Append the card element to the tips container in the DOM
//     tipsContainer.appendChild(cardEl);
// };
