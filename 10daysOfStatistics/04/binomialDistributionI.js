function processData(input) {
    //Enter your code here
    const processInput = input.split(' ')
    const ratio = parseFloat(processInput[0]);
    const numPerBirth = parseFloat(processInput[1]);
    const n = 6
    const p = ratio / (1 + ratio)
    let totalResult = 0
    
    for (let x = 3; x <= n; x++) {
        totalResult += binomial(n, x, p)
    }

    console.log(parseFloat(totalResult).toFixed(3))
}

function factorial(n) {
    if (n < 0) {
        return null
    }
    if (n == 0 || n == 1) {
        return 1
    }
    let result = 1
    while (n > 0) {
        result *= n--
    }
    return result
}

function binomial(n, x, p) {
    let factorialResult = factorial(n) / (factorial(x) * factorial(n - x))
    return factorialResult * Math.pow(p, x) * Math.pow(1 - p, n - x)
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
