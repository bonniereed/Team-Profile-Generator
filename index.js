const inquirer = require("inquirer");
const fs = require("fs");
const html = (name, location, bio, linkedIn, gitHub) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Name: ${name}</h1>
    <h1>Location: ${location}</h1>
    <h1>Bio: ${bio}</h1>
    <h1>LinkedIn: ${linkedIn}</h1> 
    <h1>GitHub: ${gitHub}</h1>
</body>
</html>`;
inquirer
  .prompt([
    {
      // name
      name: "name",
      type: "input",
      message: "what's your name",
    },
    {
      // location
      name: "location",
      type: "input",
      message: "what's your location",
    },
    {
      // bio
      name: "bio",
      type: "input",
      message: "what's your bio",
    },
    {
      // LinkedIn
      name: "linkedIn",
      type: "input",
      message: "what's your linkedIn",
    },
    {
      // GitHub
      name: "gitHub",
      type: "input",
      message: "what's your gitHub",
    },
  ])
  .then((answers) => {
    const generatedHTML = html(
      answers.name,
      answers.location,
      answers.bio,
      answers.linkedIn,
      answers.gitHub
    );
    fs.writeFile("index.html", generatedHTML, (err) => console.log(err));
  });
