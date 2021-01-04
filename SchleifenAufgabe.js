"use strict"

let levels = [
    "A1", "A2", "B1", "B2", "C1", "C2"
]

let price = [
    400, 500, 550, 600, 650, 700,
]

//activate readline function
let readline = require('readline-sync');
let input = readline.question("Which course are you searching for? \n" + levels + "\nType 'price' to see the cost of every level. \n");

input = input.toString().toUpperCase();

let counter = 0
let newAmount = 0

if (input === "PRICE") {
        for (let i = 0; i < levels.length; i++) {
            console.log(levels[i] + "|" + price[i])
        }
}


else if (levels.includes(input)) {
    //Berechnet wie viele Steps es bis zu einem bestimmten Kurs sind.
    if (levels.includes(input)) {
        for (let i = 0; i < levels.length; i++) {
            //Wenn der searchedCourse mit dem Index Übereinstimmt, wird die Schleife gestoppt.
            if (levels[i] === input) {
                counter = i
                break
            }
        }

        //Speichert die Kurse in der Variable pickedCourse um diese später auszugeben.
        let pickedCourse = []

        for (let i in levels) {
            if (i <= counter) {
                pickedCourse.push(levels[i])
            }
        }
        console.log("Dein Endbetrag kostet:")

        // Rechnet die Summe aus dem Array price aus und addiert eine Endsumme.
        for (let i = 0; i <= counter; i++) {
            console.log(pickedCourse[i] + "|" + price[i] + " €")
            newAmount = newAmount + price[i]
        }
        console.log("-------------------")
        console.log("TOTAL: " + newAmount + " €" + "\n")
    }
} else {
    console.log("Level: " + input + " existiert nicht.")
}
