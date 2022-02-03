const generateTeam = team => {

    const generateEmployee = employee => {
        return `
        `;
    }

    const generateEmployee = intern => {
        return `
        `;
    }

    const generateEmployee = engineer => {
        return `
        `;
    }


    let completeText = "";

    team.forEach(member => {
        if (member.getRole() === intern) {
            completeText+= generateEmployee(member);
        }
    })


return completeText;


}

module.exports = generateTeam;