//require all paths
//employee
//engineer
//intern
//manager
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template')

const fs = require('fs');
//path
const path = require('path');
//inquirer
const inquirer = require('inquirer');
//const pageHTML = generatePage(Intern, Manager, Engineer);




//const employee = new Employee("", "blkah", "bl@kah")
//const completeTxt = generateTemplate(allEmployees);



const allEmployees = [];


// if no
// take the allEmployees array, and loop through it, and add each employee card to the template
const getEngineer = (employee) => {
    inquirer.prompt([{
        type: 'input',
        name: 'github',
        message: 'Enter engineer\s github here: '
    // },
    // {
    //     type: 'input',
    //     name: 'id',
    //     message: 'What is the ID'

    // },
    // {
    //     type: 'input',
    //     name: 'email',
    //     message: 'What is the email adress?'
    // },
    // {
    //     type: 'input',
    //     name: 'value',
    //     message: 'What is the intern\s school: '
    }])
        .then(data => {
            allEmployees.push(new Engineer(employee.name, employee.id, employee.email, data.github));
            continuePrompt();
        });
}

const getIntern = (employee) => {
    inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'name',
        //     message: 'What is the employees name?'
        // },
        // {
        //     type: 'input',
        //     name: 'id',
        //     message: 'What is the ID'

        // },
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: 'What is the email adress?'
        // },
        {
            type: 'input',
            name: 'value',
            message: 'What is the intern\s school: '
        }])
        .then(data => {
            allEmployees.push(new Intern(employee.name, employee.id, employee.email, data.value));
            continuePrompt();
        });
}

const getManager = (employee) => {
    inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'name',
        //     message: 'What is the employees name?'
        // },
        {
            type: 'input',
            name: "value",
            messsage: 'Please enter the mangager\s office number: '

        }])
        .then(data => {
            allEmployees.push(new Manager(employee.name, employee.id, employee.email, data.value));
            continuePrompt();
        })

}




// questions array for employee
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employees name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email adress?'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is the role?',
            choices: ['Engineer', 'Intern', 'Manager']
        }
    ]);

}


function start() {
    promptUser().then(employee => {
        switch (employee.role) {
            case "Engineer":
                getEngineer(employee);


                break;
            case "Intern":
                getIntern(employee);

                break;

            case "Manager":
                getManager(employee);

                break;

            default: init();
        }
        // if (err) {
        //     console.log(err)
        // }

    });
}

const continuePrompt = function () {
    inquirer.prompt([{
        type: "list",
        name: "repeat",
        message: "Would you like to add another employee?",
        choices: ["yes", "not right now", "exit"]
    }])
        .then(answer => {
            if (answer.repeat === "yes") start();
            else if(answer.repeat === "not right now"){
                console.log("end");
                init();
                start();
            }
            else {
                init();
            }
        })
}
start();

function init() {
    // let employee = true;
    //getNewEmployee()
    //getManager();
    console.log(allEmployees);
    fs.writeFile('index.html', generatePage(allEmployees), err => {
        console.log(err);

    }
    )
}
// function getNewEmployee() {

//     //const employee = inquirer.prompt(questions);

//     promptUser()
//     .then(employee => {
//         switch (employee.role) {
//             case "Engineer":
//                 const github = inquirer.prompt({
//                     type: "input",
//                     name: "github",
//                     message: "Enter engineer's github here: "
//                 });
//                 allEmployees.push(new Engineer(employee.name, employee.id, employee.email, github.github));
//                 break;
//             case "Intern":
//                 const school = inquirer.prompt({
//                     type: "input",
//                     name: "value",
//                     message: "What is the intern's school: "
//                 });
//                 allEmployees.push(new Intern(employee.name, employee.id, employee.email, school.value));
//                 break;
//             case "Manager":
//                 const officeNumber = inquirer.prompt({
//                     type: "input",
//                     name: "value",
//                     messsage: "Please enter the mangager's office number: "

//                 });
//                 allEmployees.push(new Manager(employee.name, employee.id, employee.email, officeNumber.value));
//                 break;
//         }
//         if (err) {
//             console.log(err)
//         }

//     })

// }




// init();





