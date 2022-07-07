// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (!data.licenses.length == 0) {
    return;
  } else {
    data.licenses.forEach(element => {
      
    });
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Project Description:
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usageInfo}

  ## License
  ${data.licenses}

  ## Contributing
  ${data.guidelines}

  ## Tests
  ${data.instructions}

  ## Questions?
  Reach out:
  [GitHub Profile](github.com/${data.username})
  
  If you have any questions, comments, or super great ideas, feel free to reach out to me, via email, at ${data.email}.

`;
}

module.exports = generateMarkdown;