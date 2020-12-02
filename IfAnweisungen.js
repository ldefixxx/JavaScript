"use strict"
let student = ["Max", "Moritz", "Jeff", "Klaus", "Leon", "Moritz"]

let search = "Jeff"
let index = student.indexOf(search)



if(student.indexOf(search) === -1){
    console.log(search + " ist nicht in der liste zufinden.")
} else {
    console.log(search + " ist in der liste auf index " + index + ".")
}

let studentsNumber = student.length
let maxNumber = 6

console.log(studentsNumber)

if(studentsNumber < maxNumber){
    console.log("Es sind noch " + studentsNumber + "/" + maxNumber + " Plätze frei." )
}else if(studentsNumber == maxNumber){
    console.log("Die genaue Teilnehmer Zahl von "+ maxNumber + " wurde erreicht.")   
}
else{
    console.log("Die Teilehmerzahl is leider schon voll.")
}
