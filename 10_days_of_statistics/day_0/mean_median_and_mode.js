function processData(input) {
    //Enter your code here
    let numbers = input.split("\n")
    let arraySize = numbers[0]
    let sortedNumbers = numbers[1].split(" ").map(Number).sort((a, b) => a - b)

    // MEAN  
    let sum = 0
    sortedNumbers.forEach((item) => sum += item)
    let mean = sum/arraySize
    
    console.log(mean)

    // MEDIAN
    let median
    if(arraySize%2 == 0) {
        median = (sortedNumbers[arraySize/2 - 1] + sortedNumbers[arraySize/2]) / 2
    } else {
        median = sortedNumbers[arraySize/2]
    }
    
    console.log(median)
    
    let mode, max = 0, count = 0, current = sortedNumbers[0]

    // MODE
    for(let i = 0; i < arraySize; i++) {
        if(sortedNumbers[i] == current) {
            count += 1
        } else {
            count = 1
            current = sortedNumbers[i]
        }
        if(count > max) {
            max = count
            mode = sortedNumbers[i]
        }
    }
    
    console.log(mode)
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
