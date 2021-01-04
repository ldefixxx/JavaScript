"use strict"

// 67
//       Check if number ist kleiner oder größer.
// 24    kleiner:  Randomzahl - Player1 Zahl.     ERGEBNIS: Ist der Abstand.
// 89    größer: Player1 zahl - Randomzahl.       ERGEBNIS: Ist der Abstand.

let numberArray = [
    20,
    78
]

function luckGame(numberArray) {
    let scoreRange = [];
    let result = [];
    let randomNumber = Math.floor(Math.random() * 100) + 1

    for (let i in numberArray) {
        scoreRange.push(numberArray[i])
    } for (let i in scoreRange) {
        if (randomNumber > scoreRange[i]) {
            let range = Math.abs(scoreRange[i] - randomNumber)
            result.push(range)
        } else {
            let range = Math.abs(randomNumber - scoreRange[i]) 
            result.push(range)
        }
    }
    let maxRange = 0;
    for(let i in result){
        if(result[i] >= maxRange){
            maxRange = result[i]
        }
    }
    let PlayerMaxRange = result.indexOf(maxRange) +1
    console.log("\nZufallszahl:" + randomNumber)
    console.log("Player1: " + numberArray[0] + " | ~ " + result[0])
    console.log("Player2: " + numberArray[1] + " | ~ " + result[1])
    console.log("=====================")
    console.log("Player" + PlayerMaxRange + " ist weiter von der Zahl entfernt.")
    if(PlayerMaxRange == 1){
        console.log("Player2 hat somit gewonnen !!!\n")
    }else{
        console.log("Player1 hat somit gewonnen !!!\n")
    }
    return PlayerMaxRange
}

luckGame(numberArray)