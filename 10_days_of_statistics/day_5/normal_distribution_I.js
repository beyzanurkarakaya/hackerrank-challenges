function processData(input) {
    //Enter your code here
    const inputData = input.split("\n")
    const data = inputData[0].split(' ').map(a => parseInt(a));
    const q1 = parseFloat(inputData[1]);
    const q2 = inputData[2].split(' ');
    const q2A = parseFloat(q2[0]);
    const q2B = parseFloat(q2[1]);
    const mean = data[0];
    const std = data[1];
    
    console.log(cumulative(mean, std, q1).toFixed(3));
    console.log((cumulative(mean, std, q2B) - cumulative(mean, std, q2A)).toFixed(3));
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
