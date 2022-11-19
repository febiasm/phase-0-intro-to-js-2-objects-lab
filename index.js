// Write your solution in this file!
const employee = {
    name: "Trevor Thiru",
    streetAddress: "407473"
}


function updateEmployeeWithKeyAndValue(obj, key, value){
  return {
    ...obj,
    [key] : value
  }

}
console.log(updateEmployeeWithKeyAndValue(employee, "Febias", 454))
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "Febias", 456)
console.log(employee);

function deleteFromEmployeeByKey(obj, key){
    const newObj = {
        ...obj
    }
    delete newObj[key]

    return newObj

}

console.log(deleteFromEmployeeByKey(employee, "Work ID"))
console.log(employee);

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}

destructivelyDeleteFromEmployeeByKey(employee, "Work ID")
console.log(employee);