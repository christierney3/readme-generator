// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, username, email, tests, contributing}) {

  // Create Table of Contents
  let tableOfContents = 'Table of Contents';

  // Create conditionals if an area is left blank

  if (installation !== '') {
    tableOfContents += `*[Installation](#installtion)`
  };

  if (usage !== '') {
    tableOfContents += `*[Usage](#usage)`
  };

  if (contributing !== '') {
    tableOfContents += `*[Contributing](#contributing)`
  };

  if (tests !== '') {
    tableOfContents += `*[Tests](#tests)`
  };

`## ${title}

## ${description}
  
[![License](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})


## ${tableOfContents}

## ${installation}

## ${usage}

## ${contributing}

## ${tests}
]`


}

module.exports = generateMarkdown;
