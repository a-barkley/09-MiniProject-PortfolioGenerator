const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            message: 'What is your name?',
            name: 'name',
        },
        {
            message: 'Where are you located?',
            name: 'location',
        },
        {
            message: 'What is a hobby you have?',
            name: 'bio',
        },
        {
            message: 'What is your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            message: 'What is your Github URL?',
            name: 'github',
        },
        ])
    .then((response) => {
        console.log(response)
        fs.writeFile('../index.html', 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <p>${response.name}</p>
            <p>${response.location}</p>
            <p>${response.bio}</p>
            <p>${response.linkedin}</p>
            <p>${response.github}</p>
        </body>
        </html>`
        , (err) =>
        err ? console.error(err) : console.log('Success!')
      )}
      );
     