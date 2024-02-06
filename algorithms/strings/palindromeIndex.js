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
 * Complete the 'palindromeIndex' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function palindromeIndex(s) {
    // Write your code here
    let index = -1

    if (palindrome(s)) {
        return index
    }
        
    for(let j = 0; j < s.length/2; j++) {
        if(s[j] !== s[s.length - 1 - j]) {
            if(s[j+1] === s[s.length - 1 - j] && palindrome(s.slice(0, j) + s.slice(j+1))) {
                // Delete left-side
                index = j
            }
            else if(s[j] === s[s.length - 2 - j] && palindrome(s.slice(0, s.length - 1 - j) + s.slice(s.length - j))) {
                // Delete right-side
                index = s.length - 1 - j
            }
            else {
                // Not a possible palindrome
                index = -1
            }
            break
        }
    }   
    return index
}

function palindrome(str) {
    let len = str.length
    let mid = Math.floor(len/2)

    for(let i = 0; i < mid; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
    }
    return true
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        const result = palindromeIndex(s);

        ws.write(result + '\n');
    }

    ws.end();
}
