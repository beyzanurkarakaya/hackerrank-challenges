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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = "0123456789"
    let lower_case = "abcdefghijklmnopqrstuvwxyz"
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let special_characters = "!@#$%^&*()-+"
    let d = 0, l = 0, u = 0, s = 0
    password.split('').forEach(x => {
        if (numbers.indexOf(x) !== -1)
            d = 1
        if (lower_case.indexOf(x) !== -1)
            l = 1
        if (upper_case.indexOf(x) !== -1)
            u = 1
        if (special_characters.indexOf(x) !== -1)
            s = 1
    })
    if(n > 6) {
        return 4 - d - l - u - s
    }else{
        if( (n +  (4 - d - l - u - s)) > 6)
          return (4 - d - l - u - s)
        else
        return 6 - n
    } 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
