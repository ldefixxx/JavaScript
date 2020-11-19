"use strict"

let spacer = "\n"
let array = [
    "Max Mustermann",
    "Leon Marc Schmidt",
    "Katrin Schmidt",
    "Jessica Czerwinski"    
]

//Zeigt wie viele Einträge in dem Array vorhanden sind.
console.log(spacer + "Array einträge: " + array.length);

//Auf einen Index aus dem Array zugreifen.
console.log("Der erste Eintrag ist: " + array[0] + spacer);

//Elemente in einem Array hinzufügen
array.push("Luca Max Schmidt")
console.log(array);

/*Das letzte Element aus einem Array löschen.
 *
 * let lastElement = array.pop()
 * Hier wird der gelöschte Eintrag in einer Variabale gespeichert.
 */
console.log("LÖSCHEN DES LETZTEN EINTRAGES")
array.pop()
console.log(array);

//Array Eintrag überschreiben
array[0] = "Maximilian Müller";
console.log("UPDATE EINES EINTRAGES")
console.log(array);