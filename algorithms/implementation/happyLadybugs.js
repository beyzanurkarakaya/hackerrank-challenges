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
 * Complete the 'happyLadybugs' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING b as parameter.
 */

function happyLadybugs(b) {
    // Write your code here
    let obj = {}
    let input = b
    for(let i = 0; i < input.length; i++) {
        if(typeof obj[input[i]] === 'undefined') {
            obj[input[i]] = 1
        } else {
            obj[input[i]] = obj[input[i]] + 1
        }
    }
    for(let i in obj) {
        if(i !== '_' && obj[i] === 1)
            return "NO"
    }
    if(b.indexOf('_') !== -1)
        return "YES"
    for(let i = 1; i < b.length; i++) {
        if(b[i] === b[i - 1] || b[i] === b[i + 1])
            continue
        else
            return "NO"
    }
    return "YES"
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const n = parseInt(readLine().trim(), 10);

        const b = readLine();

        const result = happyLadybugs(b);

        ws.write(result + '\n');
    }

    ws.end();
}
