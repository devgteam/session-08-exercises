const student ={
    id: 1, 
    name: "Peter", 
    isActive: true
}; 

console.log(typeof student);

const jsonText = JSON.stringify(student);
console.log(jsonText);
console.log(typeof jsonText);

const restoredStudent = JSON.parse(jsonText);
console.log(restoredStudent.name);