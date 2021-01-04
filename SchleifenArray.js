"use strict"

let students = ["Max", "Anna", "Jessi"]

//Typische For schleife
for(let i = 0; i < students.length; i++){
    console.log("index: " + i + " " + students[i])
}

// in     Der index wird mitgegeben
for (const i in students){
    console.log("in: "+ students[i])
}

// of    Nur die reinen Einträge werden ausgelesen
for(const student of students){
    console.log("of: " + student)
}