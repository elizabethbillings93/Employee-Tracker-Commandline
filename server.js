const inquirer = require("inquirer");
const db = require("./db");
require("console.table");


const questions=[
       {
           type: 'list',
           message: 'Please choose from the following options',
           name: 'userchoice',
           choices:[
               {
                    name:'View all departments',
                    value:"View all departments"
                },
                {
                    name:'View all roles',
                    value: "View all roles"
                },
                {
                    name: "View all employees",
                    value:'View all employees'
                },
                {
                    name: 'Add a department',
                    value:'Add a department'
                },
                {
                    name:'Add a role',
                    value:'Add a role'
                },
                {
                    name:'Add an employee',
                    value:'Add an employee'
                },
                {
                    name:'Update an employee role',
                    value:'Update an employee role'
                }
           ]
       }
    ]
    
    function mainMenu(){
        inquirer.prompt(questions)
        .then(res => {
    let userchoice = res.userchoice;
    switch (userchoice) {
      case "View all employees":
        showEmployees();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
       db.updateEmployeeRole();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "View all departments":
        showDepartments();
        break;
      case "View all roles":
        viewRoles();
        break;
      case "Add a role":
        addRole();
        break;
    }
  }
  )
}

function showEmployees() {
  db.viewEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => mainMenu());
}
function showDepartments() {
    db.viewDepartments()
      .then(([rows]) => {
        let departments = rows;
        console.log("\n");
        console.table(departments);
      })
      .then(() => mainMenu());
  }

function viewRoles() {
    db.viewAllRoles()
      .then(([rows]) => {
        let roles = rows;
        console.log("\n");
        console.table(roles);
      })
      .then(() => mainMenu());
    }

    function addRole() {
        db.addNewRole()
          .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            console.table(roles);
          })
          .then(() => mainMenu());
      }

    function addDepartment() {
        inquirer.prompt ([
          {
            name: 'departmentName',
            message: 'What is your department name?',
            type: 'input'
          }
        ]).then (answers => {
          let department = {
            name : answers.departmentName
       }
          db.addNewDepartment(department)
          .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            showDepartments();
          })
        }) 
      }

      function addEmployee(){
        inquirer.prompt ([
          {
            name: 'firstName',
            message: 'What is your first name?',
            type: 'input'
          },
          {
            name: 'lastName',
            message: 'What is your last name?',
            type: 'input',
            
          },
          {
            name: 'positionId',
            message: 'What is your position id?',
            type: 'input'
          },
          {
            name: 'managerId',
            message: "What is your manager's id?",
            type: 'input'
          }
        ]).then (answers => {
          let employee = {
            manager_id: answers.managerId,
            position_id: answers.positionId,
            first_name: answers.firstName,
            last_name: answers.lastName
       }
          db.addEmployee(employee)
          .then(([rows]) => {
            let roles = rows;
            console.log("\n");
            showEmployees();
          })
        }) 
      }



mainMenu();
