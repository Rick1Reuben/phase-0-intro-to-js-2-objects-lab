// Written my solution in this file!
// Sample employee object
const employee = {
    name: 'John Doe',
    age: 30,
    department: 'Engineering'
  };
  
  // Function to update an employee with a new key-value pair, returning a new object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
  }
  
  // Function to update an employee destructively with a new key-value pair
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from an employee object without modifying the original
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Function to delete a key from an employee object, modifying the original
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Example usage:
  
  // Updating employee with a new key-value pair non-destructively
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'position', 'Software Engineer');
  console.log('Updated employee:', updatedEmployee);
  
  // Destructively updating employee with a new key-value pair
  destructivelyUpdateEmployeeWithKeyAndValue(employee, 'salary', 50000);
  console.log('Employee after destructive update:', employee);
  
  // Deleting a key from employee object non-destructively
  const employeeWithoutAge = deleteFromEmployeeByKey(employee, 'age');
  console.log('Employee without age:', employeeWithoutAge);
  
  // Destructively deleting a key from employee object
  destructivelyDeleteFromEmployeeByKey(employee, 'department');
  console.log('Employee after destructive deletion:', employee);
  