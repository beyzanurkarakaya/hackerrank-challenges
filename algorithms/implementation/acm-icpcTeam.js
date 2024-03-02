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
 * Complete the 'acmTeam' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY topic as parameter.
 */

function acmTeam(topic) {
    // Write your code here
    let ans = []
    for(let i = 0; i < topic.length - 1; i++) {
        for(let j = i + 1; j < topic.length; j++) { 
            let count = check(topic[i], topic[j])
            ans.push(count)
        }
    }
    
    let obj = {}
    for(let i = 0; i < ans.length; i++) {
        if(obj[ans[i]] == undefined) {
            obj[ans[i]] = 1
        } else {
            obj[ans[i]]++
        }
    }

    let maxValue = -Infinity
    let maxIndex = 0
    for(let key in obj) {
        if(maxValue < key) {
            maxValue = key
            maxIndex = obj[key]
        }
    }
    return [maxValue,maxIndex]
}

function check(arr, arrTwo) {
  let count = 0
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == 0 && arrTwo[i] == 0) {
      continue
    } else {
      count++
    }
  }
  return count
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    let topic = [];

    for (let i = 0; i < n; i++) {
        const topicItem = readLine();
        topic.push(topicItem);
    }

    const result = acmTeam(topic);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
