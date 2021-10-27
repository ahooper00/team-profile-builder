const generateTeamMembers = (teamProfile) => {
    const teamMemberHtmlList = teamProfile.map(generateEmployeeHtml);
    return teamMemberHtmlList.join('\n');
}

const generateEmployeeHtml = (employee) => {
    let roleInfo;
    switch (employee.getRole()) {
        case "Manager":
            roleInfo = 'Office number: ' + employee.getOfficeNumber();
            break;
        case "Engineer":
            roleInfo = 'GitHub: ' + employee.getGithub();
            break;
        case "Intern":
            roleInfo = 'School: ' + employee.getSchool();
            break;
    }
    return `
<div class="employee-card col-md-3 pt-4 pb-4 m-2 bg-light h-50 d-inline-block">
    <h4 class="employee-name text-center">${employee.getName()}</h4>
    <p class="employee-type text-center">${employee.getRole()}</p>
    <div class="card-body bg-secondary p-2 h-75">
        <ul class="list-group">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: ${employee.getEmail()}</li>
            <li class="list-group-item">${roleInfo}</li>
        </ul>
    </div>
</div>
`
}

const generateHtml = (teamProfile) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<main>
    <div class="container-fluid w-100 bg-info">
        <h1 class="text-center display-4 p-4">My Team</h1>
    </div>

    <div class="row justify-content-center">
        ${generateTeamMembers(teamProfile)}
    </div>
</main>
`
}

module.exports = generateHtml;