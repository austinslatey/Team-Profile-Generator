//require all paths
    //employee
    //engineer
    //intern
    //manager
    const Employee = require('./lib/Employee');
    const Engineer = require('./lib/Engineer');
    const Intern = require('./lib/Intern');
    const Manager = require('./lib/Manager');
    
    const fs = require('fs');
    //path
    const path = require('path');
    //inquirer
    const inquirer = require('inquirer');
    //const pageHTML = generatePage(Intern, Manager, Engineer);

    
   

 //const employee = new Employee("", "blkah", "bl@kah")
    const employee = new Employee("intern", "engineer", "manager");
    //const completeText = generateTemplate(allEmployees);

    

    const allEmployees = [];


// questions array for employee
const promptUser = () => {
    return inquirer.prompt( questions = [
        {
        type: 'input',
        name: 'title',
        message: 'What is the employees name?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the ID'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the email adress?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the role?',
        choices: ["Employee", "Engineer", "Intern", "Manager"]
    }
]);
   
}

 function getNewEmployee() {
    
        const employee = inquirer.prompt(questions);


        switch (employee.role) {
            case "Engineer":
                const github = inquirer.prompt({
                    type: "input",
                    name: "github",
                    message: "Enter engineer's github here: "
                });
                allEmployees.push(new Engineer(employee.name, employee.id, employee.email, github.value));
                break;
            case "Intern":
                const school = inquirer.prompt({
                    type: "input",
                    name: "value",
                    message: "What is the intern's school: "
                });
                allEmployees.push(new Intern(employee.name, employee.id, employee.email, school.value));
                break;
            case "Manager": 
                const officeNumber = inquirer.prompt({
                    type: "input",
                    name: "value",
                    messsage: "Please enter the mangager's office number: "

                });
                allEmployees.push(new Manager(employee.name, employee.id, employee.email, officeNumber.value));
                break;
        }
        if (err) {
            console.log(err)
        }
    }
     

    



function init() {
    let employee = true;
    promptUser()
    .then(getNewEmployee)
    .then(generateTeam => {
        return generateTeam(team);
    });  
     fs.writeFile(path.join('./index.html', pageHTML), completeText, err => {
         console.log(err);
     
    }
    )}

init();

   