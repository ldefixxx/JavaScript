"use strict"

function myFunction(name){
    console.log(name + ", wie kann ich dir weiterhelfen?")
}

let readline = require('readline-sync');
let input = readline.question("=====GAMECHANGER=====" + "\"\nType 1 to continue... \n");

if(input === "1"){
    myFunction("Leon")
}else{
    console.log("Schade... bis zum nächsten mal!")
}

