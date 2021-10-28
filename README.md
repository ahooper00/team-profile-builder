# Team Profile Builder
Week-10 homework - Object-Oriented Programming (OOP)

# Desciption 
This team profile builder is a command-line-input application that uses Node.js to run. It requests information about a software engineering team, and generates an HTML webpage displaying a summary for each team member.
```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

# Installation
For this application to run, the user must first run an 'npm install' in the command line to install all dependencies, after which the user can begin the application by inputting 'node .' in the command-line.

# Usage
Once the application is launched in the command-line, the user is presented with a series of prompts. First, the user is asked if they would like to add a team member. If yes, the user is then asked what role the employee has, and can choose from a list of three options: 'Manager', 'Engineer', or 'Intern'. After an option is selected, the same three prompts are displayed requesting the team member's name, ID, and email. The fourth prompt varies depending on the role of the employee. For 'Manager', the fourth question asks for the manager's office number; For 'Engineer', the prompt requests a GitHub username; and for 'Intern', the school that the intern attends/attended is required. After this last question is answered, the user is then prompted to add another team member. Once the user has inputted all their desired team members, the user can select the 'No' option when asked if they would like to add another team member, and a HTML file is generated. This file contains the information regarding each team member that has been inputted. The user then needs to simply open the HTML file in a browser to view their software engineering team.
This application uses the 'Inquirer' and 'FS' node modules. 
Jest is used to perform the tests for each class and constructors to ensure that act the way we want them to.

# Tests
Four test files have been created and used for this application, each targetting a different type of team member - 'Employee', 'Manager', 'Engineer', and 'Intern'. The tests aim to confirm that each employee type is what it says it is, and that they contain the correct information. The tests check that each team member have a name, ID and email. As each role ('Manager', 'Engineer', and 'Intern') extend from the parent 'Employee' class, the tests also check that these three roles are indeed employees.