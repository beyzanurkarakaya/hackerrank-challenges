function processData(input) {
    //Enter your code here
    const inputData = input.split('\n')
    const data = inputData[0].split(' ').map(x => parseInt(x))
    const q1 = parseFloat(inputData[1])
    const q2 = parseFloat(inputData[2])
    const mean = data[0]
    const std = data[1]

    let result1 = 100 * (1 - cumulative(mean, std, q1))
    let result2 = 100 * (1 - cumulative(mean, std, q2))
    let result3 = 100 * cumulative(mean, std, q2)

    console.log(result1.toFixed(2))
    console.log(result2.toFixed(2))
    console.log(result3.toFixed(2))
}

function cumulative(mean, std, value) {
    return 0.5 * (1 + erf((value - mean) / (std * (2 ** 0.5))))
}

function erf(x) {
    // constants
    var a1 =  0.254829592;
    var a2 = -0.284496736;
    var a3 =  1.421413741;
    var a4 = -1.453152027;
    var a5 =  1.061405429;
    var p  =  0.3275911;

    // Save the sign of x
    var sign = 1;
    if (x < 0) {
        sign = -1;
    }
    x = Math.abs(x);

    // A&S formula 7.1.26
    var t = 1.0/(1.0 + p*x);
    var y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);

    return sign*y;
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
