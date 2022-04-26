const connection = require("./connection");
class database{
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
      "SELECT employee.employee_id, employee.first_name, employee.last_name, LEFT JOIN position on employee.role_id = role.id LEFT JOIN department on position.department_id = department.id;"
    );
  }
  addEmployee(employee) {
    return this.connection.promise().query("Add Employee",employee);
  }
  updateEmployeeRole(employeeId) {
    return this.connection.promise().query(employeeId);
  }
  viewAllRoles() {
    return this.connection.promise().query("SELECT position.id, position.title, department.name AS department, position.salary FROM position LEFT JOIN department on position.department_id = department.id;");
  }
  addRole(position) {
    return this.connection.promise().query(position);
  }
  addDepartment(department) {
    return this.connection.promise().query(department);
  }
}

module.exports = new database(connection);


