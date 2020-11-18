let myName = "Leon";

let dayOfMonth = (new Date()).getDate();

let monthName = (new Date()).getMonth();

let yearName = (new Date()).getFullYear();

let seperator = "."

let textInput = "Heute ist der " + dayOfMonth.toString() + seperator + monthName.toString() + seperator + yearName.toString()



console.log(textInput);
console.log(typeof seperator);

//Anzahl einer String-Kette
console.log(textInput.length)

console.log(textInput.charAt(0))
console.log(textInput.indexOf("i" ));