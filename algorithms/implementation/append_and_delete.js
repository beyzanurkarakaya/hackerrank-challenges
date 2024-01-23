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
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    // Write your code here
    // Case 1
    if (t === s) 
        return "Yes"
    // Case 2
    if (s.length + t.length <= k)
        return 'Yes'
    // Case 3  
    let i = 0, sSize = s.length, tSize = t.length
    while(s[i] == t[i]) {
        i++
    }
    let del = sSize - i, app = tSize - i
    if(((del+app) <= k) && ((k - (del+app)) % 2 == 0)) {
        return "Yes"
    } else {
        return "No"
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = appendAndDelete(s, t, k);

    ws.write(result + '\n');

    ws.end();
}
