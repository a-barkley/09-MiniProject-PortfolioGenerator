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
            <title>Portfiolio Generator</title>
            <link rel="stylesheet" href="./assets/style.css">
        </head>
        
        <body>
        
            <header>
                <h1>Hi, my name is ${response.name}</h1>
                <h2>I live in ${response.location}</h2>
            </header>
        
            <div id="bio">
                <p>A hobby I have is ${response.bio}</p>
            </div>
        
            <hr>
        
            <footer>
                <ul>
                    <li>LinkedIn: <a href="${response.linkedin}" target="_blank">${response.linkedin}</a></li>
                    <li>GitHub: <a href="${response.github}" target="_blank">${response.github}</a></li>
                </ul>
            </footer>
        
        </body>
        </html>`
        , (err) =>
        err ? console.error(err) : console.log('Success!')
      )}
      );
     
