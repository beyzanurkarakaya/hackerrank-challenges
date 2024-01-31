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
 * Complete the 'interQuartile' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY values
 *  2. INTEGER_ARRAY freqs
 */

function interQuartile(values, freqs) {
    // Print your answer to 1 decimal place within this function
    let newValues = [], leftValues, rightValues, leftMedian, rightMedian
    for(let i = 0; i < freqs.length; i++) {
        for(let j = 1; j <= freqs[i]; j++) {
            newValues.push(values[i])
        }
    }
    newValues.sort((a, b) => a - b)
    if(newValues.length%2 == 0) {
        leftValues = newValues.slice(0, newValues.length/2)
        rightValues = newValues.slice(newValues.length/2)
    } else {
        leftValues = newValues.slice(0, Math.floor(newValues.length/2))
        rightValues = newValues.slice(Math.floor(newValues.length/2) + 1)
    }
    
    leftMedian = findMedian(leftValues)
    rightMedian = findMedian(rightValues)
    
    console.log(parseFloat(rightMedian - leftMedian).toFixed(1))
}

function findMedian(arr) {
    let median
    if(arr.length%2 == 0) {
        median = (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2
    } else {
        median = arr[Math.floor(arr.length/2)]
    }
    return median
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const val = readLine().replace(/\s+$/g, '').split(' ').map(valTemp => parseInt(valTemp, 10));

    const freq = readLine().replace(/\s+$/g, '').split(' ').map(freqTemp => parseInt(freqTemp, 10));

    interQuartile(val, freq);
}
