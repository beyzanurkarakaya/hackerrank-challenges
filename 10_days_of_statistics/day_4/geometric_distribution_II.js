function processData(input) {
    //Enter your code here
    const processInput = input.split('\n')
    const fraction = processInput[0].split(' ').map((a) => parseInt(a))
    const numerator = fraction[0]
    const denominator = fraction[1]
    const n = parseInt(processInput[1])
    const p = numerator / denominator
    
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += Math.pow(1 - p, i - 1) * p
    }
    console.log(result.toPrecision(3))
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
