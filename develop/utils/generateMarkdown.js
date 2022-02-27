// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!=='NO LICENSE'){
    return `<img src="https://img.shields.io/badge/license-${license}-critical.svg">`


  }
  else{
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!=='NO LICENSE'){
    return `* [License](#license)`


  }
  else{
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!=='NO LICENSE'){
    return `## License
    
    This project is licensed under ${license}`


  }
  else{
    return ''
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}

  ## Table of Contents
* [Installation](#installation)

* [Usage](#usage)
  
${renderLicenseLink(data.license)}

## Installation
${data.installation}

## Usage  

${renderLicenseSection(data.license)}

  
`;
}

module.exports = generateMarkdown;
