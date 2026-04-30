let student={name: "Aishwarya",age: 18};
let details={city:"Hyderabad", course: "Computer Science"};
let fullDetails={...student, ...details};
console.log(fullDetails);