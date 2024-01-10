function processData(input) {
    //Enter your code here
    const processInput = input.split(' ').map((a) => parseInt(a))
    const p = processInput[0]/100
    const n = processInput[1]
    
    // <= 2 rejects
    let resultA = 0
    for (let x = 0; x <= 2; x++) {
        resultA += binomial(n, x, p)
    }
    console.log(resultA.toPrecision(3))

    // >= 2 rejects
    let resultB =  1 - binomial(n, 0, p) - binomial(n, 1, p)
    console.log(resultB.toPrecision(3))
}

function factorial (n) {
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
