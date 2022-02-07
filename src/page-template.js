const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

function generatePage(Intern, Manager, Engineer) {
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
        </div>
    </div>
    </div>
    <container>
        <div class="row">
            <div class="employees col-12">
                ${data.Intern}
            </div>
        </div>
    </container>
    <container>
    <div class="row">
        <div class="employees col-12">
            ${data.Manager}
        </div>
    </div>
</container>
<container>
<div class="row">
    <div class="employees col-12">
        ${data.Engineer}
    </div>
</div>
</container>
        
        
    </body>
    </html>
    `
}

module.exports = generatePage(Intern, Manager, Engineer);