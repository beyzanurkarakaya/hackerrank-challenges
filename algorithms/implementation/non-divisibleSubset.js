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
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
    // Write your code here
    let count = [0], a = 0

    for(let i = s.length; i-- > 0;) {
        let mod = s[i] % k
        if(isNaN(count[mod])) {
            count[mod] = 1
        } else {
            ++count[mod]
        }
    }

    let result = 0

    for(let i = 1; k > 2 * i; ++i) {
        result += Math.max(isNaN(count[i]) ? 0 : count[i], isNaN(count[k - i]) ? 0 : count[k - i])
    }

    if(count[0] > 0) ++result

    if((k & 1) == 0 && count[k >> 1] > 0) ++result

    return result
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const k = parseInt(firstMultipleInput[1], 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const result = nonDivisibleSubset(k, s);

    ws.write(result + '\n');

    ws.end();
}
