let myName = "Leon";

let dayOfMonth = (new Date()).getDate();

let monthName = (new Date()).getMonth();

let yearName = (new Date()).getFullYear();

let seperator = "."



console.log("Heute ist der " + dayOfMonth.toString() + seperator + monthName.toString() + seperator + yearName.toString());
console.log(typeof seperator);