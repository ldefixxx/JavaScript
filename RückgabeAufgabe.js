"use strict"

let currency = "€"
let amount = "20,37";

console.log("Totalcost: ", amount);

let amountEng = amount.replace(",",".");

amountEng = amountEng * 100; //in Cent Betrag.
console.log("2€    | " + Math.floor(amountEng / 200) + "x")
amountEng = amountEng - Math.floor(amountEng / 200) *200;

console.log("1€    | " + Math.floor(amountEng / 100) + "x")
amountEng = amountEng - Math.floor(amountEng / 100) *100;

console.log("50cnt | " + Math.floor(amountEng / 50) + "x")
amountEng = amountEng - Math.floor(amountEng / 50) *50;

console.log("20cnt | " + Math.floor(amountEng / 20) + "x")
amountEng = amountEng - Math.floor(amountEng / 20) *20;

console.log("10cnt | " + Math.floor(amountEng / 10) + "x")
amountEng = amountEng - Math.floor(amountEng / 10) *10;

console.log("5cnt  | " + Math.floor(amountEng / 5) + "x")
amountEng = amountEng - Math.floor(amountEng / 5) *5;

console.log("2cnt  | " + Math.floor(amountEng / 2) + "x")
amountEng = amountEng - Math.floor(amountEng / 2) *2;

console.log("1cnt  | " + Math.floor(amountEng / 1) + "x")
amountEng = amountEng - Math.floor(amountEng / 1) *1;
