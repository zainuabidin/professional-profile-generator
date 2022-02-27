// TODO: Include packages needed for this application
const inquirer =require('inquirer')
const fs =require('fs')
const path=require('path')
const generateMarkdown=require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'what is the title of your project?'

    },
    {
        type:'input',
        name:'description',
        message:'give a brief description of your project?'

    },
    {
        type:'list',
        name:'license',
        message:'what is the license of your project?',
        choices:['MIT','ISC','GNU','APACHE 2.0','NO LICENSE']


    },
   { type:'input',
        name:'installation',
        message:'What packages did you install'}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile('/README.md',generateMarkdown({...answers}))
    })

}


// Function call to initialize app
init();
