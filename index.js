const { prompt } = require("inquirer");
const db = require("./db");



init();

// initial function at NPM start
function init() {
    runPrompts();
}

function runPrompts() {
    prompt([
        {
            // Load these prompts on NPM start
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                // {
                //     name: "Add an Employee",
                //     value: "ADD_EMPLOYEE"
                // },
                // {
                //     name: "Update Employee Role",
                //     value: "UPDATE_EMPLOYEE_ROLE"
                // },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add a Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add a Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }

    ]).then(res => {
        let choice = res.choice;
        // Call the functions from what the user selects
        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewAllEmployees();
                break;
            // case "ADD_EMPLOYEE":
            //     addEmployee();
            //     break;
            // case "UPDATE_EMPLOYEE_ROLE":
            //     updateEmployeeRole();
            //     break;
            case "VIEW_DEPARTMENTS":
                viewAllDepartments();
                break;
            case "ADD_DEPARTMENT":
                createDepartment();
                break;
            case "VIEW_ROLES":
                viewAllRoles();
                break;
            case "ADD_ROLE":
                createRole();
                break;
            default:
                quit();
        }
    }
    )
}


// View all employees
function viewAllEmployees() {
    db.allEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees);
        })
        .then(() => runPrompts());
}

// View all roles
function viewAllRoles() {
    db.allRoles()
        .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
        })
        .then(() => runPrompts());
}

// View all deparments
function viewAllDepartments() {
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            console.log("\n");
            console.table(departments);
        })
        .then(() => runPrompts());
}

// Add a role
function createRole() {
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, name }) => ({
                name: name,
                value: id
            }));

            prompt([
                {
                    name: "title",
                    message: "What is the name of the role?"
                },
                {
                    name: "salary",
                    message: "What is the salary rate?"
                },
                {
                    type: "list",
                    name: "department_id",
                    message: "Which department does the role fall in under?",
                    choices: departmentChoices
                }
            ])
                .then(role => {
                    db.addRole(role)
                        .then(() => console.log(`Added ${role.title} to the database`))
                        .then(() => runPrompts())
                })
        })
}


// Add a department
function createDepartment() {
    prompt([
        {
            name: "name",
            message: "What is the name of the department?"
        }
    ])
        .then(res => {
            let name = res;
            db.addDepartment(name)
                .then(() => console.log(`Added ${name.name} to the database`))
                .then(() => runPrompts())
        })
}

// Quit the application
function quit() {
    console.log("Thank you for using Employee Tracker application");
    process.exit();
}