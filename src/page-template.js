
const generateEngineer = function(engineer) {
    return `<container>
    <div class="row">
        <div class="employees col-12">
           <p> ${engineer.name} </p>
           <p> id: ${engineer.id} </p>
           <p> email: ${engineer.email} </p>
           <p> github: ${engineer.github} </p>
        </div>
    </div>
    </container>`



}
const generateManager = function(manager) {
    return `<container>
    <div class="row">
        <div class="employees col-12">
           <p> ${manager.name} </p>
           <p> id: ${manager.id} </p>
           <p> email: ${manager.email} </p>
           <p> office number: ${manager.officeNumber} </p>
        </div>
    </div>
    </container>`
}

const generateIntern = function(intern) {
    return `<container>
    <div class="row">
        <div class="employees col-12">
           <p> name: ${intern.name} </p>
           <p> id: ${intern.id} </p>
           <p> email: ${intern.email} </p>
           <p> school: ${intern.school} </p>
        </div>
    </div>
    </container>`
}

function generatePage(allEmployees) {

    const employeeCards = [];
    for (var i = 0; i < allEmployees.length; i++){
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
        <div class="container-fluid">
        <div class="row">
        <div class="col-12">
            <h2>Employees</h2>
            ${employeeCards.join("")}
        </div>
        
        </div>
        </div>
    </body>
    </html>
    `
}

module.exports = generatePage;