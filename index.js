const inquirer = require('inquirer');
const fs = require('fs');


inquirer 
.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can someone install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How can someone use this project?',
    },
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'What technologies did you use?',
        choices: ['Javascript', 'CSS', 'Node.js', 'HTML'],
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Use this command to run tests:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can someone contribute to this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you have for the project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    
])
.then((answers) => {
    console.log(answers);

    const readMe = `# ${answers.title}
[![License](https://img.shields.io/badge/License-${answers.license}-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
## Table of Contents:
    
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Questions](#questions)
- [License](#license)
    
## Description:
    
${answers.description}
    
## Technologies:
    
Project was created with:
    
1. ${answers.technologies[0]}
2. ${answers.technologies[1]}
3. ${answers.technologies[2]}
4. ${answers.technologies[3]}
    
## Installation:
    
${answers.installation}
       
## Usage: 

\`\`\`

${answers.usage}  

\`\`\`

## Contributions:
    
${answers.contributing}

## Tests:

${answers.tests}
    
## Questions:
    
### Github - [${answers.github}](https://github.com/${answers.github}) 
### Email - ${answers.email}
    
## License: 
    
${answers.license}`

    fs.writeFile('readmeExample.md', `${readMe}`, (err) => console.log('README logged!')
);

});

