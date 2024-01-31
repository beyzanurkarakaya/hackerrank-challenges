function processData(input) {
    //Enter your code here
    const inputData = input.split("\n")
    const lambda = parseFloat(inputData[0])
    const k = parseInt(inputData[1])
    
    let poisson = Math.pow(lambda, k) * Math.pow(2.7182, -lambda) / factorial(k)
    
    console.log(parseFloat(poisson).toFixed(3))
}

function factorial(n) {
    if(n < 0) {
        return null
    }
    if(n == 0 || n == 1) {
        return 1
    }
    let result = 1
    while(n > 1) {
        result *= n--
    }
    return result
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
