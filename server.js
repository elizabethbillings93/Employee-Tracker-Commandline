const inquirer = require("inquirer");
const { viewDepartmentBudgets } = require("./db");
const uppiedate= require("./db");
const db = require("./db");
require("console.table");


const questions=[
       {
           type: 'list',
           message: 'Please choose from the following options',
           name: 'options',
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
        viewEmployees();
        break;
      case "Add an employee":
        addEmployee();
        break;
      case "Update an employee role":
        uppiedate.updateEmployeeRole();
        break;
      case "Add a department":
        addDepartment();
        break;
      case "View all departments":
        viewDepartments();
      case "View all roles":
        viewRoles();
        break;
      case "Add a role":
        addRole();
        break;
      // default:
      //   quit();
    }
  }
  )
}
function showEmployees() {
  db.viewEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.log(employees);
    })
    .then(() => mainMenu());
}


// addEmployee
function showEmployees() {
  database.viewEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => mainMenu());
}
// updateEmployeeRole
// addDepartment
// viewRoles
// addRole
// quit

mainMenu();
