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
 * Complete the 'fairRations' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY B as parameter.
 */

function fairRations(B) {
    // Write your code here
    let loaves = 0
    for(let i = B.length; i-- > 0;) {
        if(B[i] % 2 !== 0) {
        loaves += 2
        B[i]++
        if(Number.isNaN(B[i - 1]++))
            return "NO"
        }
    }
    return loaves
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const N = parseInt(readLine().trim(), 10);

    const B = readLine().replace(/\s+$/g, '').split(' ').map(BTemp => parseInt(BTemp, 10));

    const result = fairRations(B);

    ws.write(result + '\n');

    ws.end();
}
