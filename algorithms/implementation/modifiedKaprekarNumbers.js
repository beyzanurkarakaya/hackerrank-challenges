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
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    // Write your code here
    let ans = []
    p = BigInt(p)
    q = BigInt(q)
    while(p <= q) {
        let str = p * p
        str = str.toString().split("")
        let mid = Math.floor(str.length / 2)
        let first = ""
        for(let i = 0; i < mid; i++) {
            first += str[i]
        }
        first =+ first
        let second = ""
        for(let i = mid; i < str.length; i++) {
            second += str[i]
        }
        second =+ second
        if(first + second == p) {
            ans.push(p)
        }
        p++
    }
    if(ans.length == 0) {
      console.log('INVALID RANGE')
    } else {
      console.log(ans.join(" "))
    }
}

function main() {
    const p = parseInt(readLine().trim(), 10);

    const q = parseInt(readLine().trim(), 10);

    kaprekarNumbers(p, q);
}
