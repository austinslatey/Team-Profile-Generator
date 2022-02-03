//require all paths
    //employee
    //engineer
    //intern
    //manager
    const Employee = require('./lib/Employee');
    const Engineer = require('./lib/Engineer');
    const Intern = require('./lib/Intern');
    const Manager = require('./lib/Manager');
    const generateTemplate = require('./src/template');
   
    const allEmployees = [];
    //inquirer
    const inquirer = require('inquirer');
    //path
    const path = require('path');
    //fs
    const fs = require('fs');

 //const employee = new Employee("blah", "blkah", "bl@kah")

    const completeText = generateTemplate(allEmployees);

    //fs.writeFile(__dirname, comp)


// questions array for employee

    //name

    //id

    // email

    // role

    
