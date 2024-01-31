function processData(input) {
    //Enter your code here
    const inputData = input.split('\n').map(a => parseFloat(a));

    const n = inputData[0]; // 100
    const mean = inputData[1]; // 500
    const std = inputData[2]; // 80
    const distPercent = inputData[3]; // 0.95
    const zScore = inputData[4]; // 1.96

    const marginOfError = zScore * std / Math.sqrt(n);

    console.log((mean - marginOfError).toFixed(2));
    console.log((mean + marginOfError).toFixed(2));
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
