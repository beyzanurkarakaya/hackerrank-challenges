'use strict';

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
 * Complete the 'weightedMean' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY X
 *  2. INTEGER_ARRAY W
 */

function weightedMean(X, W) {
    // Write your code here
    let multipleArray = []
    for(let i = 0; i < X.length; i++) {
        multipleArray.push(X[i] * W[i])
    }
    
    let numerator = 0
    multipleArray.forEach((a) => numerator += a)
    
    let denominator = 0
    W.forEach((item) => denominator += item)
    
    console.log(parseFloat(numerator/denominator).toFixed(1))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const vals = readLine().replace(/\s+$/g, '').split(' ').map(valsTemp => parseInt(valsTemp, 10));

    const weights = readLine().replace(/\s+$/g, '').split(' ').map(weightsTemp => parseInt(weightsTemp, 10));

    weightedMean(vals, weights);
}
