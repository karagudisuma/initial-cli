#!/usr/bin/env node

const inquirer = require('inquirer');
const Aboutme = require('./commands/Aboutme');
const Contactme  = require('./commands/Contactme');
const Experience = require('./commands/Experience');


const Index = () => {
  console.log("Welcome to my profile...!!");

  inquirer.prompt([
    {
      type : "list",
      choices : ['aboutme', 'contactme', 'experience'],
      name: "answer"
    }
  ]).then((response) => {
    console.log(response);
    if(response.answer == 'aboutme'){
      Aboutme();
    }
    else if(response.answer == 'contactme'){
      Contactme();
    }
    else{
      Experience();
    }
  })
};

Index();
module.exports = Index;
