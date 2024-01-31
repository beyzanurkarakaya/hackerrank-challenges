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
 * Complete the 'quartiles' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function quartiles(arr) {
    // Write your code here
    let sortedArr = arr.sort((a, b) => a - b)
    let median, leftArr = [], rightArr = [], leftMedian, rightMedian
    
    if(arr.length%2 == 0) {
        leftArr = sortedArr.slice(0, arr.length/2)
        rightArr = sortedArr.slice(arr.length/2)
    } else {
        leftArr = sortedArr.slice(0, Math.floor(arr.length/2))
        rightArr = sortedArr.slice(Math.floor(arr.length/2) + 1)
    }
    
    median = findMedian(sortedArr)
    leftMedian = findMedian(leftArr)
    rightMedian = findMedian(rightArr)
    
    let resultArr = [leftMedian, median, rightMedian]
    return resultArr
}

// Function for finding the median
function findMedian(arr) {
    let median
    if(arr.length%2 == 0) {
        median = (arr[arr.length/2 - 1] + arr[arr.length/2]) / 2
    } else {
        median = arr[Math.floor(arr.length/2)]
    }
    return parseInt(median)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const data = readLine().replace(/\s+$/g, '').split(' ').map(dataTemp => parseInt(dataTemp, 10));

    const res = quartiles(data);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
