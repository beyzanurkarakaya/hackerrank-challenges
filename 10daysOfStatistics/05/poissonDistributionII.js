function processData(input) {
    //Enter your code here
    const inputData = input.split(" ").map(x => parseFloat(x))
    const a = inputData[0]
    const b = inputData[1]
    
    let dailyA = 160 + 40 * (a + (a * a))
    let dailyB = 128 + 40 * (b + (b * b))
    
    console.log(dailyA.toFixed(3))
    console.log(dailyB.toFixed(3))
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
