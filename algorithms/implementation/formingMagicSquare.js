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

function cost(s, define) {
    s = s.map(a => a.join('')).join('')
    let cost = 0
    for (let i = 0; i < s.length; i++) {
        cost += Math.abs(parseInt(s[i]) - parseInt(define[i]))
    }
    return cost
}

/*
 * Complete the 'formingMagicSquare' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY s as parameter.
 */

function formingMagicSquare(s) {
    // Write your code here
    const define = ['618753294','816357492','834159672','438951276','672159834','276951438','294753618','492357816']
    let min = 100
    for (let i = 0; i < define.length; i++) {
        const costResult = cost(s, define[i])
        if (costResult < min) min = costResult
    }
    return min
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let s = Array(3);

    for (let i = 0; i < 3; i++) {
        s[i] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));
    }

    const result = formingMagicSquare(s);

    ws.write(result + '\n');

    ws.end();
}
