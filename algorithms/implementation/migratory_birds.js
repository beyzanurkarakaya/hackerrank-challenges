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
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    let tempArr = [...arr].sort((a, b) => a - b);
    let mostFrequent = { num: 0, type: 0 };
    let currentNum = 0;

    for (let i = 0; i < tempArr.length - 1; i++) {
        let currentType = tempArr[i];
        currentNum = currentType === tempArr[i + 1] ? ++currentNum : 0;

        if (currentNum > mostFrequent.num) {
            mostFrequent.num = currentNum;
            mostFrequent.type = currentType;
        }
    }
    return mostFrequent.type;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
