'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    // Write your code here
    
    const inputS = new TextEncoder().encode(s)
    const reversedS = new TextEncoder().encode(s.split('').reverse().join(''))
    
    let inputDiff = [], reversedDiff = []
    for(let i = 0; i < inputS.length - 1; i++) {
        inputDiff.push(Math.abs(inputS[i]-inputS[i+1]))
    }
    for(let j = 0; j < inputS.length - 1; j++) {
        reversedDiff.push(Math.abs(reversedS[j]-reversedS[j+1]))
    }
    
    return compareArr(inputDiff, reversedDiff) ? "Funny" : "Not Funny"
}

function compareArr(firstArr, secondArr) {
    if(firstArr.length == secondArr.length) {
        for(let i = 0; i < firstArr.length; i++) {
            if(firstArr[i] != secondArr[i]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = funnyString(s);

        ws.write(result + '\n');
    }

    ws.end();
}
