const connection = require("./connection");
class DB{
  constructor(connection){
    this.connection = connection;
  }

  viewDepartments() {
    return this.connection.promise().query(
      "SELECT department.id, department.name FROM department;"
    );
  }
  viewEmployees() {
    return this.connection.promise().query(
      "SELECT employee.id, employee.first_name, employee.last_name, position.title, department.name AS department, position.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN position on employee.position_id = position.id LEFT JOIN department on position.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
      );
  }
  addEmployee(employee) {
    return this.connection.promise().query(
      "INSERT INTO employee SET ?", employee);
  }
  updateEmployeeRole(employeeId) {
    return this.connection.promise().query(employeeId);
  }
  viewAllRoles() {
    return this.connection.promise().query(
      "SELECT position.id,position.title, department.name AS department, position.salary FROM position LEFT JOIN department on position.department_id = department.id;");
  }
  addNewRole(position) {
    return this.connection.promise().query(position);
  }
  addNewDepartment(department) {
    return this.connection.promise().query(
      `INSERT INTO department SET ?`,department
    );
  }
}

module.exports = new DB(connection);


