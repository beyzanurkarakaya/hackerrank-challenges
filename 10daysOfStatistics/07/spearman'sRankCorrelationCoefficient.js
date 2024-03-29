function processData(input) {
    //Enter your code here
    const inputData = input.split('\n');
    const size = parseInt(inputData[0]);
    const X = inputData[1].trim().split(' ').map(a => parseFloat(a));
    const Y = inputData[2].trim().split(' ').map(a => parseFloat(a));
   
    console.log(spearman(X, Y).toFixed(3));
}

function spearman(X, Y) {
    if (X == null || Y == null || X.length != Y.length) return null;

    const rankX = getRanks(X);
    const rankY = getRanks(Y);

    const n = X.length;
    let numerator = 0;
    for (let i = 0; i < n; i++) {
        numerator += Math.pow((rankX[i] - rankY[i]), 2);
    }
    numerator *= 6;
    return 1 - numerator / (n * ((n * n) - 1));
}

function getRanks(array) {
    const n = array.length;

    let pair = new Array;
    for (let i = 0; i < n; i++) {
        pair[i] = new Pair(i, array[i]);
    }

    pair.sort(function (a, b) {
        let epsilon = 0.0001;

        if (Math.abs(a.value - b.value) < epsilon) {
            return 0;
        } else if (a.value < b.value) {
            return -1;
        } else {
            return 1;
        }
    });

    let ranks = new Array;
    let rank = 1;
    for (let i = 0; i < pair.length; i++) {
        ranks[pair[i].index] = rank++;
    }
    return ranks;
}

class Pair {

    constructor(i, v) {
        this.index = i;
        this.value = v;
    }
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
