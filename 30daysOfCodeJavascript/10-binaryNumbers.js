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



function main() {
    const n = parseInt(readLine().trim(), 10);
    let input = n
    let binaryReverse = []
    while (input >= 1) {
        let remainder = input%2
        binaryReverse.push(remainder)
        input = Math.floor(input/2)
    }
    let binary = binaryReverse.reverse()
    
    let maxOne = 0;
    let counter = 0;
    
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 1)
            counter++;
        else if (binary[i] == 0){
            if (counter > maxOne)
                maxOne = counter;
            counter = 0;
        }
    }
    
    if (counter > maxOne)
        maxOne = counter;
    
    console.log(maxOne);
}
