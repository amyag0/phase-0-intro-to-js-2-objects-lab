const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  }; // define employee variable
  
function updateEmployeeWithKeyAndValue( employee , key, value) {
    return Object.assign({}, employee, { [key]: value });
} //function that takes 3 arguments; doesnt  mutate employee

function destructivelyUpdateEmployeeWithKeyAndValue(driver, key, value) {
    employee[key] = value;
    return employee;
} //same deal but destructive
  
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);//create new employee that is given values of employee
    delete newEmployee[key];
    return newEmployee;
}
  
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}