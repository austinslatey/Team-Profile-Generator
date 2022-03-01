
const generateEngineer = function (engineer) {
    return `<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <h3>Engineer ${engineer.name} </h3>
            <p> id: ${engineer.id} </p>
            <p> email: ${engineer.email} </p>
            <p> github: ${engineer.github} </p>
        </div>`




}
const generateManager = function (manager) {
    return `<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <h3>Manager ${manager.name} </h3>
            <p> id: ${manager.id} </p>
            <p> email: ${manager.email} </p>
            <p> office number: ${manager.officeNumber} </p>
        </div>`
}

const generateIntern = function (intern) {
    return `<div class="container">
    <div class="row">
        <div class="col-sm-4">
            <h3>Intern ${intern.name} </h3>
            <p> id: ${intern.id} </p>
            <p> email: ${intern.email} </p>
            <p> school: ${intern.school} </p>
        </div>`
}

function generatePage(allEmployees) {

    const employeeCards = [];
    for (var i = 0; i < allEmployees.length; i++) {
        const employee = allEmployees[i]
        switch (employee.getRole()) {
            case 'engineer':
                const engineerCard = generateEngineer(employee);
                employeeCards.push(engineerCard);
                break;
            case 'manager':
                const managerCard = generateManager(employee);
                employeeCards.push(managerCard);
                break;
            case 'intern':
                const internCard = generateIntern(employee);
                employeeCards.push(internCard);
                break;
            default: console.log("something is wrong");
        }


    }

    return ` <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team-Profile</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="../assets/styles.css">
    
    </head>
    <body>
    <div class="jumbotron text-center">
      <h1>Employee Roster</h1>      
    </div>    
  <h3>Some of the employees</h3><br>
  <div class="card">
      <p>${employeeCards.join("")}</p>
    </div>
    </body>
    </html>
    `
}

module.exports = generatePage;