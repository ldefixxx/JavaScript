"use strict"
// =====================================   AUFGABE   ===================================== \\

// Prüfe in welchem Kurs "Paul" anwesend ist und füge seinen Freund "Luca" hinzu.
// Entferne "Gustaf" aus seinem Kurs da dieser kurzfristig nicht mehr teilnehmen kann.
// Stelle Sicher das "Gustaf" nicht mehr in seinem Kurs eingetrahen ist (Der Input sollte -1 sein)
// Sortiere kurs 1 aufsteigend und kurs 2 absteigend vom Alphabet.
// Füge "Anton" in den Kurs 1 hinzu, am Index 0, also an ersterstelle.

// Lösungen findest du in Zeile 100.

// =====================================   Teilnehmer   ===================================== \\

let englisch1 = [
    "Max",
    "Raul",
    "Paul",
    "Gustaf"
]

let englisch2 = [
    "Kleo",
    "Anna",
    "Jessica",
    "Leon"
]


console.log(englisch1.indexOf("Paul"))
englisch1.push("Luca")
console.log(englisch1)

console.log(englisch1.splice(3,1))







































































// variable.indexof()
// variable.push()

// variable.indexof()
// variable.splice(INDEX, 1,)

// variable.sort()
// variable.reduce()

// variable.splice(0, 0, "Anton")
