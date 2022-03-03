// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `
## ${data.title}


![License](https://img.shields.io/badge/License-${data.license}-blue.svg)

## License description: (https://opensource.org/licenses/${data.license})

## Description:
${data.description}


## Table of Contents
* [Description](#description)
* [Installtion](#installation)
* [Usage Info](#usage)
* [Contributions](#contributing)
* [Testing](#tests)
* [Questions](#questions)


## Installation: 
${data.installation}


## Usage: 
${data.usage}


## Contributions: 
${data.contributing}


## Tests: 
${data.tests}


## Questions:
If you have any questions please contact me at ${data.email} or https://github.com/${data.username}
`


}

module.exports = generateMarkdown;
