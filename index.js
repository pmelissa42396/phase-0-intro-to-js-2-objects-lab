// Write your solution in this file!
const employee={}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object by copying all properties from the original employee
    const updatedEmployee = { ...employee };
  
    // Assign the new value to the specified key in the new object
    updatedEmployee[key] = value;
  // we made a new copy of the function "updatedEmployee" and what we updated the new object to make a new key and a new value.
  
    // Return the new object which is updatedEmployee
    return updatedEmployee;
  }
    // Update `employee` with the given `key` and `value`
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    employee[key]=value;
    // we are editing the OG object with function name: "employee" and we are updating with new key and a new value.
    return employee;
     // When we say return we want to return the object "employee"
}
//prompt(3): deleteFromEmployeeByKey(): this function should take in a employee Object and a key. 
//cont'd:It should delete the property with that key from the employee Object. This should not mutate the original employee Object;
//cont'd:It should return a new Object that doesn't include the identified key-value pair. Hint: use the spread operator!

function deleteFromEmployeeByKey(employee,key) {
    //Instructions say to take in ONLY employee Object and a key 
   const updatedEmployee = {...employee};
   //Explanation: We are inputting the employee object because that's the folder where we want to delete the prop from 
   // cont'd: ... is to update NONDES. By using this, we create a clone of the OG object "updated employee" and save it into a new variable we can then update the new obj
   delete updatedEmployee[key];
   //We use the Delete Op to remove Prop from the "updatedEmployee" obj using the specified key
   return updatedEmployee;
   //Now we want the return to be our modified obj.
}
  // Prompt 4:destructivelyDeleteFromEmployeeByKey(): this function should work the same as deleteFromEmployeeByKey() but it should mutate the employee Object.
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
//Define the function destructivelyDeleteFromEmployeeByKey() that takes two arguments: the employee object and the key to be deleted.
//Inside the function, use the delete keyword to remove the specified key from the employee object.
//Make sure to return the updated employee object.
