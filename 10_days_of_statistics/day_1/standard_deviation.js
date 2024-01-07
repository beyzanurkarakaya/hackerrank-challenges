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
 * Complete the 'stdDev' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function stdDev(arr) {
    // Print your answers to 1 decimal place within this function
    let arrSum = 0, newArrSum  = 0
    arr.forEach((element) => arrSum += element)
    let mean = arrSum/arr.length
    
    let newArr = arr.map((x) => (x - mean) ** 2)
    newArr.forEach((element) => newArrSum += element)
    
    let stdDev = newArrSum/newArr.length
    console.log(parseFloat(Math.sqrt(stdDev)).toFixed(1))
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const vals = readLine().replace(/\s+$/g, '').split(' ').map(valsTemp => parseInt(valsTemp, 10));

    stdDev(vals);
}
