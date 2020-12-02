let students1 = ["Leon",]
let students2 = ["Jacob"]

let searchedUser = "Anna"

if( students1.includes(searchedUser) || students2.includes(searchedUser)){
    console.log( searchedUser + " ist in der Teilnehmerliste eingetragen.")
}else{
    console.log("Der gesuchte Name: " + searchedUser + " ist nicht in der Teilnehmerliste eingetragen.")
}


//============Add new user to minimal course volume=============

let courseCounter1 = students1.length
let courseCounter2 = students2.length

console.log("\n")

let newUser = "Hannes"

if(courseCounter1 < courseCounter2){
    students1.push(newUser)
}else if(courseCounter1 > courseCounter2){
    students2.push(newUser)
}else{
    students1.push(newUser)
}

console.log("\n")
console.log(students1)
console.log(students2)



//====================== Einen User löschen ===========================

console.log("\n")

let deleteUser = "Leon"

if(students1.includes(deleteUser)){
    let index = students1.indexOf(deleteUser)
    students1.splice(index,1)
    console.log(deleteUser + " wurde aus der liste students1 entfernt.")
}else if(students2.includes(deleteUser)){
    index = students2.indexOf(deleteUser)
    students2.splice(index,1)
    console.log(deleteUser + " wurde aus der liste students1 entfernt.")
}else{
    console.log("Es ist kein " + deleteUser + " in der Liste eingetragen.")
}

//====================== Rabatt berechnen ===========================

courseCounter1 = students1.length
courseCounter2 = students2.length

let totalUser = courseCounter1 + courseCounter2

let rabatte = [
    0.0,
    0.1,
    0.25,
    0.30,
    0.5,
]

let totalPrice = 299.99;
let rabatteCounter = 0;

if(totalUser <= 0){
    let rabattPrice = rabatte[0] * totalPrice;
    let newPrice = totalPrice - rabattPrice
    console.log("Der Kurs kostet: " + newPrice + " €.");
}else if(totalUser == 1){
    let rabattPrice = rabatte[1] * totalPrice;
    let newPrice = totalPrice - rabattPrice
    console.log("Der Kurs kostet: " + newPrice + " €.");
}else if(totalUser == 2){
    let rabattPrice = rabatte[2] * totalPrice;
    let newPrice = totalPrice - rabattPrice
    console.log("Der Kurs kostet: " + newPrice + " €.");
}else if(totalUser == 3){
    let rabattPrice = rabatte[3] * totalPrice;
    let newPrice = totalPrice - rabattPrice
    console.log("Der Kurs kostet: " + newPrice + " €.");
}else{
    let rabattPrice = rabatte[4] * totalPrice;
    let newPrice = totalPrice - rabattPrice
    console.log("Der Kurs kostet: " + newPrice + " €.");
}

console.log(totalUser)
console.log(students1)
console.log(students2)